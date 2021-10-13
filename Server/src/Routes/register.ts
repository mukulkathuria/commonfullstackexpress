import { Router } from "express";
import { registerController } from "../Controllers/register";
import User from "../Models/user";
import { validatesignup } from "../Validations/register";

const router = Router();

router.post("/user/register", async (req, res, next) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(422).json({ message: "Email already Exist" });

  const { error } = validatesignup(req.body);
  if (error) return res.status(422).json({ message: error });

  //Hashed Password
  try {
    const { token, refreshToken } = await registerController(req.body);
    res.json({ access_token: token, refresh_token: refreshToken });
  } catch (err) {
    if (err) {
      throw new Error("Data is not saved to mongodb");
    }
    next();
  }
});

export default router;
