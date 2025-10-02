const express = require('express');
const { sequelize, Users } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();


const app = express();


var corsOptions = {
    origin: ['http://localhost:8000','http://127.0.0.1:8000'],
    optionsSuccessStatus: 200
}


app.use(express.json());
app.use(cors(corsOptions));


app.post('/register', (req, res) => {
    const obj = {
        username: req.body.username,
        email: req.body.email,
        admin: false,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    Users.create(obj).then( rows => {
        const usr = {
            userId: rows.id,
            user: rows.username
        };
        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);
        //console.log(token);
        res.json({ token: token });
    }).catch( err => res.status(500).json(err) );
});



app.post('/login', (req, res) => {
    Users.findOne({ where: { username: req.body.username } })
      .then(usr => {
        if (!usr) {
            console.log('Korisnik nije pronađen.');
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        if (bcrypt.compareSync(req.body.password, usr.password)) {
            const obj = {
                userId: usr.id,
                user: usr.username
            };
            const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
            console.log('Uspešno prijavljen korisnik:', usr.username);
            return res.json({ token: token });
        } else {
            console.log('Neispravna lozinka za korisnika:', usr.username);
            return res.status(400).json({ msg: "Invalid credentials" });
        }
      })
      .catch(err => {
          console.error('Greška prilikom prijave:', err);
          // Slanje detalja greške klijentu
          return res.status(500).json({ error: err.message });
      });
});


app.listen({ port: 9001 }, async () => {
    console.log("Povezani smo");
    await sequelize.authenticate();
});
