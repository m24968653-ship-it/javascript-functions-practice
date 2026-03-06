// Function to calculate age in days
// -----------------------------
function ageInDays(age){
    return age * 365;
}

// -----------------------------
// Arrow Function to calculate final price with tax and discount
// -----------------------------
const finalPrice = (price, tax, discount = 0) => price + tax - discount;

// -----------------------------
// Arrow Function to calculate average score of 3 subjects
// -----------------------------
const averageScore = (math, english, science) => (math + english + science) / 3;

// -----------------------------
// Function to check if a person is an adult
// -----------------------------
function isAdult(age){
    return age >= 18;
}

// -----------------------------
// Example usage
// -----------------------------
console.log("Age in days for 16 years:", ageInDays(16)); // 5840
console.log("Final price for item (price=100, tax=20, discount=10):", finalPrice(100, 20, 10)); // 110
console.log("Average score of 80, 90, 70:", averageScore(80, 90, 70)); // 80
console.log("Is 16 years old an adult?", isAdult(16)); // false
console.log("Is 20 years old an adult?", isAdult(20)); // true