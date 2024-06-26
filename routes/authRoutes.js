
import express from "express"
import passport from "passport"
import { Router } from "express"
import {register, login, logout} from "../controllers/authController.js"
import { validateRegisterInput, validateLoginInput } from './../middlewares/validationMiddleware.js';

const router = express.Router()

router.post('/register',validateRegisterInput, register);
router.post('/login',validateLoginInput, login)
router.get('/logout', logout)


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:5100/api/auth/login' }),
    (req, res) => {
        // Successful authentication, redirect to the profile page
        // res.redirect('http://localhost:5100/api/user/profile');
        res.redirect('http://localhost:5173/register');
    }
);

export default router;
