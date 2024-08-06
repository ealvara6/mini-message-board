const pool = require('./pool');

const getAllPosts = async () => {
    const { rows } = await pool.query(`SELECT
        id,
        username,
        post,
        TO_CHAR(NOW()::date, 'dd/mm/yyyy') AS date_added
        FROM posts`);
    return rows;
}

const getPost = async(id) => {
    const { rows } = await pool.query(`SELECT
        id,
        username,
        post,
        TO_CHAR(NOW()::date, 'dd/mm/yyyy') AS date_added
        FROM posts
        WHERE id=$1`, [id]);
    return rows;
}

module.exports = {
    getAllPosts,
    getPost,
};
