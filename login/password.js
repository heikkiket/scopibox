import bcrypt from "bcrypt";

const saltRounds = 12;

const encrypt = async (password) => {
  return await bcrypt.hash(password, saltRounds);
};

const check = async (plaintext, hash) => {
  return await bcrypt.compare(plaintext, hash);
}

export { encrypt, check };
