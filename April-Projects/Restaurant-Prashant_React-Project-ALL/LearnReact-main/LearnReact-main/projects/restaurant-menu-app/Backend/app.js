const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb://localhost:27017/myapp');

const connection = mongoose.connection;

const foodSchema = mongoose.Schema({

    dishType:{
        type: String,
        required: true
    },
    dishName:{
        type: String,
        required: true
    },
    dishPrice:{
        type: String,
        required: true
    }
});

const drinksSchema = mongoose.Schema({

    dType:{
        type: String,
        required: true
    },
    dName:{
        type: String,
        required: true
    },
    dPrice:{
        type: String,
        required: true
    }
});

const foodModel = connection.model('food',foodSchema);
const drinksModel = connection.model('drinks',drinksSchema);

//   const data = [
//     {
//       dishType: 'Veg',
//       dishName: 'Panner Tikka',
//       dishPrice: 'INR 200'
//     },
//     {
//       dishType: 'Veg',
//       dishName: 'Panner Tikka Masala',
//       dishPrice: 'INR 220'
//     },
//     {
//       dishType: 'Non-veg',
//       dishName: 'Chicken Curry',
//       dishPrice: 'INR 300'
//     },
//     {
//       dishType:'Veg',
//       dishName: 'Panner Bhurji',
//       dishPrice: 'INR 180'
//     }

//   ]

//   const drinkData = [
//     {
//       dType:'Mocktail',
//       dName: 'Virgin Mojito',
//       dPrice: 'INR 100'
//     },
//     {
//       dType:'Mocktail',
//       dName: 'Lemonade',
//       dPrice: 'INR 80'
//     },
//     {
//       dType:'Cocktail',
//       dName: 'LIIT',
//       dPrice: 'INR 150'
//     }
//   ]

//   foodModel.create(data,function(err,msg){
//       if(err)
//         console.log(err)
//   });


//   drinksModel.create(drinkData,function(err,msg){
//     if(err)
//       console.log(err)
// });



  app.get('/data',function(req,res){
      let data = [];
        console.log(req);
      foodModel.find({},function(err,foodData){
            console.log(foodData);
            data.push(foodData);
            drinksModel.find({},function(err,drinksData){
                console.log(drinksData);
                data.push(drinksData);
                // console.log(data);
                res.json(data);
            });
      });   
  });
  
  app.listen(3000,function(){console.log('server started at 3000');});