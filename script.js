/* Add any JavaScript you need to this file. */

function createImag(shoes) {
  let image = document.createElement('img');
  image.src = shoes.imageUrl;
  image.alt = 'loading...';
  image.onclick = function() {
    document.getElementById('popupWindow').style.display = 'block';
    document.getElementById('popupImage').src = image.src;
    document.getElementById('popCover').style.display = 'block';
  };
  return image;
}

function createFigure(shoes) {
  let figure = document.createElement('figure');
  figure.appendChild(createImag(shoes));


  let figcaption1 = document.createElement('figcaption');
  figure.appendChild(figcaption1);
  figcaption1.innerHTML = shoes.title + '\n' + shoes.price;
  figcaption1.classList.add('figcaption1');

  let figcaption2 = document.createElement('figcaption');
  figure.appendChild(figcaption2);
  figcaption2.innerHTML = shoes.description;
  figcaption2.classList.add('figcaption2');

  return figure;
}

function createCards(shoesArray) {
  let elem = document.getElementById('cards');
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  for (let i = 0; i < shoesArray.length; i++) {
    let figure = createFigure(shoesArray[i]);
    elem.appendChild(figure);
  }
  let categoryText = document.getElementById('CategoryText');
  categoryText.style.backgroundImage = "url('./images/women shoes1.jpg')";
  categoryText.style.backgroundSize = 'cover';
  categoryText.innerHTML = 'Your Favourit Choice!';
  categoryText.style.color = '#0a043c';
}

function createCardsByCategory(shoesArray, category) {
  let newArray = [];
  for (let i = 0; i < shoesArray.length; i++) {
    if (shoesArray[i].category === category) {
      newArray.push(shoesArray[i]);
    }
  }
  createCards(newArray);

  let categoryText = document.getElementById('CategoryText');
  categoryText.innerHTML = category + "'s Shoes";

  categoryText.style.backgroundSize = 'cover';
  if (category === 'Women') {
    categoryText.style.backgroundImage = "url('./images/women shoes5.jpg')";
    categoryText.style.color = '#0a043c';
  }
  if (category === 'Men') {
    categoryText.style.backgroundImage = "url('./images/men shoes (1).jpg')";
    categoryText.style.color = '#ffe3d8';
  }
}

function closepopupWindow() {
  document.getElementById('popupWindow').style.display = 'none';
  document.getElementById('popCover').style.display = 'none';
}

function contactFormValidation(){
  return radioValidation();
}

function radioValidation(){
  let value = false;
  let elem = document.getElementsByName("contactFor");
  for(let i = 0; i <elem.length; i++){
    if(elem[i].checked){
      value = true;
    }
  }
  if(value === false){
      alert('Please choose problem type from the "Contact For" options.');
  }
  return value;
}


function radioOrder(){
  document.getElementById("contactOrderNum").required = true;
  document.getElementById('orderNumLabel').style.display='block';
  document.getElementById('contactOrderNum').style.display='block';
}

function radioComment(){
  document.getElementById("contactOrderNum").required = false;
  document.getElementById('orderNumLabel').style.display='none';
  document.getElementById('contactOrderNum').style.display='none';
}

function radioQuestion(){
  document.getElementById("contactOrderNum").required = false;
  document.getElementById('orderNumLabel').style.display='none';
  document.getElementById('contactOrderNum').style.display='none';

}

