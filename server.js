const express = require("express")
const app = express()

app.post("/", async function(req, res){
    console.log(req.body.getColor)
})
app.listen(3000)