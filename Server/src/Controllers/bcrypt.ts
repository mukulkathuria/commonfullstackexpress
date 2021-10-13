import { genSalt, compare, hash } from "bcrypt";

async function generateSalt() {
  const salt = await genSalt(10);
  return salt;
}

export async function MakePassword(value: string) {
  const salt = await generateSalt();
  const hashedPass = await hash(value, salt);
  return hashedPass;
}

export async function ValidatePass(pass: string, hashed: string) {
  return await compare(pass, hashed);
}
