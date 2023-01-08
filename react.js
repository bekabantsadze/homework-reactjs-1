// დავალაევა 1

// const array = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52 ],
//     positive = array.filter(function (a) { return a >= 0; }),
//     sum = positive.reduce(function (a, b) { return a + b; });

// console.log(sum);

// დავალება 2

// const arr = ["nissan",  "masserati","mercedes", "mercedes",  "toyota",  "mercedes", "masserati",];
// const count = {};

// arr.forEach(element => {
//   count[element] = (count[element] || 0) + 1;
// });

// console.log(count);

// test

// let sayMyName = new Promise(function (resolve, reject) {

// 	setTimeout(function () {
// 		resolve('Hi, Beka!');
// 	}, 3000);

// });
// sayMyName.then(function (msg) {
// 	console.log(msg);
// });



// დავალება 3
// class car {
//     constructor (name,year)
//     {
//         this.name = name;
//         this.year = year;
//         this.speed = 0;
//         this.movement = "car is stopped";
//     }
//     check_motion(){
//         this.movement = this.speed > 0 ? "car is moving" : "car is stopped";
//     }
//     accelerate(speed) {
//         this.speed += speed;
//         this.check_motion();
//     }
//     brake(speed) {
//         if(speed > this.speed) {
//             this.speed=0;
//         } else {
//             this.speed-= speed;
//         }
//         this.check_motion();
//     }
//     emergencyBrake(){
//         this.speed = 0;
//         this.check_motion();
//     }
//     status(){
//       console.log('I am ${this.name} I am moving ${this.speed} amd status is ${this.movement}');
//     }
// }


// const c1 = new car ( "tesla", 2015);
// console.log(c1);
// c1.status();
// c1.accelerate(50);
// c1.status();
// c1.brake(20);
// c1.status();
// c1.emergencyBrake();
// c1.status();

// დავალება 4
// const addAsync = (num1,num2) => {
//     return new Promise ((resolve,reject)=>{
//         if (num1 && num2) {
//             resolve (num1 + num2);
//         } else {
//             reject("please input correct values");
//     }
//     });
// };

// addAsync (1)
// .then((val) => console.log("value,val"))
// .catch ((err) => console.log(err));