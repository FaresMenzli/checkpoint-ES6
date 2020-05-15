let pets = [
  { name: `Max`, type: `dog`, bornOn: 2018 },
  { name: `Angel`, type: `cat`, bornOn: 2015 },
  { name: `Jasper`, type: `dog`, bornOn: 2016 }
];
console.log(pets)


//1//
/*function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;
}*/

let getAge =pet  =>new Date().getFullYear() - pet.bornOn 
//1//



//2//
/*
let petsWithAge = [];
for (let i = 0; i < pets.length; i++) {
  var pet = pets[i];
  pet.age = getAge(pet);

  petsWithAge.push(pet);
}*/
let petsWithAge = pets.map(pet=>pet)
petsWithAge.forEach (pet => pet.age = getAge(pet))
 
console.log(petsWithAge);
//2//






//3//
/*let dogs = [];
for (var i = 0; i < pets.length; i++) {
  var pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}*/

console.log(pets.filter(pet=>pet.type==`dog`));

//3//





//4//
 /* if (pet.name === "Jasper") {
    jasper = pet;
  } */


let jasper;
pets.forEach(pet =>pet.name ==`Jasper`? jasper=pet : jasper=`` )
console.log(`Jasper is ${jasper.age} years old`);
//4//
