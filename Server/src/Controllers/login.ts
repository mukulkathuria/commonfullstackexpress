import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN } from "../Constants/constants";
import { LoginDto } from "../dto/login.dto";
import User from "../Models/user";
import { ValidatePass } from "./bcrypt";

export async function loginController(params: LoginDto) {
  const user = await User.findOne({ email: params.email });
  if (!user) return { error: "Invalid Username and Password" };

  //check the Validate Password
  const ValidPass = await ValidatePass(
    params.password,
    user.password
  );
  if (!ValidPass) return { error: "Invalid Username and Password" };

  //If All Ok then and Generate Token
  const token = sign(
    {
      name: user.name,
      email: user.email,
    },
    ACCESS_TOKEN,
    {
      algorithm: "HS512",
      expiresIn: "1h",
    }
  );
  const refreshToken = sign(
    {
      name: user.name,
      email: user.email,
    },
    ACCESS_TOKEN,
    {
      algorithm: "HS512",
      expiresIn: "3h",
    }
  );
  return { access_token: token, refresh_token: refreshToken };
}
