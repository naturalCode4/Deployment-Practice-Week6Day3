const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005
//does the alternative port (e.g. 4005) need to be anything in particular? 
//is it set up so elsewhere?

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})