document.addEventListener('DOMContentLoaded', function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='index.html' && href==='index.html')){
      a.classList.add('current');
    }
  });
});