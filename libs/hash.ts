import * as Crypto from "expo-crypto";
export const hashString = async (str: string): Promise<string> => {
  const hashedString = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    str,
  );
  return hashedString;
};
