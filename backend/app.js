var express = require('express');
const fetch = require('node-fetch');
var cors = require('cors');
var zipcodes = require('zipcodes');
var bodyParser = require('body-parser');
// const mongoose = require('mongoose'); 
// mongoose.connect('mongodb://localhost/weather_app', {useNewUrlParser: true});
var app=express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine','ejs');

getWeatherfromzipcode=async(pin)=>{
    var {city}=zipcodes.lookup(pin)
    const result=await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    const data=await result.json();
    const weather=await fetch(`https://www.metaweather.com/api/location/${data[0].woeid}`)
    const data2=await weather.json();
    return(data2)
}

app.get('/',(req,res)=>{
    res.send('homepage')
});

app.get('/weather/:pin',async(req,res)=>{
    console.log(req.params.pin.split(","))
    const arr=req.params.pin.split(",")
    const data2= arr.map(x=> (getWeatherfromzipcode(x)))
    const results = await Promise.all(data2)
    console.log(results)
    res.json(results)
});

app.get('/location/:city',async(req,res)=>{
    console.log(req.params.city);
const result=await fetch(`https://www.metaweather.com/api/location/search/?query=${req.params.city}`)
const data=await result.json();
const weather=await fetch(`https://www.metaweather.com/api/location/${data[0].woeid}`)
const data2=await weather.json();
res.json(data2)
}
);

// app.post('/api',async(req,res)=>{
//     console.log("I got a request");
//     console.log(req.body);
//     const data =req.body;
//     database.push(data);
//     console.log(database);
//     res.json({
//         status:'success',
//     })

// })

app.listen(5000,()=>console.log('server started'))