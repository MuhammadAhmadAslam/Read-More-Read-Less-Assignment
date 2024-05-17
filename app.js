
let text = document.getElementById('text')
let btn = document.getElementById('b1')
let div = document.getElementById('d1')
btn.addEventListener('click',function(){
  
  if(btn.innerText == 'Read More'){
    btn.innerText = 'Read Less'
    div.style.overflow = 'visible';
    div.style.height = '100%'
    
  }else{
    btn.innerText = 'Read More'
    div.style.overflow = 'hidden'
    div.style.height = '200px'
  }
  
})