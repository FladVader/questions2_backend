const promise = require('bluebird');
const Database = require('better-sqlite3');
const db = new Database('database.db', { verbose: console.log });
var pg = require('pg');

var conString = process.env.ELEPHANTSQL_URL || "postgres://ysbibvle:7wD-LX4KUqbOCF9XOiHe4Q4xKRt0VZaE@hattie.db.elephantsql.com:5432/ysbibvle";



const getAllMostLikely = async() => {
    var client = new pg.Client(conString);
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM mest_trolig', function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });
        })
    })
};

const getAllNeverHaveiEver = async() => {
    var client = new pg.Client(conString);
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM jag_har_aldrig', function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });
        })
    })
};

const getAllIdiotQuestions = async() => {
    var client = new pg.Client(conString);
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM idiotfragan', function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });
        })
    })
};

const getAllIsAlive = async() => {
    var client = new pg.Client(conString);
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM lever_den_javeln', function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log('Någon hämtade skiten');
                client.end();
                resolve(result.rows);
            });
        })
    })
};

const getGamePG = async(id) => {
    var client = new pg.Client(conString);
    const gameId = id;
    console.log(id)
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('SELECT * FROM videogames_v2 WHERE id = $1', [id], function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });
        })
    })
};

const addGamePg = async(title, genre, platform, img) => {
    var client = new pg.Client(conString);

    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('INSERT INTO videogames_v2 (title, genre, platform, img) VALUES ($1, $2, $3, $4)', [title, genre, platform, img], function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });


        })
    })
};

const deleteGamePG = async(id) => {
    var client = new pg.Client(conString);
    const gameId = id;
    console.log(id)
    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('DELETE FROM videogames_v2 WHERE id= $1', [id], function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });

        })
    })
};

const updateGamePg = async(id, title, genre, platform, img) => {
    var client = new pg.Client(conString);

    return new Promise((resolve, reject) => {

        client.connect(async function(err) {

            if (err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('UPDATE videogames_v2 SET title=$1, genre=$2, platform=$3, img=$4 WHERE id= $5', [title, genre, platform, img, id], function(err, result) {
                if (err) {
                    return console.error('error running query', err);
                }
                console.log(result.rows);
                client.end();
                resolve(result.rows);
            });


        })
    })
};



module.exports = { getAllMostLikely, getAllNeverHaveiEver, getAllIdiotQuestions, getAllIsAlive };