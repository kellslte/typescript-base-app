import { register } from "../controllers/auth.controller";
import express from "express";

const auth = (router: express.Router) => {
    router.post('/auth/register', register);
}

export default auth;