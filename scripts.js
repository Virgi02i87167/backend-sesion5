// const shuffle = require('lodash/shuffle')

// const array = [9,3,5,3,4]

// const arrayacomodado = shuffle(array)

// console.log(arrayacomodado)

const express = require('express')
const app = express()

const PORT = 3000

app.get('/', (req,res) =>{
    res.send('Este es un servidor basico usando express')
})
app.listen(PORT, () =>{
    console.log(`Server iniciado http://localhost:${PORT}`)
})