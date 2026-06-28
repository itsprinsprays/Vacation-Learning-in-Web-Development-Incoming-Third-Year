let person = {
    "firstName": "Prince",
    "lastName": "Benitez",
    "age": 21,
    "hobbies": ["reading", "traveling", "coding"],
    laptop: {
       0: { 
        brand: "HP" 
       },
       1: { 
        brand: "Lenovo"
       }
    }
    
};
console.log(`${person.firstName} ${person.lastName}`);
console.log(person.hobbies[1]); 
console.log(person.laptop[1].brand);