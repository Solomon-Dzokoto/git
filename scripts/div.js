function displayMessage(message){
  document.getElementById("message").innerHTML=message
  message=localStorage.get(`<p ><span>BRONZE</span> <br> 0.5% Profit per trade 40 trades/day</p>`);
 };

 const divs=document.querySelectorAll('.vip-level');
divs.forEach(div => {
 div.addEventListener('click', ()=>{
  const activeDiv = document.querySelector('.vip-level.active');

  activeDiv.classList.remove('active');

  div.classList.add('active');
 }
);
});
