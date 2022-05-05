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


//   foodData.create(food,function(err,msg){
//       if(err)
//         console.log(err)
//   });

//   drinksData.create(drinks,function(err,msg){
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