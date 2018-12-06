function yearOfBirth(age) {
  return 2018 - age;
}

function createGreeting(name,age){
  const yearOfBirth = yearOfBirth(age);
  if (age < 0){
    throw new Error("Age cannot be negative");
  }
  if (age === undefined || name === undefined){
    throw new Error ("Undefined values")
  }
  if (age !== Number){
    throw new Error ("Age has to be a number")
  }
  return(`Hi my name is ${name}  and I'm ${age} years old and I was born in ${yearOfBirth}`);
  
}
try {
  const greeting1 = createGreeting('Meghana', 18);
  console.log(greeting1);
} catch (e){
  console.log(e);
}
 
