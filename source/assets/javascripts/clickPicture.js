// Get the modal
// Get the image and insert it inside the modal - use its "alt" text as a caption
// Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal
const imgs = document.querySelectorAll('#project-img');
const modal = document.querySelector('#myModal');
const modalImg = document.querySelector('#img');
const close = document.querySelector('.close');

imgs.forEach((image) => {
  image.addEventListener('click', (event) => {
    const elem = event.target;
    modal.style.display = 'block';
    modalImg.src = elem.src;
  });
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
