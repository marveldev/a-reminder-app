const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const inputThree = document.querySelector('.input-three');
const entriesContainer = document.querySelector('.entries-container');
const button = document.querySelector('.button');

const time = setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  document.querySelector('.time-content').innerHTML = currentTime; 
})

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
        <button class="delete-button">X</button>
        <span class="span-output">WAKE UP TIME: ${inputOneValue} GMT</span>
        <span class="span-output">LUNCH TIME: ${inputTwoValue} GMT</span>
        <span class="span-output">NAP TIME: ${inputThreeValue} GMT</span>
      </section>
      <section class="delete-container">
        <div class="modal-container">
          <p class="modal-content">ARE YOU SURE?</p>
          <button type="button" class="confirm-button">YES</button>
          <button type="button" class="cancel-button">NO</button>
        </div>
      </section>
    `
    entriesContainer.style.display = 'block';
    entriesContainer.innerHTML += output;

    const deleteIcons = document.querySelectorAll('.delete-button');
    for (let index = 0; index < deleteIcons.length; index++) {
      const element = deleteIcons[index];
      element.addEventListener('click', () => {
        element.parentElement.nextElementSibling.style.display = 'block';
      })
    }

    const confirmButtons = document.querySelectorAll('.confirm-button');
    for (let index = 0; index < confirmButtons.length; index++) {
      const confirmButton = confirmButtons[index];
      confirmButton.addEventListener('click', () => {
        const item = confirmButton.parentElement.parentElement.previousElementSibling;
        const modal = confirmButton.parentElement.parentElement;
        entriesContainer.removeChild(item);
        modal.style.display = 'none';
      })
    }
    
    const cancelButtons = document.querySelectorAll('.cancel-button');
    for (let index = 0; index < cancelButtons.length; index++) {
      const cancelButton = cancelButtons[index];
      cancelButton.addEventListener('click', () => {
        const modal = cancelButton.parentElement.parentElement;
        modal.style.display = 'none';
      })
    }
  };
});
