const express = require('express');
const path = require('path');
const BP = require('body-parser');
const Joi = require('joi');
const fs=require('fs');
const jwt = require('jsonwebtoken');


const app = express();

function getCookies(req) {
    if (req.headers.cookie == null) return {};


    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};


    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });


    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
    if (token == null) {
        return res.redirect(301, '/administrator/login');
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.redirect(301, '/administrator/login');
        req.user = user;
        next();
    });
}


app.use( express.static( path.join(__dirname, 'static') ) );
app.use('/nov-telefon', BP.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'user_app', 'index.html'));
});

app.post("/nov-telefon", (req, res) => {
    const shema = Joi.object().keys({
        brend: Joi.string().trim().required(),
        naziv: Joi.string().trim().min(2).required(),
        opis: Joi.string().allow(' ').optional(),
        memorija: Joi.string().trim().required(),
        cena: Joi.number().greater(0).required(),
        kolicina: Joi.number().greater(0).required()
    });

    const {error, succ} = shema.validate(req.body);

    if(error){
        res.send("Greska: " + error.details[0].message);
	  return;
    } 

    //res.send("Poruka je poslata, očekujte odgovor");

    req.body.opis.replace(/\r?\n|\r/g, '<br>');

    const novTelefon='\n' + JSON.stringify(req.body);
    fs.appendFile("telefoni.txt", 
                 novTelefon,
                 function(err, succ){
                     res.send("Poruka je poslana, očekujte odgovor uskoro");
                 }
            );


})

   app.get("/telefoni", (req, res) => {
        const telefoni = [];

        fs.readFile('telefoni.txt', 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading file:', err);
              res.status(500).send({ error: "Greška" });
              return;
            }
            //else…
            const redovi = data.split('\n');
            
            for(let i=0; i<redovi.length; i++){
                let obj = JSON.parse( redovi[i] );
                telefoni.push(obj);
            }
            
            res.json(telefoni);
          });
          
    })
    
    app.get("/administrator/login", (req, res) => {
        res.sendFile(path.join(__dirname,'static','admin_app','administrator','login.html')); // Prilagodite putanju do vaše login.html datoteke
    })

    app.get("/administrator/register", (req, res) => {
        res.sendFile(path.join(__dirname,'static','admin_app','administrator','register.html')); // Prilagodite putanju do vaše login.html datoteke
    })

    app.get('/administrator', authToken, (req, res) => {
        res.sendFile(path.join(__dirname,'static','admin_app','index.html'));
    });
    
    app.use('/user', express.static(path.join(__dirname, 'static', 'user_app')));
    app.get('/user/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'user_app', 'index.html'));
    });


app.listen(8000);
