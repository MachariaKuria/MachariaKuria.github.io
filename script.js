addNavEventListeners();
  
  // Code to toggle navigation menu
  function addNavEventListeners() {

    const nav = document.querySelector('nav');

    const navClickHandler = function() {
      this.classList.toggle('open');
      event.stopPropagation();
    };

    nav.addEventListener('click', navClickHandler);

    const bodyClickHandler = function() {
      nav.classList.remove('open');
    };

    document.body.addEventListener('click', bodyClickHandler);
  }



addArticleEventListeners();

function addArticleEventListeners() {

  const articles = document.querySelectorAll('#projects article');

  for (let article of articles) {
    let button = article.querySelector('button');

    button.addEventListener('click', function() {
      article.classList.toggle('expanded');
      button.innerHTML = article.classList.contains('expanded') ?
        'Hide Details' : 'Show Details';
    });
  }
}

//Code for the image Carousel javascript.

var i = 0;
var images = [];
var time = 3000;

images[0] = './images/virtualPetShelter.jpg';
images[1] = './images/PetsAmok.jpg'
images[2] = './images/javascript.jpg';
images[3] = './images/JPA.jpg';
images[4] = './images/css.jpg';

function changeImg(){
  document.getElementById('slide').src = images[i];

  let carousels = document.getElementsByClassName("image-carousel");

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()",time);

}

//call the function changeImg().
  window.onload= changeImg;


  //Code for the modal box.

  //Get modal element
  var modal = document.getElementById('simpleModal');
  //Get open modal button
  var modalBtn = document.getElementById('modalBtn');
  //Get close button
  var closeBtn = document.getElementsByClassName('closeBtn')[0];

  //Listen for open click
  modalBtn.addEventListener('click',openModal);

    //Listen for open click
    closeBtn.addEventListener('click',closeModal);

    //Listen for outside click
    window.addEventListener('click',outsideClick);

  //Function to open modal
  function openModal(){
    modal.style.display = 'block';
  }

  //Function to close modal
  function closeModal(){
    modal.style.display = 'none';
  }

  //Function to close modal if outside click
  function outsideClick(){
    if(this.target === modal){
      modal.style.display = 'none';
    }
    
  }
