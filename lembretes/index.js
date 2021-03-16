const express = require('express');
const app = express();


//http://localhost:porta/lembretes
app.get('/lembretes',(req, res) => {

})

app.put('/lembretes', (req,res) => {

})

app.listen(4000, () => console.log("lembretes:4000"));