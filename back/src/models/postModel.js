import pool from "../../db/connectionDb.js";

//tell me the code to import one post
const getDbPosts = async (req, res) => {
  try {
    console.log("holi");
    const response = await pool.query("SELECT * FROM posts");
    /* res.json(response.rows); */
    return response.rows;
  } catch (error) {
    console.error(error.message);
  }
};

const createPost = async (titulo, img, descripcion) => {
  try {
    console.log(`Creating post with title ${titulo}`);
    const newPost = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
      [titulo, img, descripcion, 0]
    );
    console.log(`Created post: ${JSON.stringify(newPost.rows[0])}`);
    return newPost.rows[0];
  } catch (err) {
    console.error(`Error creating post with title ${titulo}: ${err.message}`);
  }
};

const updatePost = async (id) => {
  try {
    console.log(`Updating post with id ${id}`);
    const updatedPost = await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );

    console.log(`Updated post: ${JSON.stringify(updatedPost.rows[0])}`);

    if (updatedPost.rowCount === 0) {
      console.log(`No post found with id ${id}`);
      return null;
    }

    return updatedPost.rows[0];
  } catch (err) {
    console.error(`Error updating post with id ${id}: ${err.message}`);
  }
};

const deletePost = async (id) => {
  try {
    const deletedPost = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    return deletedPost.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};





  
  export { getDbPosts, createPost, updatePost, deletePost };
