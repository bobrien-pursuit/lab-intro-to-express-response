// Dependencies

const express = require('express');

// Configuration
const app = express();
const PORT = 3003;

// Routes
app.get('/', (req, res) => {
    res.status(418).send('Hello, world!')
})

app.get('/terminator', (req, res) => {
    res.send(`I'll be back!`)
  //  res.send(`Hasta la vista, baby`)
})

app.get('/Emeril', (req, res) => {
    res.send(`Bam!`)
})

app.get('/Homer-Simpson', (req, res) => {
    res.send(`D'Oh!`)
})

app.get('/magic8', (req, res) => {
    
    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      
      ];

      res.send(`<h1>${magic8Answer}</h1>`);
})

// Listen
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// Export
module.exports = app;