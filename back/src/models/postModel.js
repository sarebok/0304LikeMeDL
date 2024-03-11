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
    const newPost = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *",
      [titulo, img, descripcion]
    );
    return newPost.rows[0];
  } catch (err) {
    console.error(err.message);
  }
};
  
  export { getDbPosts, createPost };
