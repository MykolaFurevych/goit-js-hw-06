
const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener('input', inputText)
// function inputText(event) {

//     if (event.currentTarget.value === '') {
//         spanEl.textContent = 'Anonymous';
//     }
//     else 
//        spanEl.textContent = event.currentTarget.value;
//     }

function inputText() {
   
  
    if (this.value === '') {
        spanEl.textContent = 'Anonymous';
    }
    else 
       spanEl.textContent = this.value;
    

}


