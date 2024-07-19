const divsItems=document.querySelectorAll('.tail-items');
divsItems.forEach(div => {
 div.addEventListener('click', ()=>{
  const activeDiv = document.querySelector('.tail-items.active');

  activeDiv.classList.remove('active');

  div.classList.add('active');
 }
);
});

const changeButton=document.querySelectorAll('.btn');
changeButton.forEach(button => {
 button.addEventListener('click', ()=>{
  const activeButton = document.querySelector('.btn.active');

  activeButton.classList.remove('active');

  button.classList.add('active');
 }
);
});