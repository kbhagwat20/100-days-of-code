const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', e=>{
  console.log('grandparent');
})


grandparent.addEventListener('click', e=>{
  console.log('grandparent');
},{capture: true})

parent.addEventListener('click', e=>{
  console.log('parent');
})

parent.addEventListener('click', e=>{
  console.log('parent');
},{capture: true})

child.addEventListener('click', e=>{
  console.log('child');
})

child.addEventListener('click', e=>{
  console.log('child');
},{capture: true})

document.addEventListener('click', e=>{
  console.log('document');
})

document.addEventListener('click', e=>{
  console.log('document');
},{capture: true})