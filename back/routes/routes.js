import  express from "express";
import { getPosts, postPosts, deletePosts, likePost } from "../src/controllers/controllers.js";


const router = express.Router();


router.get('/posts', getPosts);
router.post('/posts', postPosts);
router.put('/posts/like/:id', likePost);
router.delete('/posts/:id', deletePosts);

export default router;