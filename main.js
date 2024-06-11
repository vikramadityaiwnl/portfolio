const toTheTop = document.querySelector('.to-the-top')
toTheTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    toTheTop.classList.remove('hidden')
  } else {
    toTheTop.classList.add('hidden')
  }
})