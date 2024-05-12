const car = { 
    name:'tesla',
    model:33,
    weight:"500kg",
    color:"white",

    start: function(){
        console.log("car has started");
    },

    drive: function(){
        console.log("car can drive");
    },


};

console.log(car.weight);

console.log(car['model'])

car.start();