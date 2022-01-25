import { Schema, model } from "mongoose";
import { User } from "../interfaces/User";

const user_schema = new Schema<User>(
    {
        name:
            { type: String, required: true },
        profile_picture: { type: String },
        favorite_manga: { type: [String] }
    });

export const userModel = model('Model', user_schema);