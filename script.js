let name = "Ashley Cane";
let age = 26;
let birthday = "October 1";
let detroitGC = true;
let lifeEvents = [
    "I was born in Washington, D.C.", 
    "I went to Emory University for undegrad and majored in Neuroscience & Behavioral Biology.", 
    "I moved to Michigan June 2019 to start my new position as a Management Fellow.",
    "I recently graduated from George Washington University with my Masters of Health Administration degree."
];

if (detroitGC == true ) {
    console.log (`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
I am currently ${age} years old and my birthday is on ${birthday}.`);
}

else {
    console.log (`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
    Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for (i = 0; i < lifeEvents.length; i++) {
    console.log (lifeEvents[i]);
}

let counter = 0

while (true) {

let randomNumber = Math.floor(Math.random() * 10) + 1;

counter ++

if (randomNumber === 5) {
    console.log (`${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`)
    break
}
 
else  {
    console.log (`${randomNumber} !=== 5`)
}
}
