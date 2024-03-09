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

//should i export?
export { getDbPosts };