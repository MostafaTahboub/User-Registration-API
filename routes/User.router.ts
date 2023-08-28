import express from 'express';
import { User } from '../db/entities/User';

const router = express.Router();


router.post('/register', async (req, res) => {
    const newUser = User.create();
    newUser.name = req.body.name;
    newUser.password = req.body.password;
    
    await newUser.save()
        .then(() => {
            res.status(201).send("User created successfully ");
        })
        .catch(() => {
            res.status(500).send("something went wrong ");
        })
});


router.get('/all', async (req: any, res: any) => {
    try {
        const [users, total] = await User.findAndCount();
        res.status(200).send({users, total})
    } catch (error) {
        console.log("failed to get all users due to this error " + error);
        res.status(500).send('something went wrong ');
    }
});


export default router;