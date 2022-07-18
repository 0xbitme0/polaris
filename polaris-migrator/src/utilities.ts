interface ReplacementValues {
  [key: string]: string;
}

/**
 * Creates a regex that can be used to replace a mapping of keys with a corresponding value.
 * @param {ReplacementValues} replacementValues -  The key is the current string and the value is the replacement string.
 * @returns {RegExp}
 */
export const createRegex = (replacementValues: ReplacementValues) =>
  new RegExp(
    Object.keys(replacementValues)
      .map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|'),
    'g',
  );
