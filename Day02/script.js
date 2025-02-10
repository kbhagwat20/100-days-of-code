// document.getElementsByTagName('button')[0].addEventListener('click',()=>{

//   // 1.change background color of body red to blue and blue to red

//   // if(window.getComputedStyle(document.body).backgroundColor=== "rgb(255, 0, 0)"){
//   //   document.body.style.backgroundColor ='blue'

//   // }
//   // else if(window.getComputedStyle(document.body).backgroundColor=== "rgb(0, 0, 255)"){
//   //   document.body.style.backgroundColor ='red'
//   // }

//   // 2.changing random background color

//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

//   document.body.style.backgroundColor = randomColor;

// })

// //3.change color in every 1 second

setInterval(()=>{
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  document.body.style.backgroundColor = randomColor;

},1000)