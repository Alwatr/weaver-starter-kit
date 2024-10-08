import {readFileSync} from 'node:fs';
import {resolve} from 'path';

import {GoogleGenerativeAI} from '@google/generative-ai';
import {Region} from 'alwatr/nitrobase';

import {logger, config} from './config.js';
import {alwatrNitrobase} from './nitrobase.js';

function readFile(resolvedFilePath: string): Buffer | null {
  try {
    return readFileSync(resolvedFilePath);
  }
  catch (error) {
    logger.error('readFile', 'reading_file_error', {resolvedFilePath, error});
    return null;
  }
}

async function googleGenerativeAI(entity: string, templateFile: Buffer) {
  const genAI = new GoogleGenerativeAI(config.googleGenerativeAI.apiKey);

  const model = genAI.getGenerativeModel({ model: config.googleGenerativeAI.model});

  const result = await model.generateContent([
    config.googleGenerativeAI.prompt.replace('{{entity}}', entity),
    // 'What in the picture?',
    {
      inlineData: {
        data: Buffer.from(templateFile).toString('base64'),
        mimeType: config.templateFileInfo.mimeType
      }
    }
  ]);

  return result.response;
}

export async function generateDataByGeminiAPI() {
  try {
    // Resolve the file path (optional, but useful for relative paths)
    const resolvedFilePath = resolve(config.templateFileInfo.path);

    // Read the `.md` file data
    const templateFile = readFile(resolvedFilePath);
    if (templateFile === null) return;

    for (const entity of config.entities) {
      const apiResult = await googleGenerativeAI(entity, templateFile);
      const generatedData = apiResult.text();
      logger.logMethodArgs?.('generateDataByGeminiAPI', {entity, generatedData});

      alwatrNitrobase.newDocument({
        name: 'exchanges/' + entity,
        region: Region.Public
      }, generatedData);
    }
  }
  catch (error) {
    logger.error('generateDataByGeminiAPI', 'generating_ai_data_failed', {error});
  }
}
