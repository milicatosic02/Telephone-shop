const express = require("express");
const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("../models");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;

route.get("/", async (req, res) => {
     try{
         const boje = await Boja.findAll();
         return res.json(boje);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
  route.get("/:id", async (req, res) => {
     try{
         const boja = await Boja.findByPk(req.params.id);
         return res.json(boja);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  
  route.post("/", async (req, res) => {
     try{
         const novaBoja = await Boja.create(req.body);
         return res.json(novBrend);
             }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  route.put("/:id", async (req, res) => {
     try{
         const boja = await Boja.findByPk(req.params.id);
         boja.ime = req.body.ime;
         boja.save();
         return res.json(boja);
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
 
  route.delete("/:id", async (req, res) => {
     try{
         const boja = await Boja.findByPk(req.params.id);
         boja.destroy();
         return res.json( boja.id );
     
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 