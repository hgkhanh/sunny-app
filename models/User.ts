import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema({
    googleId: String,
    cities: [String]
});

const User = mongoose.model('users', userSchema);

export interface IUser extends Document {
    googleId: string,
    cities: Array<string>
}

export default User;
