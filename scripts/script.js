// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      e.preventDefault();
      const headerOffset = 70; // header height
      const elemPos = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elemPos - headerOffset,
        behavior: 'smooth'
      });
    }
  });
});
