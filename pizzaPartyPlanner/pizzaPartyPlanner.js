/* 

Your task: Make a Node.js pizza party planner that calculates how many slices of pizza each guest gets, and how many slices are left over!

Follow the instructions in the README.md file in this folder.

*/

let hostName = process.argv[2];
let pizzasOrdered = Number(process.argv[3]);
let slicesPerPizza = Number(process.argv[4]);
let numberOfGuests = Number(process.argv[5]);

let totalSlices = slicesPerPizza * pizzasOrdered;

let slicesPerGuest = Math.floor(totalSlices / numberOfGuests);
let leftOverSlices = totalSlices % numberOfGuests;

console.log(`Hey ${hostName}! 🍕 You ordered ${pizzasOrdered} pizzas with ${slicesPerPizza} each - that's ${totalSlices} slices total!
    Each of your ${numberOfGuests} guests gets ${slicesPerGuest} slices, and you'll have ${leftOverSlices} left over.
    Save those for breakfast! 😋`);