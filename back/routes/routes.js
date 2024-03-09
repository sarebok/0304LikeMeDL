import  express from "express";

const router = express.Router();

// GET route
router.get('/posts', (req, res) => {
    // Your code here
    res.send('chao world desde routes')
});

export default router;