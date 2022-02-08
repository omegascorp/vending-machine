import { sha256 } from "./cryptoService";

describe('cryptoServuce', () => {
  describe('sha256', () => {
    it('should create hex sha256 from password', () => {
      expect(sha256('password')).toEqual('');
    });
  });
});
