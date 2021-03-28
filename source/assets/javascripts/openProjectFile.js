const header = document.querySelector('.project-header');

header.addEventListener('click', () => {
  header.innerHTML = '<h2>&#x25BE; <i class="far fa-folder-open"></i> PROJECTS</h2>';
  $('.project-list').slideDown('slow');
});
