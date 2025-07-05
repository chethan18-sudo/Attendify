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

// Create and style textareas and copy buttons (hidden by default)
const presentContainer = document.createElement('div');
presentContainer.style.display = 'none';
presentContainer.style.position = 'relative';
presentContainer.style.margin = '20px 0';

const presentTextarea = document.createElement('textarea');
presentTextarea.readOnly = true;
presentTextarea.style.width = '300px';
presentTextarea.style.height = '60px';
presentTextarea.style.fontSize = '16px';
presentTextarea.style.resize = 'none';

const presentCopyBtn = document.createElement('button');
presentCopyBtn.innerText = 'Copy';
presentCopyBtn.style.position = 'absolute';
presentCopyBtn.style.top = '5px';
presentCopyBtn.style.right = '5px';

presentContainer.appendChild(presentTextarea);
presentContainer.appendChild(presentCopyBtn);

const absentContainer = document.createElement('div');
absentContainer.style.display = 'none';
absentContainer.style.position = 'relative';
absentContainer.style.margin = '20px 0';

const absentTextarea = document.createElement('textarea');
absentTextarea.readOnly = true;
absentTextarea.style.width = '300px';
absentTextarea.style.height = '60px';
absentTextarea.style.fontSize = '16px';
absentTextarea.style.resize = 'none';

const absentCopyBtn = document.createElement('button');
absentCopyBtn.innerText = 'Copy';
absentCopyBtn.style.position = 'absolute';
absentCopyBtn.style.top = '5px';
absentCopyBtn.style.right = '5px';

absentContainer.appendChild(absentTextarea);
absentContainer.appendChild(absentCopyBtn);

// Insert after the rollDisplay element
rollDisplay.parentNode.insertBefore(presentContainer, rollDisplay.nextSibling);
rollDisplay.parentNode.insertBefore(absentContainer, presentContainer.nextSibling);

// Copy button logic
presentCopyBtn.onclick = function() {
    presentTextarea.select();
    document.execCommand('copy');
};
absentCopyBtn.onclick = function() {
    absentTextarea.select();
    document.execCommand('copy');
};

// Display the first roll number
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