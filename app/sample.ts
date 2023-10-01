export type User = {
  id: number;
  name: string;
  group: "A" | "B" | "C";
};

export const groupBy = (users: User[]) => {
  return users.reduce((prev, current) => {
    const key = current.group.toString();
    (prev[key] || (prev[key] = [])).push(current);
    return prev;
  }, {} as { [key: string]: User[] });
};
