import { getDbPosts, createPost } from "../models/postModel.js"

const getPosts = async (req, res) => {
    // Your code here
    res.send(await getDbPosts());
    
}


const postPosts = async (req, res) => {
    try {
        const { titulo, img, descripcion } = req.body;
        const newPost = await createPost(titulo, img, descripcion);
        res.json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the post');
    }
};

export { getPosts, postPosts }