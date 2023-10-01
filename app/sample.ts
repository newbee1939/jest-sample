export type User = {
  id: number;
  name: string;
  group: "A" | "B" | "C";
};

type UserKeys = keyof User;

export const groupBy = (values: User[]) => {
  return values.reduce((prev, current) => {
    const key = current.group.toString();
    (prev[key] || (prev[key] = [])).push(current);
    return prev;
  }, {} as { [key: string]: User[] });
};
