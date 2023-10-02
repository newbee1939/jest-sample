export const group = <T>(values: T[], key: keyof T) => {
  return values.reduce((prev, current) => {
    const keyValue = String(current[key]);
    (prev[keyValue] || (prev[keyValue] = [])).push(current);
    return prev;
  }, {} as Record<string, T[]>);
};

// https://www.engilaboo.com/typescript-utility-types/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
