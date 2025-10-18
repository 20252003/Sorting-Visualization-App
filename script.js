let arr = [];
let arraySize = 25;

function updateArraySize(size) {
  arraySize = size;
  document.getElementById('sizeValue').textContent = size;
  randomizeArray();
 }

function randomizeArray() {
  arr = [];
  for (let i = 0; i < arraySize; i++) arr.push(Math.floor(Math.random() * 500) + 50);
  displayArray();
}

function displayArray() {
  const container = document.getElementById('array');
  container.innerHTML = '';
  arr.forEach(val => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = val + 'px';
    bar.style.width = '20px';
    bar.textContent = val;
    container.appendChild(bar);
  });
}

document.getElementById('randomize').addEventListener('click', randomizeArray);
document.getElementById('sort').addEventListener('click', sortArray);

async function sortArray() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        displayArray();
        await new Promise(r => setTimeout(r, document.getElementById('speed').value));
      }
    }
  }
}

randomizeArray();
