'use strict';

let titles = ['Delicious Lasagna', 'Healthy Oatmeal Cookie'];

function readDirectionLink() {
  let title = document.getElementById('recipe-title').innerHTML;

  switch (title) {
    case titles[0]:
      window.location =
        'https://www.365daysofbakingandmore.com/day-27-lasagna/';
      break;
    case titles[1]:
      window.location =
        ' https://www.yummymummyclub.ca/easy-family-recipes/healthy-oatmeal-cookie-recipe';
      break;
  }
}

function updateRecipeDetailPageContent() {
  let title = document.getElementById('recipe-title').innerHTML;

  switch (title) {
    case titles[0]:
      document.getElementById('summary-image-view').src =
        'assets/images/lasagna_image.jpg';
      break;
    case titles[1]:
      document.getElementById('summary-image-view').src =
        'assets/images/cookie_healthy.webp';
      break;
  }
  return 0;
}

window.onload = updateRecipeDetailPageContent;
