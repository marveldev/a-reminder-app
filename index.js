const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const inputThree = document.querySelector('.input-three');
const entriesContainer = document.querySelector('.entries-container');
const button = document.querySelector('.button');
const currentTime = document.querySelector('.time-content')
currentTime.innerHTML = new Date().toLocaleTimeString();

button.addEventListener('click',  () => {
  event.preventDefault();
  const inputOneValue = inputOne.value;
  const inputTwoValue = inputTwo.value;
  const inputThreeValue = inputThree.value;

  if (inputOneValue.length < 2) {
    alert('please enter a valid input.')
  } else if (inputTwoValue.length < 2) {
    alert('please enter a valid input.')
  } else if (inputThreeValue.length < 2) {
    alert('please enter a valid input.')
  } else {
    const output = `
      <section class="box2">
        <span class="span-output">WAKE UP TIME: ${inputOneValue} GMT</span>
        <span class="span-output">LUNCH TIME: ${inputTwoValue} GMT</span>
        <span class="span-output">NAP TIME: ${inputThreeValue} GMT</span>
      </section>
    `
    entriesContainer.style.display = 'block';
    entriesContainer.innerHTML += output;
  };
});
