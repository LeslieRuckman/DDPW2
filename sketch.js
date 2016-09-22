var data,input;

function preload() {
  data = loadJSON("signs.json");
}

function setup() {
  noCanvas();
  input = createInput("Enter your birth year");

  input.changed(findYin);

}

function findYin(){

  var birthY = input.value();
  var Rat = data.eastern_zodiac.Rat.yinyang;
  var Tiger = data.eastern_zodiac.Tiger.yinyang;
  var Rabbit = data.eastern_zodiac.Rabbit.yinyang;
  var Dragon = data.eastern_zodiac.Dragon.yinyang;
  var Snake = data.eastern_zodiac.Snake.yinyang;
  var Horse = data.eastern_zodiac.Horse.yinyang;
  var Goat = data.eastern_zodiac.Goat.yinyang;
  var Monkey = data.eastern_zodiac.Monkey.yinyang;
  var Rooster = data.eastern_zodiac.Rooster.yinyang;
  var Dog = data.eastern_zodiac.Dog.yinyang;
  var Pig = data.eastern_zodiac.Pig.yinyang;

  var Yin = "Associated with earth, dark, and cold.";
  var Yang = "Associated with heaven, heat, and light.";


  for (var i=0; i< data.eastern_zodiac.Rat.years.length; i++){
    var years = data.eastern_zodiac.Rat.years[i];
    var years1 = data.eastern_zodiac.Tiger.years[i];
    var years2 = data.eastern_zodiac.Rabbit.years[i];
    var years3 = data.eastern_zodiac.Dragon.years[i];
    var years4 = data.eastern_zodiac.Snake.years[i];
    var years5 = data.eastern_zodiac.Horse.years[i];
    var years6 = data.eastern_zodiac.Goat.years[i];
    var years7 = data.eastern_zodiac.Monkey.years[i];
    var years8 = data.eastern_zodiac.Rooster.years[i];
    var years9 = data.eastern_zodiac.Dog.years[i];
    var years10 = data.eastern_zodiac.Pig.years[i];
  // for (j=0; j< 10; j++){}
  if(birthY==years){
    createP(Rat + " : " +Yang);
  } else if(birthY == (years)+1){
    createP(Rabbit + " : " +Yin);
  }else if(birthY==years1){
    createP(Tiger+ " : " +Yang);
  }else if(birthY==years2){
    createP(Rabbit+ " : " +Yin);
  }else if(birthY==years3){
    createP(Dragon+ " : " +Yang);
  }else if(birthY==years4){
    createP(Snake+ " : " +Yin);
  }else if(birthY==years5){
    createP(Horse+ " : " +Yang);
  }else if(birthY==years6){
    createP(Goat+ " : " +Yin);
  }else if(birthY==years7){
    createP(Monkey+ " : " +Yang);
  }else if(birthY==years8){
    createP(Rooster+ " : " +Yin);
  }else if(birthY==years9){
    createP(Dog+ " : " +Yang);
  }else if(birthY==years10){
    createP(Pig+ " : " +Yin);
  }
  // else{
  //   createP("?");
  // }
  // var test = data.eastern_zodiac[j];
  //  console.log(years);
  //  console.log(test);
  }

}

  // createP(rat);
  // createP(years);
