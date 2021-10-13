import { emailregex, passregex } from "../Constants/regexs";
import { RegisterDto } from "../dto/register.dto";

export function validatesignup(body: RegisterDto) {
  if (!body.name) {
    return { error: "Please specify name" };
  }
  if (!body.email || !emailregex.test(body.email)) {
    return { error: "Please specify valid email" };
  }
  if (!body.password || !passregex.test(body.password)) {
    return { error: "Please specify valid password" };
  }
  return { data: true };
}
