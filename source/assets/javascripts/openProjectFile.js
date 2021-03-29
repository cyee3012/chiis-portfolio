const header = document.querySelector('.project-header');

header.addEventListener('click', () => {
  if (header.innerHTML.includes('fa-folder-open')) {
    header.innerHTML = '<h2>&#x25B8; <i class="far fa-folder"></i> PROJECTS</h2>';
    $('.project-list').slideToggle('slow');
  } else {
    header.innerHTML = '<h2>&#x25BE; <i class="far fa-folder-open"></i> PROJECTS</h2>';
    $('.project-list').slideToggle('slow');
  }
});
