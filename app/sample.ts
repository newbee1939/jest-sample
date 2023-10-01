export type User = {
  id: number;
  name: string;
  group: "A" | "B" | "C";
};

type UserKeys = keyof User;

export const groupBy = <T>(values: T[], key: string) => {
  return values.reduce((prev, current) => {
    const key = current.key.toString();
    (prev[key] || (prev[key] = [])).push(current);
    return prev;
  }, {} as { [key: string]: T[] });
};
