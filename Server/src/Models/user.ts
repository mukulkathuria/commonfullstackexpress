import { Schema, model } from "mongoose";
import { UserDto } from "../dto/user.dto";

const Users = new Schema<UserDto>({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 3,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model<UserDto>("Users", Users);
