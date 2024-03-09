import  express from "express";
import { getPosts } from "../src/controllers/controllers.js";

const router = express.Router();

// GET route
router.get('/posts', getPosts);

export default router;