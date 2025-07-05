# 📘 Attendify

**Attendify** is a simple web application for taking student attendance. It presents a list of roll numbers and provides options to mark each student as **Present** or **Absent**. Once all roll numbers are processed, it displays the lists of present and absent students in separate, easy-to-copy text areas.

---

## ✨ Features

* Displays a list of student roll numbers
* Mark each student as Present or Absent with a single click
* Stores Present and Absent roll numbers in separate arrays
* Displays final attendance in two copy-friendly text areas

---

## 📁 Project Structure

```
Attendify/
├── index.html          # Main HTML file containing logic and UI
├── style.css           # (Optional) CSS styling file
├── script.js           # (Optional) JavaScript for functionality
└── README.md           # Project overview (this file)
```

---

## 🚀 How It Works

1. The app loops through a predefined array of roll numbers.
2. For each roll number, the user selects **Present** or **Absent**.
3. Based on selection, the roll number is pushed to the respective array.
4. Once all students are marked, two text areas display:

   * One for **Present** roll numbers
   * One for **Absent** roll numbers
5. Both text areas are easy to copy and paste into other tools or files.

---

## 🎓 Roll Number Format

The roll numbers are generated using the following rules:

* Prefixes include: `D`, `E`, `F`, `G`, `H`, `J`, `K`
* Each prefix ranges from `1` to `8` (e.g., `D1`, `D2`, ..., `D9`)
* `D10` is skipped
* The `I` series (e.g., `I1` to `I8`) is entirely excluded

**Example JavaScript Logic:**

```js
const prefixes = ['D', 'E', 'F', 'G', 'H', 'J', 'K'];
const rollNumbers = [];

prefixes.forEach(prefix => {
  for (let i = 1; i <= 8; i++) {
    const roll = `${prefix}${i}`;
    if (roll === 'D10') continue;
    rollNumbers.push(roll);
  }
});
```

---

## 🧪 Demo (Example UI Workflow)

* Student Roll `D3` is displayed → user clicks **Present**
* Student Roll `D4` is displayed → user clicks **Absent**
* ...
* Final screen:

  * **Present**: D3, E1, F2, ...
  * **Absent**: D4, D5, G7, ...

---

## 🔧 Setup Instructions

No installation required. Simply:

1. Clone the repo:

   ```bash
   git clone https://github.com/chethan18-sudo/Attendify.git
   cd Attendify
   ```
2. Open `index.html` in any web browser.

---

## 📜 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Created by **[chethan18-sudo](https://github.com/chethan18-sudo)**.

Feel free to contribute or suggest improvements!
