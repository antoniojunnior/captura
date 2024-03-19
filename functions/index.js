/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const cors = require('cors')({origin: true});
const path = require("path");
const bodyParser = require("body-parser");

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const admin = initializeApp();

const db = getFirestore();

const app = express();

app.use(cors);
app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/*
app.get('/', (req, res) => {
    logger.info("Testando o log!");
    res.status(200).sendFile('index.html', {root : __dirname + '/views'});
});
*/
app.post('/reservar', async (req, res) => {

    const date = new Date().toLocaleDateString('pt-BR', {
        month: '2-digit',day: '2-digit',year: 'numeric'});

    const add = await db.collection('reservas').add({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        data: date,
        to: req.body.email,
        template: {
            name: "reservar-vaga",
            data: {
                nome: req.body.nome
            },
        },
    });

    logger.info("Adicionando no Firestore Doc ID: ", add.id);

    res.redirect('/');

});

exports.app = onRequest(app);
