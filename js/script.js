console.log('do the thing');


var bands = [
  {
    id: 'b1',
    photo1:'images/behe1.jpg',
    photo2:'images/behe2.jpg',
    photo3:'images/behe3.jpg',
    photo4:'images/behe4.jpg',
    photo5:'images/behe5.jpg',
    photo6:'images/behe6.jpg',
    photo7:'images/behe7.jpg',
    name:'behemoth',
    year: 1991,
    country:'poland',
    about:'Behemoth is a Polish extreme metal band from Gdańsk, formed in 1991. They are considered to have played an important role in establishing the Polish extreme metal underground. Until the late 1990s, the band played a traditional black metal style with heathen lyrical content, but soon changed to that of occult and thelemic themes written by their lead vocalist Nergal and Krzysztof Azarewicz. With the 1999 release of Satanica, the band demonstrated their presence in the death metal scene, while retaining their own signature style characterized by the drum work of Inferno, multi-layered vocals and Middle-Eastern influences. Despite Behemoth having been labeled as death metal or thrash metal-influenced, Nergal has mentioned that he does not like the band to be labeled.',
    genre:'death metal'
  },
  {
    id: 'b2',
    photo1:'images/beast1.jpg',
    photo2:'images/beast2.jpg',
    photo3:'images/beast3.jpg',
    photo4:'images/beast4.jpg',
    name:'beastwars',
    year:2006,
    country:'new zealand',
    about:'Beastwars is a sludge metal band from New Zealand. Their 2011 self-titled debut album received positive reviews in the band\'s native country and invited musical comparisons to Soundgarden, Mastodon, and Unsane, amongst others. The album also gained recognition for Nick Keller\'s cover design, winning the 2011 New Zealand Music Award for Best Album Artwork or Packaging. The band received a nomination for best New Zealand Rock Album at the same ceremony, but ultimately lost out to Ignite. The album was also shortlisted for the 2012 Taite Music Prize.',
    genre:'sludge metal'
  },
  {
    id: 'b3',
    photo1:'images/gojir1.jpg',
    photo2:'images/gojir2.jpg',
    photo3:'images/gojir3.jpg',
    photo4:'images/gojir4.jpg',
    photo5:'images/gojir5.jpg',
    photo6:'images/gojir6.jpg',
    name:'gojira',
    year:1996,
    country:'france',
    about:'Gojira are a French heavy metal band from Bayonne. Originally formed as Godzilla in 1996, they changed their name to Gojira in 2001. The band\'s lineup, consisting of brothers Joe Duplantier (lead vocals, guitars) and Mario Duplantier (drums, backing vocals), guitarist Christian Andreu, and bassist Jean-Michel Labadie, has been the same since the band\'s name change. They have released six studio albums and three live DVDs. They are known for their environment-themed lyrics and have gone from "utmost obscurity" to being placed "amongst (death metal)\'s leading new millennium upstarts". Gojira have received Grammy nominations for Best Rock Album for their latest album Magma (2016) and Best Metal Performance for their single "Silvera".',
    genre:'progressive death metal'
  },
  {
    id: 'b4',
    photo1:'images/slay1.jpg',
    photo2:'images/slay2.jpg',
    photo3:'images/slay3.jpg',
    photo4:'images/slay4.jpg',
    photo5:'images/slay5.jpg',
    photo6:'images/slay6.jpg',
    photo7:'images/slay7.jpg',
    photo8:'images/slay8.jpg',
    photo9:'images/slay9.jpg',
    photo10:'images/slay10.jpg',
    photo11:'images/slay11jpg',
    name:'slayer',
    year:1981,
    country:'america',
    about:'Slayer is an American thrash metal band from Huntington Park, California. The band was formed in 1981 by guitarists Kerry King and Jeff Hanneman, vocalist and bassist Tom Araya and drummer Dave Lombardo. Slayer\'s fast and aggressive musical style made them one of the founding "big four" bands of thrash metal, alongside Metallica, Megadeth and Anthrax. Slayer\'s current lineup comprises King, Araya, drummer Paul Bostaph and guitarist Gary Holt. Hanneman and drummers Dave Lombardo and Jon Dette are former members of the band.',
    genre:'thrash metal'
  },
  {
    id: 'b5',
    photo1:'images/meat1.jpg',
    name:'meat',
    year:2008,
    country:'new zealand',
    about:'BBQ\'s and brews are quick to follow when Meat shows up for a show. These guys are characterised by their high energy performance that is sure to light up the crowd and make for a skitz as night and after 8 years, you know they\'re well seasoned. Starting in Wellington the band has played many shows, hitting the stages of the James Cabaret, Valhalla, Bodega, Fast Eddies, Moon Bar and the odd house party. Characterised by their groovy, thrashy, raw meat sound they have opened for many bands including international such as Stigmata and Anvil',
    genre:'progressive thrash metal'
  },
  {
    id: 'b6',
    photo1:'images/jorm1.jpg',
    photo2:'images/jorm2.jpg',
    name:'jormungandr',
    year:2007,
    country:'new zealand',
    about:'Just a bunch of peasants who want to play music. We play instruments that make noise.',
    genre:'viking metal'
  },
  {
    id: 'b7',
    photo1:'images/sepul1.jpg',
    photo2:'images/sepul2.jpg',
    photo3:'images/sepul3.jpg',
    photo4:'images/sepul4.jpg',
    name:'sepultura',
    year:1984,
    country:'brazil',
    about:'Sepultura is a Brazilian heavy metal band from Belo Horizonte. Formed in 1984 by brothers Max and Igor Cavalera, the band was a major force in the groove metal, thrash metal, and death metal genres during the late 1980s and early 1990s,[4] with their later experiments drawing influence from alternative metal, world music, nu metal, hardcore punk, and industrial metal. Sepultura has also been credited as one of the second wave of thrash metal acts from the late 1980s to early-to-mid-1990s, along with bands like Pantera, Testament, Sacred Reich, Dark Angel, Vio-lence, Forbidden, Death Angel and Machine Head.',
    genre:'thrash metal'
  },
  {
    id: 'b8',
    photo1:'images/revo1.jpg',
    photo2:'images/revo2.jpg',
    photo3:'images/revo3.jpg',
    photo4:'images/revo4.jpg',
    photo5:'images/revo5.jpg',
    photo6:'images/revo6.jpg',
    photo7:'images/revo7.jpg',
    name:'revocation',
    year:2000,
    country:'america',
    about:'Revocation is an American technical death metal band from Boston, Massachusetts, founded by guitarist and vocalist David Davidson, bassist and vocalist Anthony Buda and drummer Phil Dubois-Coyne in 2000. The band has released seven studio albums, two EPs, and ten music videos since their formation.',
    genre:'technical death metal'
  },
  {
    id: 'b9',
    photo1:'images/king1.jpg',
    photo2:'images/king2.jpg',
    photo3:'images/king3.jpg',
    name:'king parrot',
    year:2010,
    country:'australia',
    about:'King Parrot are an Australian thrashcore band formed in Melbourne in 2010. They have released three studio albums: Bite Your Head Off (2012), Dead Set (2015) and Ugly Produce (2017).',
    genre:'thrashcore'
  },
  {
    id: 'b10',
    photo1:'images/met1.jpg',
    photo2:'images/met2.jpg',
    photo3:'images/met3.jpg',
    photo4:'images/met4.jpg',
    photo5:'images/met5.jpg',
    photo6:'images/met6.jpg',
    photo7:'images/met7.jpg',
    photo8:'images/met8.jpg',
    photo9:'images/met9.jpg',
    photo10:'images/met10.jpg',
    name:'metallica',
    year:1981,
    country:'america',
    about:'Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career. The band\'s fast tempos, instrumentals and aggressive musicianship made them one of the founding "big four" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Metallica\'s current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who went on to form Megadeth after being fired from the band) and bassists Ron McGovney, Cliff Burton (who died in a bus accident in Sweden in 1986) and Jason Newsted are former members of the band.',
    genre:'thrash metal'
  },
  {
    id: 'b11',
    photo1:'images/baron1.jpg',
    photo2:'images/baron2.jpg',
    photo3:'images/baron3.jpg',
    photo4:'images/baron4.jpg',
    photo5:'images/baron5.jpg',
    name:'baroness',
    year:2003,
    country:'america',
    about:'Baroness is an American heavy metal band from Savannah, Georgia whose original members grew up together in Lexington, Virginia.',
    genre:'sludge metal'
  },
  {
    id: 'b12',
    photo1:'images/high1.jpg',
    photo2:'images/high2.jpg',
    photo3:'images/high3.jpg',
    photo4:'images/high4.jpg',
    photo5:'images/high5.jpg',
    name:'high on fire',
    year:1998,
    country:'america',
    about:'High on Fire is an American heavy metal band from Oakland, California,[1] that was formed in 1998. Matt Pike, the band\'s frontman and founder, also plays guitar for the stoner metal band Sleep. The band won the 2018\'s Grammy Award for Best Metal Performance with their song "Electric Messiah"',
    genre:'sludge metal'
  },
  {
    id: 'b13',
    photo1:'images/sky1.jpg',
    photo2:'images/sky2.jpg',
    photo3:'images/sky3.jpg',
    name:'skyharbour',
    year:2010,
    country:'india',
    about:'Skyharbor is an Indian/American progressive metal band with members from New Delhi and Mumbai, India; and Cleveland, Ohio, US.',
    genre:'progressive metal'
  },
  {
    id: 'b14',
    photo1:'images/pan1.jpg',
    photo2:'images/pan2.jpg',
    photo3:'images/pan3.jpg',
    photo4:'images/pan4.jpg',
    photo5:'images/pan5.jpg',
    name:'pantera',
    year:1981,
    country:'america',
    about:'Pantera was an American heavy metal band from Arlington, Texas. The group was formed in 1981 by the Abbott brothers—drummer Vinnie Paul and guitarist Dimebag Darrell—along with lead vocalist Terry Glaze. Bassist Rex Brown joined the band the following year, replacing Tommy D. Bradford, who was the unofficial original. Having started as a glam metal band, Pantera released four albums independently during the 1980s. Looking for a new and heavier sound, Pantera replaced Glaze with Phil Anselmo in late 1986 and released Power Metal in 1988. In 1989, the band secured a record deal with the major laber Atco. With its fifth album, 1990\'s Cowboys from Hell, Pantera popularized the groove metal genre, while its 1992 follow-up Vulgar Display of Power exhibited an even heavier sound. Far Beyond Driven (1994) debuted at number one on the Billboard 200. In addition to their contribution to the groove metal genre, Pantera is credited (along with Testament, Sepultura, Sacred Reich, Dark Angel, Vio-lence, Forbidden, Death Angel and Machine Head) for being part of the second wave of thrash metal scene from the late 1980s to early-to-mid 1990s.',
    genre:'grove metal'
  },
  {
    id: 'b15',
    photo1:'images/lamb1.jpg',
    photo2:'images/lamb2.jpg',
    photo3:'images/lamb3.jpg',
    photo4:'images/lamb4.jpg',
    photo5:'images/lamb5.jpg',
    photo6:'images/lamb6.jpg',
    photo7:'images/lamb7.jpg',
    name:'lamb of god',
    year:1994,
    country:'america',
    about:'Lamb of God (sometimes abbreviated as LoG) is an American heavy metal band from Richmond, Virginia. Formed in 1994 as Burn the Priest, the group consists of bassist John Campbell, vocalist Randy Blythe, guitarists Mark Morton and Willie Adler, and drummer Art Cruz. The band is considered a significant member of the New Wave of American Heavy Metal movement. Since their formation, Lamb of God has released nine studio albums, one live album, one compilation album and three DVDs. The band\'s cumulative sales equal almost two million in the United States, including one album certified Gold by the RIAA. In 2010 and 2011 the band received Grammy nominations for songs from their 2009 album Wrath. They also received a nomination in 2016 for their song "512". Lamb of God has toured with the Ozzfest twice. Other appearances include Download Festival and Sonisphere Festival in the UK, Soundwave Festival, Mayhem Festival 2010 and Gigantour. From 2008 to 2010 they toured as part of Metallica\'s World Magnetic Tour, and supported Slayer on their final world tour in 2018 and 2019.',
    genre:'groove metal'
  },
  {
    id: 'b16',
    photo1:'images/between1.jpg',
    photo2:'images/between2.jpg',
    photo3:'images/between3.jpg',
    photo4:'images/between4.jpg',
    photo5:'images/between5.jpg',
    photo6:'images/between6.jpg',
    photo7:'images/between7jpg',
    photo8:'images/between8.jpg',
    name:'between the buried and me',
    year:2000,
    country:'america',
    about:'Between the Buried and Me is an American progressive metal band from Raleigh, North Carolina. Formed in 2000, the band consists of Tommy Giles Rogers Jr. (lead vocals, keyboards), Paul Waggoner (lead guitar, backing vocals), Dustie Waring (rhythm guitar, lead guitar), Dan Briggs (bass, keyboards), and Blake Richardson (drums).Their debut eponymous album was released through Lifeforce Records in 2002, shifting to Victory Records for subsequent releases until their signing to Metal Blade in 2011, where Between the Buried and Me released their first extended play, The Parallax: Hypersleep Dialogues that year, and its full-length follow-up The Parallax II: Future Sequence the following year. Their seventh studio album, Coma Ecliptic, was released in 2015. Their eighth album Automata I was released March 9, 2018, and their ninth album, Automata II, was released July 13, 2018.',
    genre:'progressive metal'
  }
];

console.log(bands.length);


var newId = 1;
function theBands(){
  for (var i = 0; i < bands.length; i++) {
    document.getElementById('headingText').innerHTML = ' '
    +'<p>all</p>';
    document.getElementById('mainContent').innerHTML
    +='<div class="card border-0 mb-4 text-light col-12 col-md-6 col-lg-3 p-4" style="width: 18rem;">'
    +'<img class="band-img card-img-top" id="b'+newId.toString()+'" src="'+bands[i].photo1+'"alt="...">'
    +'<div class="card-body pb-0">'
    +'<h5 class="card-title text-center">'+bands[i].name+'</h5>'
    +'<p class="card-text">'+'country - '+bands[i].country+'</p>'
    +'<p class="card-text">'+'year formed - '+bands[i].year+'</p>'
    +'<p class="card-text">'+'genre - '+bands[i].genre+'</p>'
    +'<p class="card-text">'+'location - '+bands[i].country+'</p>'
    +'</div>';
    newId++;
  }
}

// theBands();
//------------------------------------------------- end of base info ----------------------------------------------------------




//------------------------------------------------- modals------------------------------------------------------------------
$('.my-modal').hide();

function test(){
$('.band-img').on('click', function(){
  $('.my-modal').show();
  for (var i = 0; i < bands.length; i++) {
    if (bands[i].id === this.newId){
      document.getElementById('modalContent').innerHTML
      = '<div class="text-center display-3">' + bands[i].name + '</div></br>'
      + '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
      +  '<ol class="carousel-indicators">'
      +    '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      +    '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
      +    '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
      +  '</ol>'
      // +  '<div class="carousel-inner">'
      // +    '<div class="carousel-item active">'
      // +      '<img class="dog-img-modal p-4 container" src="' + bands[i].photo1 + '"alt="..."/>'
      // +    '</div>'
      // +    '<div class="carousel-item">'
      // +      '<img class="dog-img-modal p-4 container" src="' + bands[i].photo2 + '"alt="..."/>'
      // +    '</div>'
      // +    '<div class="carousel-item">'
      // +      '<img class="dog-img-modal p-4 container" src="' + bands[i].photo3 + '"alt="..."/>'
      // +    '</div>'
      // +  '</div>'
      +  '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      +    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      +    '<span class="sr-only">Previous</span>'
      +  '</a>'
      +  '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      +    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      +    '<span class="sr-only">Next</span>'
      +  '</a>'
      + '</div>';
    };
    console.log(bands[i].name);
  };
});
}


$('.close-bar').on('click', function(){
  $('.my-modal').hide();
});






//------------------------------------------------- default alphabetical loading-----------------------------------------------

function bandsAlph(){
  document.getElementById('mainContent').innerHTML = ' ';
  bands.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.name > b.name){
      return 1;//return one means it returns true.
    } else if (a.name < b.name) {
      return -1;//returns false.
    }
  }
  theBands();
  test();
}
//------------------------------------------------- default alphabetical loading-----------------------------------------------

//------------------------------------------------- year sort------------------------------------------------------------------

document.getElementById('yearAsc').addEventListener('click', function(){

  //tyring to get heading text to display from list selection
  document.getElementById('mainContent').innerHTML = ' ';
  bands.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.year > b.year){
      return 1;//return one means it returns true.
    } else if (a.year < b.year) {
      return -1;//returns false.
    }
  }
  theBands();
  document.getElementById('headingText').innerHTML = ' '
  +'<p>years ascending</p>';
});
document.getElementById('yearDesc').addEventListener('click', function(){
  document.getElementById('mainContent').innerHTML = ' ';
  bands.sort(compare);//calling a function called compare to define the object property
  function compare(a,b){
    if (a.year < b.year){
      return 1;//return one means it returns true.
    } else if (a.year > b.year) {
      return -1;//returns false.
    }
  }
  theBands();
  document.getElementById('headingText').innerHTML = ' '
  +'<p>years decending</p>';
});

//------------------------------------------------- year sort------------------------------------------------------------------
