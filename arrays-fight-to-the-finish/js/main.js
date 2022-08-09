//Create an array of movie titles. Loop through the array and add each element to the h2.
let movies = ['Back to the Future', 'Jumanji', 'Waterworld', 'Ready Player One', 'Fight Club']

for (let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [12, 68, 45]

numbers.forEach((item, idx) => {
    numbers[i] = item + 3
})
//Find the average of all the numbers from question three
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}

console.log(sum / numbers.length)