const express = require ('express');
const dotenv = require ('dotenv');
dotenv.config({ path : 'config.env' });

const app = express();

app.get('/' , (req,res)=>{
    res.send('Our Api V3');
});

const PORT = process.env.PORT || 8000 ;
app.listen(PORT, () =>{
    console.log(`App running running on PORT ♥ ${PORT}`);
});