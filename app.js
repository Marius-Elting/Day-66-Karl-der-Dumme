import express from "express";


const PORT = 9898;

const app = express();

// Mega nettes Feature
// wir wollen statische datein ausliefern , gant easy
// index wird automatisch auf / ausgeführt 
// es funktioniert wir middleware
// erst wenn er im statci ordern ix findet geht der request an die anderen routen
app.use(express.static("./assets"));

app.listen(PORT, () => console.log(`Dieser Server lauscht auf port ${PORT}`));