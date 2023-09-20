import { getResult } from "./sample";

describe("getResult", () => {
  describe("3の倍数でも5の倍数でもあるとき", () => {
    test("0を返す", () => {
      const result = getResult(15);
      expect(result).toBe("0");
    });
  });

  describe("5の倍数のとき", () => {
    test("1を返す", () => {
      const result = getResult(25);
      expect(result).toBe("1");
    });
  });

  describe("3の倍数のとき", () => {
    test("2を返す", () => {
      const result = getResult(48);
      expect(result).toBe("2");
    });
  });

  describe("それ以外のとき", () => {
    test("3を返す", () => {
      const result = getResult(112);
      expect(result).toBe("3");
    });
  });
});
