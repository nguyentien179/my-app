import { Request, Response } from 'express';
import User, { IUser } from '../models/index';

class UserController {
    // Get all users
    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users: IUser[] = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    // Get a user by id
    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user: IUser | null = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    // Create a new user
    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const newUser: IUser = new User(req.body);
            const result = await newUser.save();
            res.json(result);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    // Update a user
    public async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser: IUser | null = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedUser);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    // Delete a user
    public async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const deletedUser: IUser | null = await User.findByIdAndDelete(req.params.id);
            res.json(deletedUser);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

export default new UserController();