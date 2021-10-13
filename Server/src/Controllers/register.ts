import User from "../Models/user";
import { ACCESS_TOKEN } from "../Constants/constants";
import { hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { RegisterDto } from "../dto/register.dto";

export async function registerController(params: RegisterDto) {
  const salt = await genSalt(10);
  const hashedPass = await hash(params.password, salt);

  const user = new User({
    name: params.name,
    email: params.email,
    password: hashedPass,
  });

  try {
    await user.save();
    const token = sign(
      { name: params.name, email: params.email },
      ACCESS_TOKEN,
      {
        algorithm: "HS512",
        expiresIn: "1h",
      }
    );
    const refreshToken = sign(
      { name: params.name, email: params.email },
      ACCESS_TOKEN,
      {
        algorithm: "HS512",
        expiresIn: "3h",
      }
    );
    return { token, refreshToken };
  } catch (err) {
    throw err;
  }
}
