const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");





const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");




if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}



if (!raining) {
  console.log("Leave your umbrella at home!");
}



const whichSchool = function(age)
for (i = 13; i < 18; i++) {
  expect(whichSchool(i)).to.be.equal("Secondary School");
}
for (i = 19; i < 100; i++) {
  expect(whichSchool(i)).to.be.equal("Lighthouse Labs");
}
for (i < 13) {
  expect(whichSchool(i)).to.be.equal("Elementary School");
}