export const groupBy = <T>(values: T[], key: keyof T) => {
  return values.reduce((prev, current) => {
    const keyValue = String(current[key]);
    (prev[keyValue] || (prev[keyValue] = [])).push(current);
    return prev;
  }, {} as Record<string, T[]>);
};
