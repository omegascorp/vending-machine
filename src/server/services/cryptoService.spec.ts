import { sha256 } from "./cryptoService";

describe("cryptoServuce", () => {
  describe("sha256", () => {
    it("should create hex sha256 from password", () => {
      expect(sha256("password")).toEqual("5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8");
    });
  });
});
