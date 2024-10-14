import { deCode, enCode } from "./CryptoUtil";

const Storage = localStorage.storage ? JSON.parse(localStorage.storage) : {};

const save = () => {
  localStorage.setItem("storage", JSON.stringify(Storage));
};

export const allStorage = () => Storage

export const setStorage = (key, value) => {
  Storage[key] = value;
  save();
};

export const getStorage = (key) => {
  return Storage[key] || "";
};

export const removeStorage = (key) => {
  delete Storage[key];
  save();
};
