const wakeUpTime = document.querySelector('.wake-time');
const lunchTime = document.querySelector('.lunch-time');
const napTime = document.querySelector('.nap-time');
const entriesContainer = document.querySelector('.entries-container');
const confirmTimeButton = document.querySelector('.confirm-time');

const time = setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  document.querySelector('.time-content').innerHTML = currentTime; 
})

confirmTimeButton.addEventListener('click',  () => {
  event.preventDefault();
  const wakeUpTimeValue = wakeUpTime.value;
  const lunchTimeValue = lunchTime.value;
  const napTimeValue = napTime.value;

  if (wakeUpTimeValue.length > 2 && lunchTimeValue.length > 2 && napTimeValue.length > 2) {
    const output = `
      <section class="entries-content">
        <button class="delete-button">X</button>
        <span>WAKE UP TIME: ${wakeUpTimeValue} GMT</span><br>
        <span>LUNCH TIME: ${lunchTimeValue} GMT</span><br>
        <span>NAP TIME: ${napTimeValue} GMT</span>
      </section>
      <section class="modal-container">
        <div class="modal-content">
          <p>ARE YOU SURE?</p>
          <button type="button" class="modal-button">YES</button>
          <button type="button" class="cancel-button">NO</button>
        </div>
      </section>
    `
    entriesContainer.style.display = 'block';
    entriesContainer.innerHTML += output;

    const deleteButtons = document.querySelectorAll('.delete-button');
    for (let index = 0; index < deleteButtons.length; index++) {
      const deleteButton = deleteButtons[index];
      deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.nextElementSibling.style.display = 'block';
      })
    }

    const modalButtons = document.querySelectorAll('.modal-button');
    for (let index = 0; index < modalButtons.length; index++) {
      const modalButton= modalButtons[index];
      modalButton.addEventListener('click', () => {
        const item = modalButton.parentElement.parentElement.previousElementSibling;
        const modal = modalButton.parentElement.parentElement;
        entriesContainer.removeChild(item);
        modal.style.display = 'none';
      })
    }
    
    const closeModalButtons = document.querySelectorAll('.cancel-button');
    for (let index = 0; index < closeModalButtons.length; index++) {
      const closeModalButton = closeModalButtons[index];
      closeModalButton.addEventListener('click', () => {
        const modal = closeModalButton.parentElement.parentElement;
        modal.style.display = 'none';
      })
    }
  } else {
    alert('please enter a valid input.')
  }
});
