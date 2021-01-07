import AES from "crypto-js/aes";

export const encryptMessage = (message) => {
  return AES.encrypt(message, process.env.VUE_APP_ENCODER_KEY);
};

export const decryptMessage = (message) => {
  return AES.decrypt(message, process.env.VUE_APP_ENCODER_KEY);
};
