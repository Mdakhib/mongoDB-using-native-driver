const mongoose=require('mongoose');


//connection URL
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true, useUnifiedTopology: true });

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[1,"pls enter ur name"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema)
const fruit=new Fruit({
    name:"APPLE",
    rating:10,
    review:"pretty solid as a fruit"
})

// fruit.save();
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
kiwi.save();


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

// Fruit.updateOne({_id:"5f673ed3bd15410cec00f19c"},{name:"Mango"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfulyy update");
//     }
// })

// Fruit.deleteOne({name:["KIWI","Banana","Orange"]},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully deleted");
//     }
// })






const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favoriteFruit: fruitSchema
})

const Person=mongoose.model("Person",personSchema)

const pineapple=new Fruit({
    name:"Pineapple",
    rating:8,
    review:"I hate this one"
});
pineapple.save();

const person=new Person({
    name:"Jhon",
    age:34,
    favoriteFruit:kiwi

})
// person.save()

// Person.deleteMany({name:"Jhon"},function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successfully deleted");
//     }
// })