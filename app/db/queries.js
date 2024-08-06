const pool = require('./pool');

const getAllPosts = async () => {
    const { rows } = await pool.query(`SELECT
        username,
        post,
        TO_CHAR(NOW()::date, 'dd/mm/yyyy') AS date_added
        FROM posts`);
    return rows;
}

module.exports = {
    getAllPosts,
};
