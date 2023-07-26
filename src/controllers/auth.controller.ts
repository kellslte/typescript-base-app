import { Request, Response} from 'express';
import { createUser, getUserByEmail } from '../services/user.service';
import { authentication, random } from '../helpers';

export const register = async function (req: Request, res: Response) {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        
        const user = await getUserByEmail(email);

        if (!user) {
            return res.sendStatus(404);
        }

        const salt = random();

        const newUser = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password)
            }
        });

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                user: newUser
            }
        })
    } catch (e) {
        console.error(e);
        return res.sendStatus(404);
    }
} 