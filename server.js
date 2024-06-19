// Dependencies
const app = require('./app.js')

// Configuration
const PORT = 3004;

// Listen
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
