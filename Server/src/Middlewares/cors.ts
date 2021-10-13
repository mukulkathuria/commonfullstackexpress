import { Request, Response } from "express";

export function addcors(req: Request, res: Response, next: Function) {
  res.header("Access-Control-Allow-Origin: *");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token"
  );
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Access-Control-Allow-Origin,Content-Type,authorization,Accept,token,match_key,userId,user_id");
  next();
}
