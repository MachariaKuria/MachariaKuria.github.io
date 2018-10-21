
/*setUpPage();

function setUpPage() {
  addNavEventListeners();
  addArticleEventListeners();
  addWindowEventListeners();
  addModalEventListeners();
  addSliderEventListeners();
}*/
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
