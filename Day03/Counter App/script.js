// Initially count value 0
let count= 0;

// To display initial or updated count value. It will show only local storage stored value after refresh of page so that value will be persist
document.getElementById('counter').textContent = localStorage.getItem('count')? localStorage.getItem('count'): 0;

// Display counter value
function updateDisplay(){

  localStorage.setItem('count',count);
  document.getElementById('counter').textContent= localStorage.getItem('count');

}

// Addition Event
const addBtn = document.getElementById('add');
addBtn.addEventListener('click',()=>{
  count++;
  updateDisplay();
 
})
  
// Subtraction Event
const subBtn = document.getElementById('sub');
subBtn.addEventListener('click',()=>{
  count--;
  updateDisplay();
  })

// Reset Event
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click',()=>{
  count=0;
  updateDisplay();
})



