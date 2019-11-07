console.log('do the thing');


var bands = [
  {
    photo:'images/behe1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    about:'',
    genre:''
  },
  {
    photo:'images/beast1.jpg',
    name:'beastwars',
    year:'',
    country:'',
    about:'',
    genre:''
  },
  {
    photo:'images/gojir1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    about:'',
    genre:''
  },
  {
    photo:'images/slay1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    about:'',
    genre:''
  },
  {
    photo:'images/meat1.jpg',
    name:'behemoth',
    year:'',
    country:'',
    about:'',
    genre:''
  },
  {
    photo:'images/jorm1.jpg',
    name:'jormungandr',
    year:'',
    country:'',
    about:'',
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

  +='<div class="card border-0 rounded-0 bg-dark text-light col-12 col-md-6 col-lg-3 p-2" style="width: 18rem;">'
  +'<img src="'+bands[i].photo+'" class="card-img-top p-0" alt="...">'
  +'<div class="card-body">'
  +'<h5 class="card-title">'+bands[i].name.toUpperCase().slice(0).charAt(0)bands[i].name.replace()+'</h5>'
  //working on this to capitalise words
  +'<p class="card-text">'+bands[i].about+'</p>'
  +'</div>'
  +'</div>';
}};




theBands();
