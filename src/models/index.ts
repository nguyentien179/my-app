import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    role: string;
    email: string; // Add this line
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true } // And this line
});

export default mongoose.model<IUser>('User', UserSchema);