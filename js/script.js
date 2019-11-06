console.log('do the thing');


var bands = [
  {
    photo:'images/behe1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    genre:''
  },
  {
    photo:'images/beast1.jpg',
    name:'beastwars',
    year:'',
    country:'',
    genre:''
  },
  {
    photo:'images/gojir1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    genre:''
  },
  {
    photo:'images/slay1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    genre:''
  },
  {
    photo:'images/meat1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    genre:''
  },
  {
    photo:'images/jorm1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    genre:''
  },










  // {
  //   photo:'',
  //   name:'',
  //   year:'',
  //   country:'',
  //   genre:''
  // }
];

console.log(bands.length);




function theBands(){
for (var i = 0; i < bands.length; i++) {
  document.getElementById('mainContent').innerHTML

  +='<div class="card border-0 rounded-0 bg-dark text-light col-3 p-2" style="width: 18rem;">'
  +'<img src="'+bands[i].photo+'" class="card-img-top p-0" alt="...">'
  +'<div class="card-body">'
  +'<h5 class="card-title">'+bands[i].name.toUpperCase()+'</h5>'
  +'<p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>'
  +'</div>'
  +'</div>';
}};




theBands();
