// let yaş = 20;
// let mesaj = (yaş >= 18) ? "Böyüksən" : "Uşaqsan";
// console.log(mesaj); 

// let name1= null;
// let userName =name1 ?? " anonim"
// console.log(userName);


// name1="ali";
// userName=name1?? "anonim";
// console.log(userName);

// let product =null;
// let result=product?? "x mehsul"
// console.log(result);


 


// let name1=null;
// let result=name1 ?? "anonim"
// console.log(result);


// name1="ali";
// result=name1??  "anonim"
// console.log(result);


// let saygac=0;

// while(saygac < 10){
//     console.log("saygacin cari deyeri:"+ saygac);
//     saygac++
    
// }
// console.log("dongu bitdi:"+ saygac);

// let number3=0;
// do{
//     console.log(number3);
//     number3++ ;
    
// }while(number3 < 5);




// let obj = [
//     { name: "Ali", surname: "Aliyev", age: 10, driving: true },
//     { name: "Veli", surname: "Aliyev", age: 17, driving: false },
//     { name: "Mehman", surname: "Aliyev", age: 25, driving: true },
//     { name: "Nicat", surname: "Aliyev", age: 26, driving: false },
//     { name: "Ayxan", surname: "Aliyev", age: 15, driving: true }
//   ];
  

//   let drivingAndAdult = obj.filter(person => person.driving === true && person.age >= 18);
//   console.log(drivingAndAdult);
  
 
//   let surnameAliyevAndUnderage = obj.filter(person => person.surname === "Aliyev" && person.age < 18);
//   console.log(surnameAliyevAndUnderage);
  



  


// const obj = {
//     ad: "Ali",
//     adiFunksiya: function() {
//       console.log(this); // `this` obj-ı işarə edir
//     },
//     arrowFunksiya: () => {
//       console.log(this); // `this` global konteksti işarə edir
//     }
//   };
  
//   obj.adiFunksiya(); // `this` obj-ı işarə edir
//   obj.arrowFunksiya(); // `this` global konteksti işarə edir (browserdə `window`)
  




//TAPSIRIQ 4

let obj = [
    { name: "Ali", surname: "Aliyev", age: 10, driving: true },
    { name: "Veli", surname: "Aliyev", age: 17, driving: false },
    { name: "Mehman", surname: "Aliyev", age: 25, driving: true },
    { name: "Nicat", surname: "Aliyev", age: 26, driving: false },
    { name: "Ayxan", surname: "Aliyev", age: 15, driving: true }
  ];
  

  let drivingAndAdult = obj.filter(person => person.driving && person.age >= 18);
  console.log(drivingAndAdult);
  

  let surnameAliyevAndUnderage = obj.filter(person => person.surname === "Aliyev" && person.age < 18);
  console.log(surnameAliyevAndUnderage);
  
