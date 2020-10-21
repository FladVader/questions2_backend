const express = require('express');
const router = express.Router();
const database = require('./dbConnection')
const bodyParser = require('body-parser');

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async function(req, res) {


    res.json({ message: "This is the server for questions2 responding!" });
    console.log("Hello Mama");


});
router.get('/getall/mesttrolig', async function(req, res) {
    try {
        const allStatements = await database.getAllMostLikely();

        res.json(allStatements);
        console.log(allStatements)
    } catch (error) {

        console.log(error)
    }
})

router.get('/getall/jagharaldrig', async function(req, res) {
    try {
        const allStatements = await database.getAllNeverHaveiEver();

        res.json(allStatements);
        console.log(allStatements)
    } catch (error) {

        console.log(error)
    }
})

router.get('/getall/idiotfragan', async function(req, res) {
    try {
        const allStatements = await database.getAllIdiotQuestions();

        res.json(allStatements);
        console.log(allStatements)
    } catch (error) {

        console.log(error)
    }
})

router.get('/getall/leverdenjaveln', async function(req, res) {
    try {
        const allStatements = await database.getAllIsAlive();

        res.json(allStatements);
        console.log(allStatements)
    } catch (error) {

        console.log(error)
    }
})

router.post('/add/jagharaldrig', async(req, res) => {

    try {
        const newStatement = await req.body;
        newStatement.statement = req.body.statement;
        const addStatement = await database.addNeverHaveiEver(newStatement.statement);
        res.json(newStatement.statement + " = tillagd!")
    } catch (error) {

        console.log(error);
    }
});

router.post('/add/mesttrolig', async(req, res) => {

    try {
        const newStatement = await req.body;
        newStatement.statement = req.body.statement;
        const addStatement = await database.addMostLikely(newStatement.statement);
        res.json(newStatement.statement + " = tillagd!")
    } catch (error) {

        console.log(error);
    }
});

router.post('/add/leverdenjaveln', async(req, res) => {

    try {
        const newStatement = await req.body;
        newStatement.url1 = req.body.url1;
        newStatement.answer = req.body.answer;
        newStatement.url2 = req.body.url2;
        const addStatement = await database.addIsAlive(newStatement.url1, newStatement.answer, newStatement.url2);
        res.json(newStatement.answer + " Added!")

    } catch (error) {

        console.log(error);
    }
});

router.post('/add/idiotfragan', async(req, res) => {

    try {
        const newStatement = await req.body;
        newStatement.question = req.body.question;
        newStatement.url1 = req.body.url1;
        newStatement.answer = req.body.answer;
        newStatement.url2 = req.body.url2;
        const addStatement = await database.addIdiotQuestion(newStatement.question, newStatement.url1, newStatement.answer, newStatement.url2);
        res.json(newStatement.answer + " Added!")

    } catch (error) {

        console.log(error);
    }
});

// router.get('/getgamepg/:id/', async(req, res) => {
//     try {
//         const game = await database.getGamePG(req.params.id);
//         res.json(game);
//         console.log("This game: " + game.title);
//     } catch (error) {
//         console.log(error)
//         res.status(400).json('Game not found!')
//     }
// });

// router.post('/addgamepg', async(req, res) => {

//     try {
//         const newStatement = await req.body;


//         newStatement.title = req.body.title;
//         newStatement.genre = req.body.genre;
//         newStatement.platform = req.body.platform;
//         newStatement.img = req.body.img;

//         console.log(newStatement + "= newStatement");
//         const addGame = await database.addGamePg(newStatement.title, newStatement.genre, newStatement.platform, newStatement.img);
//         res.json(newStatement.title + " Added!")

//     } catch (error) {

//         console.log(error);
//     }
// });

// router.get('/deletegamepg/:id/', async(req, res) => {
//     try {
//         const game = await database.deleteGamePG(req.params.id);
//         res.json(game);
//         console.log("This game: " + game.title);
//     } catch (error) {
//         console.log(error)
//         res.status(400).json('Game not found!')
//     }
// });

// router.post('/updategamepg/', async(req, res) => {
//     try {
//         const updateGame = req.body;
//         updateGame.id = req.body.id;
//         updateGame.title = req.body.title;
//         updateGame.genre = req.body.genre;
//         updateGame.platform = req.body.platform;
//         updateGame.img = req.body.img;

//         console.log(updateGame)

//         const updatedGame = await database.updateGamePg(updateGame.id, updateGame.title, updateGame.genre, updateGame.platform, updateGame.img)
//         res.json("Game with id:" + updatedGame.id + " updated")

//     } catch (error) {
//         console.log(error);
//         res.status(400).json('Produkten kunde inte uppdateras!')
//     }
// })


module.exports = router;