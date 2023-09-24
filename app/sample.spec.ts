import { getResult } from "./sample";

describe("getResult", () => {
  test("3の倍数でも5の倍数でもあるとき0を返す", () => {
    const result = getResult(15);
    expect(result).toBe("0");
  });

  test("5の倍数のとき1を返す", () => {
    const result = getResult(25);
    expect(result).toBe("1");
  });

  test("3の倍数のとき2を返す", () => {
    const result = getResult(48);
    expect(result).toBe("2");
  });

  test("それ以外のとき3を返す", () => {
    const result = getResult(112);
    expect(result).toBe("3");
  });
});
