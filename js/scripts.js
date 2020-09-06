const imagesToShow = document.querySelectorAll('.show');

window.addEventListener('scroll', () => {
  imagesToShow.forEach(img => {
    const slideInAt = window.innerHeight + window.scrollY - img.offsetHeight/4;

    if(slideInAt > img.offsetTop){
      img.classList.add('active');
    }
  })
})
