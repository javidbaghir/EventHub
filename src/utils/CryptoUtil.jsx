import CryptoJS from "crypto-js";

export const enCode = (string, key) => {
  return CryptoJS.AES.encrypt(string, key).toString();
};

export const deCode = (string, key) => {
  return CryptoJS.AES.decrypt(string, key).toString(CryptoJS.enc.Utf8);
};
