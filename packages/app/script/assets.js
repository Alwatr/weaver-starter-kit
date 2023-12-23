import {logger} from './logger.js';
import {fileURLToPath} from 'url';
import {copyFile, mkdir} from 'fs/promises';

export async function copyFont(fontName, outDir) {
  logger.logMethodArgs?.('copyFont', {fontName, outDir});
  await mkdir(outDir, {recursive: true});
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-100.woff')), 'dist/font/vazirmatn/vazirmatn-100.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-200.woff')), 'dist/font/vazirmatn/vazirmatn-200.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-300.woff')), 'dist/font/vazirmatn/vazirmatn-300.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-400.woff')), 'dist/font/vazirmatn/vazirmatn-400.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-500.woff')), 'dist/font/vazirmatn/vazirmatn-500.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-600.woff')), 'dist/font/vazirmatn/vazirmatn-600.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-700.woff')), 'dist/font/vazirmatn/vazirmatn-700.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-800.woff')), 'dist/font/vazirmatn/vazirmatn-800.woff');
  await copyFile(fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn-900.woff')), 'dist/font/vazirmatn/vazirmatn-900.woff');
  await copyFile(
    fileURLToPath(import.meta.resolve('@alwatr/font/vazirmatn/vazirmatn[wght].woff2')),
    'dist/font/vazirmatn/vazirmatn[wght].woff2',
  );
}
