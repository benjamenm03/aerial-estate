window.addEventListener('scroll',function(){
  var header=document.getElementById('header');
  if(!header)return;
  if(window.scrollY>50){
    header.classList.add('navbar-shrink');
  }else{
    header.classList.remove('navbar-shrink');
  }
});
