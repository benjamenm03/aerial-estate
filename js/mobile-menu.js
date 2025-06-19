document.addEventListener('DOMContentLoaded',function(){
  var menu=document.querySelector('.header-menu');
  if(!menu)return;
  var rootFolder=menu.querySelector('[data-folder="root"]');
  var burgerButtons=document.querySelectorAll('.header-burger-btn');
  burgerButtons.forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      if(menu.classList.contains('open')){
        menu.classList.remove('open');
        showFolder(rootFolder);
      }else{
        menu.classList.add('open');
      }
    });
  });
  menu.querySelectorAll('[data-folder-id]').forEach(function(link){
    link.addEventListener('click',function(e){
      e.preventDefault();
      var id=link.getAttribute('data-folder-id');
      var target=menu.querySelector('[data-folder="'+id+'"]');
      if(target){
        showFolder(target);
      }
    });
  });
  menu.querySelectorAll('[data-action="back"]').forEach(function(back){
    back.addEventListener('click',function(e){
      e.preventDefault();
      showFolder(rootFolder);
    });
  });
  function showFolder(folder){
    menu.querySelectorAll('.header-menu-nav-folder').forEach(function(f){
      f.style.display='none';
    });
    folder.style.display='block';
  }
});
