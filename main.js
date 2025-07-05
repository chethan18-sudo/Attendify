// Create the roll numbers array
let rollNumbers = [];

// D3–D9
for (let i = 3; i <= 9; i++) {
    rollNumbers.push(`D${i}`);
}
// E0–E9
for (let i = 0; i <= 9; i++) {
    rollNumbers.push(`E${i}`);
}
// F0–F9
for (let i = 0; i <= 9; i++) {
    rollNumbers.push(`F${i}`);
}
// G0–G9
for (let i = 0; i <= 9; i++) {
    rollNumbers.push(`G${i}`);
}
// H0–H9
for (let i = 0; i <= 9; i++) {
    rollNumbers.push(`H${i}`);
}
// J0–J9
for (let i = 0; i <= 9; i++) {
    rollNumbers.push(`J${i}`);
}
// K0–K8
for (let i = 0; i <= 8; i++) {
    rollNumbers.push(`K${i}`);
}

// Index to keep track of current student
let currentIndex = 0;

// Arrays to hold present and absent roll numbers
let presentList = [];
let absentList = [];

// Get HTML elements
const rollDisplay = document.querySelector('.roll');
const presentBtn = document.querySelector('.p');
const absentBtn = document.querySelector('.a');

// Display the first roll number
function updateDisplay() {
    if (currentIndex < rollNumbers.length) {
        rollDisplay.innerText = `Current Roll No: ${rollNumbers[currentIndex]}\nPresent: ${presentList.length} | Absent: ${absentList.length}`;
    } else {
        rollDisplay.innerText = `Attendance Complete!\nPresent: ${presentList.length} | Absent: ${absentList.length}\n\nPresent List: ${presentList.join(', ')}\nAbsent List: ${absentList.join(', ')}`;
        presentBtn.disabled = true;
        absentBtn.disabled = true;
    }
}
updateDisplay();

// When Present is clicked
presentBtn.onclick = function() {
    if (currentIndex < rollNumbers.length) {
        presentList.push(rollNumbers[currentIndex]);
        currentIndex++;
        updateDisplay();
    }
};

// When Absent is clicked
absentBtn.onclick = function() {
    if (currentIndex < rollNumbers.length) {
        absentList.push(rollNumbers[currentIndex]);
        currentIndex++;
        updateDisplay();
    }
};