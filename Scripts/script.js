// Part 1:

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultText;

    if (isNaN(num1) || isNaN(num2)) {
        resultText = "Result: Please enter valid numbers";
    } else if (num1 < 0 || num2 < 0) {
        resultText = "Result: Please enter positive numbers";
    } else {
        const sum = num1 + num2;
        resultText = `Result: ${sum}`;
    }

    document.getElementById('result').textContent = resultText;
    console.log(resultText);
}

// Part 2: 

function formatListItem(index) {
    return `Item ${index + 1}: Generated at ${new Date().toLocaleTimeString()}`;
}

// Function to clear existing list
function clearList(listElement) {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }
}

// Part 3: JavaScript Loops 
function generateList() {
    const count = parseInt(document.getElementById('listCount').value);
    const listElement = document.getElementById('dynamicList');

    // Clear previous list
    clearList(listElement);

    // for loop
    if (!isNaN(count) && count > 0 && count <= 10) {
        for (let i = 0; i < count; i++) {
            const li = document.createElement('li');
            li.textContent = formatListItem(i);
            listElement.appendChild(li);
        }
    } else {
        const li = document.createElement('li');
        li.textContent = "Please enter a number between 1 and 10";
        listElement.appendChild(li);
    }

    // Using forEach to log all list items
    const items = listElement.getElementsByTagName('li');
    Array.from(items).forEach((item, index) => {
        console.log(`List item ${index + 1}: ${item.textContent}`);
    });
}

// Part 4: DOM Manipulations
// Toggle background color
function toggleColor() {
    const container = document.querySelector('.container');
    container.style.backgroundColor = 
        container.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
}

// Add new element
function addNewElement() {
    const newContent = document.getElementById('newContent');
    const newDiv = document.createElement('div');
    newDiv.textContent = `New Element Added at ${new Date().toLocaleTimeString()}`;
    newDiv.style.padding = '10px';
    newDiv.style.backgroundColor = '#e0e0e0';
    newDiv.style.margin = '5px';
    newContent.appendChild(newDiv);
}

// Update header text
function updateHeader() {
    const header = document.querySelector('h1');
    header.textContent = `Updated at ${new Date().toLocaleTimeString()}`;
}