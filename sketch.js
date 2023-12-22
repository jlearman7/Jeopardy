let topicA;
var myFont;
function setup() {
  createCanvas(400, 400);
  textFont(myFont);

  
  b1 = new Board("Board 1", ["Topic", "100", "200", "300", "400", "500"]);
  b2 = new Board("Board 2", ["Topic", "100", "200", "300", "400", "500"]);
  b3 = new Board("Board 3", ["Topic", "100", "200", "300", "400", "500"]);
  b4 = new Board("Board 4", ["Topic", "100", "200", "300", "400", "500"]);
  b5 = new Board("Board 5", ["Topic", "100", "200", "300", "400", "500"]);
  b6 = new Board("Board 6", ["Topic", "100", "200", "300", "400", "500"]);
  
  startMainMenu();
  //output();
}
//loop
function draw() {
  
}
function preload(){
  myFont = loadFont('geoparody rg.otf');
}
function output(){
  print(b1.name);
  
  uinput = createInput();
  
  
  for(let i=0;i<30;i++){
    print(b1.questions[i]);
  }
}
function saved(){
  b1.questions[0] = topicA.value();
}
function mainMenu(){
  //bbtn.remove();
  mmbtn.remove();
  nbtn.remove();
  topicA.remove();
  oneA.remove();
  twoA.remove();
  threeA.remove();
  fourA.remove();
  fiveA.remove();
  mmbtn.remove();
  nbtn.remove();
  
  if(typeof bbtn!= "undefined"){
    bbtn.remove();
  }
  
  background(220);
  btn1 = createButton(b1.name);
  btn1.mouseClicked(openBoard1);
  btn1.size(125, 50);
  btn1.position(20, 100);
  btn1.style("font-family", myFont);
  btn1.style("font-size", "30px")
  
  ebtn1 = createButton("edit");
  ebtn1.mouseClicked(eb1t1);
  ebtn1.size(50, 50);
  ebtn1.position(145, 100);
  ebtn1.style("font-family", myFont);
  ebtn1.style("font-size", "25px")
  
  btn2 = createButton(b2.name);
  btn2.mouseClicked(openBoard2);
  btn2.size(125, 50);
  btn2.position(20, 175);
  btn2.style("font-family", myFont);
  btn2.style("font-size", "30px")
  
  ebtn2 = createButton("edit");
  ebtn2.mouseClicked(eb2t1);
  ebtn2.size(50, 50);
  ebtn2.position(145, 175);
  ebtn2.style("font-family", myFont);
  ebtn2.style("font-size", "25px")
  
  btn3 = createButton(b3.name);
  btn3.mouseClicked(openBoard3);
  btn3.size(125, 50);
  btn3.position(20, 250);
  btn3.style("font-family", myFont);
  btn3.style("font-size", "30px")
  
  ebtn3 = createButton("edit");
  ebtn3.mouseClicked(eb3t1);
  ebtn3.size(50, 50);
  ebtn3.position(145, 250);
  ebtn3.style("font-family", myFont);
  ebtn3.style("font-size", "25px")
  
  btn4 = createButton(b4.name);
  btn4.mouseClicked(openBoard4);
  btn4.size(125, 50);
  btn4.position(200, 100);
  btn4.style("font-family", myFont);
  btn4.style("font-size", "30px")
  
  ebtn4 = createButton("edit");
  ebtn4.mouseClicked(eb4t1);
  ebtn4.size(50, 50);
  ebtn4.position(325, 100);
  ebtn4.style("font-family", myFont);
  ebtn4.style("font-size", "25px")
  
  btn5 = createButton(b5.name);
  btn5.mouseClicked(openBoard5);
  btn5.size(125, 50);
  btn5.position(200, 175);
  btn5.style("font-family", myFont);
  btn5.style("font-size", "30px")
  
  ebtn5 = createButton("edit");
  ebtn5.mouseClicked(eb5t1);
  ebtn5.size(50, 50);
  ebtn5.position(325, 175);
  ebtn5.style("font-family", myFont);
  ebtn5.style("font-size", "25px")
  
  btn6 = createButton(b6.name);
  btn6.mouseClicked(openBoard6);
  btn6.size(125, 50);
  btn6.position(200, 250);
  btn6.style("font-family", myFont);
  btn6.style("font-size", "30px")
  
  ebtn6 = createButton("edit");
  ebtn6.mouseClicked(eb6t1);
  ebtn6.size(50, 50);
  ebtn6.position(325, 250);
  ebtn6.style("font-family", myFont);
  ebtn6.style("font-size", "25px")
  
}
function startMainMenu(){
  background(220);
  btn1 = createButton(b1.name);
  btn1.mouseClicked(openBoard1);
  btn1.size(125, 50);
  btn1.position(20, 100);
  btn1.style("font-family", myFont);
  btn1.style("font-size", "30px")
  
  ebtn1 = createButton("edit");
  ebtn1.mouseClicked(eb1t1);
  ebtn1.size(50, 50);
  ebtn1.position(145, 100);
  ebtn1.style("font-family", myFont);
  ebtn1.style("font-size", "25px")
  
  btn2 = createButton(b2.name);
  btn2.mouseClicked(openBoard2);
  btn2.size(125, 50);
  btn2.position(20, 175);
  btn2.style("font-family", myFont);
  btn2.style("font-size", "30px")
  
  ebtn2 = createButton("edit");
  ebtn2.mouseClicked(eb2t1);
  ebtn2.size(50, 50);
  ebtn2.position(145, 175);
  ebtn2.style("font-family", myFont);
  ebtn2.style("font-size", "25px")
  
  btn3 = createButton(b3.name);
  btn3.mouseClicked(openBoard3);
  btn3.size(125, 50);
  btn3.position(20, 250);
  btn3.style("font-family", myFont);
  btn3.style("font-size", "30px")
  
  ebtn3 = createButton("edit");
  ebtn3.mouseClicked(eb3t1);
  ebtn3.size(50, 50);
  ebtn3.position(145, 250);
  ebtn3.style("font-family", myFont);
  ebtn3.style("font-size", "25px")
  
  btn4 = createButton(b4.name);
  btn4.mouseClicked(openBoard4);
  btn4.size(125, 50);
  btn4.position(200, 100);
  btn4.style("font-family", myFont);
  btn4.style("font-size", "30px")
  
  ebtn4 = createButton("edit");
  ebtn4.mouseClicked(eb4t1);
  ebtn4.size(50, 50);
  ebtn4.position(325, 100);
  ebtn4.style("font-family", myFont);
  ebtn4.style("font-size", "25px")
  
  btn5 = createButton(b5.name);
  btn5.mouseClicked(openBoard5);
  btn5.size(125, 50);
  btn5.position(200, 175);
  btn5.style("font-family", myFont);
  btn5.style("font-size", "30px")
  
  ebtn5 = createButton("edit");
  ebtn5.mouseClicked(eb5t1);
  ebtn5.size(50, 50);
  ebtn5.position(325, 175);
  ebtn5.style("font-family", myFont);
  ebtn5.style("font-size", "25px")
  
  btn6 = createButton(b6.name);
  btn6.mouseClicked(openBoard6);
  btn6.size(125, 50);
  btn6.position(200, 250);
  btn6.style("font-family", myFont);
  btn6.style("font-size", "30px")
  
  ebtn6 = createButton("edit");
  ebtn6.mouseClicked(eb6t1);
  ebtn6.size(50, 50);
  ebtn6.position(325, 250);
  ebtn6.style("font-family", myFont);
  ebtn6.style("font-size", "25px")
  
}

function eb1t1(){
  textAlign(CENTER);
  background(6, 12, 233);
  btn1.remove();
  ebtn1.remove();
  btn2.remove();
  ebtn2.remove();
  btn3.remove();
  ebtn3.remove();
  btn4.remove();
  ebtn4.remove();
  btn5.remove();
  ebtn5.remove();
  btn6.remove();
  ebtn6.remove();
  
  
  //reposition buttons on the bottom
  /*
  bbtn = createButton("Back");
  bbtn.mouseClicked(openBoard6);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  */
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t2);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 1:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[0] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[1] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[2] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[3] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[4] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[5] = fiveA.value();
}
function b1t1(){
  textAlign(CENTER);
  background(6, 12, 233);
  btn1.remove();
  ebtn1.remove();
  btn2.remove();
  ebtn2.remove();
  btn3.remove();
  ebtn3.remove();
  btn4.remove();
  ebtn4.remove();
  btn5.remove();
  ebtn5.remove();
  btn6.remove();
  ebtn6.remove();
  topicA.remove();
  oneA.remove();
  twoA.remove();
  threeA.remove();
  fourA.remove();
  fiveA.remove();
  bbtn.remove();
  nbtn.remove();
  mmbtn.remove();
  
  //reposition buttons on the bottom
  /*
  bbtn = createButton("Back");
  bbtn.mouseClicked(openBoard6);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  */
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t2, saved);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 1:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[0] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[1] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[2] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[3] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[4] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[5] = fiveA.value();
}
function b1t2(){
  textAlign(CENTER);
  background(6, 12, 233);
  topicA.remove()
  btn1.remove();
  oneA.remove();
  btn2.remove();
  twoA.remove();
  btn3.remove();
  threeA.remove();
  btn4.remove();
  fourA.remove();
  btn5.remove();
  fiveA.remove();
  btn6.remove();
  nbtn.remove();
  mmbtn.remove();
  
  //reposition buttons on the bottom

  bbtn = createButton("Back");
  bbtn.mouseClicked(b1t1);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t3);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 2:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[6] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[7] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[8] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[9] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[10] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[11] = fiveA.value();
}
function b1t3(){
  textAlign(CENTER);
  background(6, 12, 233);
  topicA.remove()
  btn1.remove();
  oneA.remove();
  btn2.remove();
  twoA.remove();
  btn3.remove();
  threeA.remove();
  btn4.remove();
  fourA.remove();
  btn5.remove();
  fiveA.remove();
  btn6.remove();
  nbtn.remove();
  bbtn.remove();
  mmbtn.remove();
  
  //reposition buttons on the bottom

  bbtn = createButton("Back");
  bbtn.mouseClicked(b1t2);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t4);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 3:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[12] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[13] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[14] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[15] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[16] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[17] = fiveA.value();
}
function b1t4(){
  textAlign(CENTER);
  background(6, 12, 233);
  topicA.remove()
  btn1.remove();
  oneA.remove();
  btn2.remove();
  twoA.remove();
  btn3.remove();
  threeA.remove();
  btn4.remove();
  fourA.remove();
  btn5.remove();
  fiveA.remove();
  btn6.remove();
  nbtn.remove();
  bbtn.remove();
  mmbtn.remove();
  
  //reposition buttons on the bottom

  bbtn = createButton("Back");
  bbtn.mouseClicked(b1t3);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t5);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 4:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[18] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[19] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[20] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[21] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[22] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[23] = fiveA.value();
}
function b1t5(){
  textAlign(CENTER);
  background(6, 12, 233);
  topicA.remove()
  btn1.remove();
  oneA.remove();
  btn2.remove();
  twoA.remove();
  btn3.remove();
  threeA.remove();
  btn4.remove();
  fourA.remove();
  btn5.remove();
  fiveA.remove();
  btn6.remove();
  nbtn.remove();
  bbtn.remove();
  mmbtn.remove();
  
  //reposition buttons on the bottom

  bbtn = createButton("Back");
  bbtn.mouseClicked(b1t4);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px")
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);
  mmbtn.style("font-family", myFont);
  mmbtn.style("font-size", "15px")
  
  
  dbtn = createButton("Done");
  dbtn.mouseClicked(output, mainMenu);
  dbtn.size(100, 40);
  dbtn.position(265, 355);
  dbtn.style("font-family", myFont);
  dbtn.style("font-size", "20px")
  
  
  textSize(50);
  title = text(b1.name, 200, 50);
  textSize(25);
  topic = text("Topic 5:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  b1.questions[24] = topicA.value();
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  b1.questions[25] = oneA.value();
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  b1.questions[26] = twoA.value();
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  b1.questions[27] = threeA.value();
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  b1.questions[28] = fourA.value();
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
  b1.questions[29] = fiveA.value();
}
function eb2t1(){
  
}
function eb3t1(){
  
}
function eb4t1(){
  
}
function eb5t1(){
  
}
function eb6t1(){
  
}
function openBoard1(num){
  //make nice looking gui to play the game(1920x1080)
}
function openBoard2(num){
  background(0);
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
  btn5.remove();
  btn6.remove();
  
}
function openBoard3(num){
  background(0);
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
  btn5.remove();
  btn6.remove();
  
}
function openBoard4(num){
  background(0);
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
  btn5.remove();
  btn6.remove();
  
}
function openBoard5(num){
  background(0);
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
  btn5.remove();
  btn6.remove();
  
}
function openBoard6(num){
  background(0);
  btn1.remove();
  btn2.remove();
  btn3.remove();
  btn4.remove();
  btn5.remove();
  btn6.remove();
  
}
class Board{
  constructor(name, questions){
    this.name = name;
    this.questions = questions
    
  }
  
}