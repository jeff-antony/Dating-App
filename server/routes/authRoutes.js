
import express from "express"
import passport from "passport"
import { Router } from "express"
import dotenv from 'dotenv'
import { login,updateUserProfile } from "../controllers/authController.js"



const router = express.Router()
dotenv.config()
const accoundSid = process.env.accoundSid
const authtoken = process.env.authtoken

router.post('/login', login)
router.put('/profile-Set-Up/:userId', updateUserProfile)


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:5100/api/auth/login' }),
    (req, res) => {

        const isNew = req.user.isNew;
        const userId = req.user.user._id;
        if (isNew) {
            
            res.redirect(`http://localhost:5173/profile-Set-Up/${userId}`);
        } else {
            res.redirect('http://localhost:5100/api/user/profile');
        }


       
    }
);



export default router;
