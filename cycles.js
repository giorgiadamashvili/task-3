
const movies = ['The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Forrest Gump', 'Fight Club'];
movies.forEach(name => console.log(name))



const cars = ["BMW", "Mercedes", "Lambo", "Ferrari", "Jaguar"];
const cars1 = cars.join();
const cars2 = cars1.split(',')

console.log(cars1, cars2);



const friends = ["nika", "luka", "beka", "giorgi"];
console.log(friends.map(name => `Hello, ${name}`))

const arr = new Array(2);

for (let i = 0; i < arr.length; i++) {
    arr[0] = false;
    arr[i] = true;
}

console.log(arr);




const number = [1, 6, 7, 8, 3, 4, 5, 6]


const sorted = number.sort(function (a, b) {
    return b - a
});
console.log(sorted)




const numbers = [1, 6, 7, 8, 3, 4, 5, 6]


const filter = numbers.filter((numbers) => numbers > 3);

console.log(filter)




function getIndexOfNumber(arr, num) {
    return arr.indexOf(num);
}




for (let i = 0; i < 10; i++) {
    console.log("a")
}


for (let i = 1; i < 100; i += 2) {
    console.log(i);
} 