/**
 * @module taggedTemplates
 */

/**
 * Normalize a string by converting diacriticals to base characters, removing non-word characters, and converting to lower case.
 *
 * @param {string} str - The string to normalize.
 * @returns {string} The normalized string or undefined if not a string.
 */
export const normstr = (str) =>
  str?.normalize && str?.replace && str?.toLowerCase
    ? str
        .normalize('NFKD')
        .replace(/[\p{Diacritic}\W]/gu, '')
        .toLowerCase()
    : undefined;

/**
 * Replicates standard string template behavior.
 *
 * @param {string[]} strings - The string literals.
 * @param {...any} exp - The expressions.
 * @returns {string} The output string.
 */
export const def = (strings, ...exp) =>
  exp.reduce((output, e, i) => output + e + strings[i + 1], strings[0]);

/**
 * Nil to Empty: replaces nil expressions with empty strings.
 *
 * @param {string[]} strings - The string literals.
 * @param {...any} exp - The expressions.
 * @returns {string} The output string.
 */
export const n2e = (strings, ...exp) =>
  exp.reduce((output, e, i) => output + (e ?? '') + strings[i + 1], strings[0]);

/**
 * Some Nil to Empty: returns empty string when any expression nil.
 *
 * @param {string[]} strings - The string literals.
 * @param {...any} exp - The expressions.
 * @returns {string} The output string.
 */
export const sn2e = (strings, ...exp) =>
  exp.some((e) => (e ?? undefined) === undefined)
    ? ''
    : exp.reduce((output, e, i) => output + e + strings[i + 1], strings[0]);

/**
 * Some Nil to Null: returns null when any expression nil.
 *
 * @param {string[]} strings - The string literals.
 * @param {...any} exp - The expressions.
 * @returns {string} The output string.
 */
export const sn2n = (strings, ...exp) =>
  exp.some((e) => (e ?? undefined) === undefined)
    ? null
    : exp.reduce((output, e, i) => output + e + strings[i + 1], strings[0]);

/**
 * Some Nil to Undefined: returns undefined when any expression nil.
 *
 * @param {string[]} strings - The string literals.
 * @param {...any} exp - The expressions.
 * @returns {string} The output string.
 */
export const sn2u = (strings, ...exp) =>
  exp.some((e) => (e ?? undefined) === undefined)
    ? undefined
    : exp.reduce((output, e, i) => output + e + strings[i + 1], strings[0]);
