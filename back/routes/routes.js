import  express from "express";
import { getPosts, postPosts } from "../src/controllers/controllers.js";

const router = express.Router();

// GET route
router.get('/posts', getPosts);
router.post('/posts', postPosts);

export default router;