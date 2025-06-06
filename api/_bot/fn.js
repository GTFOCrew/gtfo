import path from 'node:path'

/**
 * Build data file path from its name
 * @param {string} file name of the file
 * @returns {string} absolute path to the file
 */
export const data = (file) => path.join(import.meta.dirname, 'data', file)
