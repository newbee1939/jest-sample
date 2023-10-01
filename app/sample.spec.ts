import { groupBy, User } from "./sample";

describe("groupBy", () => {
  test("グループ分けする", () => {
    const users: User[] = [
      { id: 1, name: "jiro", group: "A" },
      { id: 2, name: "hana", group: "B" },
      { id: 3, name: "keita", group: "C" },
      { id: 4, name: "yuta", group: "B" },
      { id: 5, name: "ai", group: "C" },
      { id: 6, name: "sakura", group: "B" },
    ];

    const result = groupBy(users);

    console.log(result);

    expect(result).toEqual({
      A: [{ id: 1, name: "jiro", group: "A" }],
      B: [
        { id: 2, name: "hana", group: "B" },
        { id: 4, name: "yuta", group: "B" },
        { id: 6, name: "sakura", group: "B" },
      ],
      C: [
        { id: 3, name: "keita", group: "C" },
        { id: 5, name: "ai", group: "C" },
      ],
    });
  });
});
