import CryptoJS from "crypto-js";

const key = "javid01event";

export const enCode = (string) => {
  return CryptoJS.AES.encrypt(string, key).toString();
};

export const deCode = (string) => {
  return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
};
