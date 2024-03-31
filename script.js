const bars = document.querySelector('.fa-bars')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.fa-times')

bars.addEventListener('click', () => sidebar.classList.add('show-sidebar'))
closeBtn.addEventListener('click', () => sidebar.classList.remove('show-sidebar'))