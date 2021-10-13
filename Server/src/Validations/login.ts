import { emailregex, passregex } from "../Constants/regexs";
import { LoginDto } from "../dto/login.dto";

export function validlogin(body: LoginDto) {
  if (!body.email || !emailregex.test(body.email)) {
    return { error: "Please specify valid email and password" };
  }
  if (!body.password || !passregex.test(body.password)) {
    return { error: "Please specify valid email and password" };
  }
  return { data: true };
}
