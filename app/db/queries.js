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

const insertPost = async (username, post) => {
    await pool.query(`INSERT INTO posts (username, post )
        VALUES($1, $2)`, [username, post]);
}

module.exports = {
    getAllPosts,
    getPost,
    insertPost,
};
