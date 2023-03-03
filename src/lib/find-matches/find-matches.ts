export const findMatches = (subString: string, exclusionPatterns: string[]) => {
  const matches = exclusionPatterns.filter((pattern) => new RegExp(pattern, 'gi').test(subString));
  return !(matches.length > 0);
};

