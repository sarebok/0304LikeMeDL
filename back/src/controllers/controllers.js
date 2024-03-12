import { getDbPosts, createPost, updatePost, deletePost } from "../models/postModel.js"

const getPosts = async (req, res) => {
    // Your code here
    res.send(await getDbPosts());
    
}


const postPosts = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body;
        const newPost = await createPost(titulo, img, descripcion, likes);
        res.json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the post');
    }
};

const likePost = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedPost = await updatePost(id);
  
      if (!updatedPost) {
        return res.status(404).send('Post not found');
      }
  
      res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while liking the post');
    }
  };

const deletePosts = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const deletedPost = await deletePost(id);
        if (deletedPost) {
            res.json(deletedPost);
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the post');
    }
};

export { getPosts, postPosts, likePost, deletePosts }