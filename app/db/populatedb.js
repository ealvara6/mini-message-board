const { Client } = require('pg');
require('dotenv').config();

const SQL = `
DROP TABLE posts;

CREATE TABLE posts (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR ( 10 ),
post VARCHAR ( 255 ),
date_added DATE DEFAULT CURRENT_DATE
);

INSERT INTO posts (username, post)
VALUES
('Bryan', 'Hello World!'),
('Ashley', 'The Odin Project is Awesome!');
`;

const main = async () => {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`
    });
    
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();
