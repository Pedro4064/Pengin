import { Schema, model } from "mongoose";
import { User } from "../interfaces/User";

const user_schema = new Schema<User>(
    {
        name:
            { type: String, required: true },
        profile_picture: { type: String },
        favorite_manga: { type: [String], required: true, default: [] }
    });

export const UserModel = model('Users', user_schema);