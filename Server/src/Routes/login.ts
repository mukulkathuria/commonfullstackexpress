import { Router } from "express";
import { loginController } from "../Controllers/login";
import { validlogin } from "../Validations/login";

const router = Router();

router.post("/user/login", async (req, res) => {
  const { error: validerr } = validlogin(req.body);
  if (validerr) return res.status(422).json({ message: validerr });

  const { error, access_token, refresh_token } = await loginController(
    req.body
  );
  if (error) return res.status(422).json({ message: error });

  return res.json({ access_token, refresh_token });
});

export default router;
