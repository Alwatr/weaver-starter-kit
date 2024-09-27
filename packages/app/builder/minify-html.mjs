import {minify} from '@swc/html';
import {logger} from './logger.mjs';

/**
 * @type {import("@swc/html").Options}
 */
const swcHtmlOptions = {
  forceSetHtml5Doctype: true,
  quotes: true,
  collapseWhitespaces: 'smart',
  removeEmptyMetadataElements: true,
  removeComments: true,
  preserveComments: [],
  // removeEmptyAttributes: true,
  // removeRedundantAttributes: true,
  // collapseBooleanAttributes: true,
  normalizeAttributes: true,
  minifyJs: true,
  minifyCss: true,
  sortAttributes: true,
  tagOmission: false,
  selfClosingVoidElements: true,
  sortSpaceSeparatedAttributeValues: false,
};

export async function minifyHtml(content) {
  logger.logMethod?.('minifyHtml');
  if (!this.page.outputPath || !this.page.outputPath.endsWith('.html')) return content;
  try {
    const result = await minify(Buffer.from(content), swcHtmlOptions);
    return result.code;
  } catch (err) {
    logger.error('minifyHtml', err);
    return content;
  }
}
