import { getDbPosts } from "../models/postModel.js"

const getPosts = async (req, res) => {
    // Your code here
    res.send(await getDbPosts());
    
}

export { getPosts }