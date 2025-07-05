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

/// ...existing code...

// Create and style textareas (hidden by default)
const presentContainer = document.createElement('div');
presentContainer.style.display = 'none';
presentContainer.style.margin = '20px 0';
presentContainer.style.textAlign = 'center';

const presentLabel = document.createElement('div');
presentLabel.innerText = 'Present Students';
presentLabel.style.fontWeight = 'bold';
presentLabel.style.marginBottom = '5px';
presentLabel.style.fontSize = '18px';

const presentTextarea = document.createElement('textarea');
presentTextarea.readOnly = true;
presentTextarea.style.width = '320px';
presentTextarea.style.height = '60px';
presentTextarea.style.fontSize = '16px';
presentTextarea.style.resize = 'none';
presentTextarea.style.borderRadius = '8px';
presentTextarea.style.border = '1px solid #4CAF50';
presentTextarea.style.background = '#f6fff6';
presentTextarea.style.padding = '8px';

presentContainer.appendChild(presentLabel);
presentContainer.appendChild(presentTextarea);

const absentContainer = document.createElement('div');
absentContainer.style.display = 'none';
absentContainer.style.margin = '20px 0';
absentContainer.style.textAlign = 'center';

const absentLabel = document.createElement('div');
absentLabel.innerText = 'Absent Students';
absentLabel.style.fontWeight = 'bold';
absentLabel.style.marginBottom = '5px';
absentLabel.style.fontSize = '18px';

const absentTextarea = document.createElement('textarea');
absentTextarea.readOnly = true;
absentTextarea.style.width = '320px';
absentTextarea.style.height = '60px';
absentTextarea.style.fontSize = '16px';
absentTextarea.style.resize = 'none';
absentTextarea.style.borderRadius = '8px';
absentTextarea.style.border = '1px solid #f44336';
absentTextarea.style.background = '#fff6f6';
absentTextarea.style.padding = '8px';

absentContainer.appendChild(absentLabel);
absentContainer.appendChild(absentTextarea);

// Insert after the rollDisplay element
rollDisplay.parentNode.insertBefore(presentContainer, rollDisplay.nextSibling);
rollDisplay.parentNode.insertBefore(absentContainer, presentContainer.nextSibling);

// ...existing code...

function updateDisplay() {
    if (currentIndex < rollNumbers.length) {
        rollDisplay.innerText = `Current : ${rollNumbers[currentIndex]}\nPresent: ${presentList.length}\nAbsent: ${absentList.length}`;
        presentBtn.style.opacity = '1';
        absentBtn.style.opacity = '1';
        presentBtn.disabled = false;
        absentBtn.disabled = false;
        presentContainer.style.display = 'none';
        absentContainer.style.display = 'none';
    } else {
        rollDisplay.innerText = `Attendance Complete!\nPresent: ${presentList.length} | Absent: ${absentList.length}`;
        // Fade out buttons
        presentBtn.style.transition = 'opacity 0.5s';
        absentBtn.style.transition = 'opacity 0.5s';
        presentBtn.style.opacity = '0';
        absentBtn.style.opacity = '0';
        presentBtn.disabled = true;
        absentBtn.disabled = true;

        // Sort and show textareas
        const sortedPresent = [...presentList].sort();
        const sortedAbsent = [...absentList].sort();
        presentTextarea.value = sortedPresent.join(',');
        absentTextarea.value = sortedAbsent.join(',');

        presentContainer.style.display = 'block';
        absentContainer.style.display = 'block';
    }
}
updateDisplay();

// ...existing