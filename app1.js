const mongoose=require('mongoose');


//connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true, useUnifiedTopology: true });

const fruitSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema)
const fruit=new Fruit({
    name:"APPLE",
    rating:8,
    review:"pretty solid as a fruit"
})

const kiwi=new Fruit({
    name:"KIWI",
    rating:10,
    review:"the best fruit"
});
const banana=new Fruit({
    name:"Banana",
    rating:7,
    review:"the long fruit"
});
const orange=new Fruit({
    name:"Orange",
    rating:9,
    review:"the Sour fruit"
});

// Fruit.insertMany([kiwi,banana,orange,fruit],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully run without error");
//     }
// })

// fruit.save();

Fruit.find((err,fruits)=>{
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
        console.log(fruit.name);
        })
    }
})








const personSchema=new mongoose.Schema({
    name:String,
    age:Number
})

const Person=mongoose.model("Person",personSchema)

const person=new Person({
    name:"Jhon",
    age:34
})
person.save()

