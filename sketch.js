let topicA;
let fwriter;
var myFont, board1, board2, board3, board4, board5, board6;

function preload(){
  myFont = loadFont('geoparody rg.otf');
  board1 = loadStrings("Board1.txt");
  board2 = loadStrings("Board2.txt");
  board3 = loadStrings("Board3.txt");
  board4 = loadStrings("Board4.txt");
  board5 = loadStrings("Board5.txt");
  board6 = loadStrings("Board6.txt");
}
function setup() {
  createCanvas(400, 400);
  textFont(myFont);
  writer1 = createWriter('Board1.txt');
  
  b1 = new Board(board1[0], [board1[1], board1[2], board1[3], board1[4], board1[5], board1[6], board1[7], board1[8], board1[9], board1[10], board1[11], board1[12], board1[13], board1[14], board1[15], board1[16], board1[17], board1[18], board1[19], board1[20], board1[21], board1[22], board1[23], board1[24], board1[25], board1[26], board1[27], board1[28], board1[29], board1[30]]);
  b2 = new Board(board2[0], [board2[1], board2[2], board2[3], board2[4], board2[5], board2[6], board2[7], board2[8], board2[9], board2[10], board2[11], board2[12], board2[13], board2[14], board2[15], board2[16], board2[17], board2[18], board2[19], board2[20], board2[21], board2[22], board2[23], board2[24], board2[25], board2[26], board2[27], board2[28], board2[29], board2[30]]);
  b3 = new Board(board3[0], [board3[1], board3[2], board3[3], board3[4], board3[5], board3[6], board3[7], board3[8], board3[9], board3[10], board3[11], board3[12], board3[13], board3[14], board3[15], board3[16], board3[17], board3[18], board3[19], board3[20], board3[21], board3[22], board3[23], board3[24], board3[25], board3[26], board3[27], board3[28], board3[29], board3[30]]);
  b4 = new Board(board4[0], [board4[1], board4[2], board4[3], board4[4], board4[5], board4[6], board4[7], board4[8], board4[9], board4[10], board4[11], board4[12], board4[13], board4[14], board4[15], board4[16], board4[17], board4[18], board4[19], board4[20], board4[21], board4[22], board4[23], board4[24], board4[25], board4[26], board4[27], board4[28], board4[29], board4[30]]);
  b5 = new Board(board5[0], [board5[1], board5[2], board5[3], board5[4], board5[5], board5[6], board5[7], board5[8], board5[9], board5[10], board5[11], board5[12], board5[13], board5[14], board5[15], board5[16], board5[17], board5[18], board5[19], board5[20], board5[21], board5[22], board5[23], board5[24], board5[25], board5[26], board5[27], board5[28], board5[29], board5[30]]);
  b6 = new Board(board6[0], [board6[1], board6[2], board6[3], board6[4], board6[5], board6[6], board6[7], board6[8], board6[9], board6[10], board6[11], board6[12], board6[13], board6[14], board6[15], board6[16], board6[17], board6[18], board6[19], board6[20], board6[21], board6[22], board6[23], board6[24], board6[25], board6[26], board6[27], board6[28], board6[29], board6[30]]);
  
  
  mainMenu();
  output();
  
  
}
//loop
function draw() {
  
}

function output(){
  
  for(let i=0;i<31;i++){
    print(board1[i]);
  }
}

function mainMenu(){
  if(typeof btn1 != "undefined"){
    btn1.remove();
  }
  if(typeof ebtn1 != "undefined"){
    ebtn1.remove();
  }
  if(typeof btn2 != "undefined"){
    btn2.remove();
  }
  if(typeof ebtn2 != "undefined"){
    ebtn2.remove();
  }
  if(typeof btn3 != "undefined"){
    btn3.remove();
  }
  if(typeof ebtn3 != "undefined"){
    ebtn3.remove();
  }
  if(typeof btn4 != "undefined"){
    btn4.remove();
  }
  if(typeof ebtn4 != "undefined"){
    ebtn4.remove();
  }
  if(typeof btn5 != "undefined"){
    btn5.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn5.remove();
  }
  if(typeof btn6 != "undefined"){
    btn6.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn6.remove();
  }
  if(typeof topicA != "undefined"){
    topicA.remove();
  }
  if(typeof oneA != "undefined"){
    oneA.remove();
  }
  if(typeof twoA != "undefined"){
    twoA.remove();
  }
  if(typeof threeA != "undefined"){
    threeA.remove();
  }
  if(typeof fourA != "undefined"){
    fourA.remove();
  }
  if(typeof fiveA != "undefined"){
    fiveA.remove();
  }
  if(typeof bbtn != "undefined"){
    bbtn.remove();
  }
  if(typeof nbtn != "undefined"){
    nbtn.remove();
  }
  if(typeof mmbtn != "undefined"){
    mmbtn.remove();
  }
  
  if(typeof bbtn != "undefined"){
    bbtn.remove();
  }
  if(typeof dbtn != "undefined"){
    dbtn.remove();
  }
  if(typeof nameA != "undefined"){
    nameA.remove();
  }
  
  background(6, 12, 233);
  btn1 = createButton(board1[0]);
  btn1.mouseClicked(openBoard1);
  btn1.size(125, 50);
  btn1.position(20, 100);
  btn1.style("font-family", myFont);
  btn1.style("font-size", "30px")
  
  ebtn1 = createButton("edit");
  ebtn1.mouseClicked(nameMenu);
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
function saved(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fiveA.value());
  
  writer1.close();
  mainMenu();
}
function nameMenu(){
  if(typeof btn1 != "undefined"){
    btn1.remove();
  }
  if(typeof ebtn1 != "undefined"){
    ebtn1.remove();
  }
  if(typeof btn2 != "undefined"){
    btn2.remove();
  }
  if(typeof ebtn2 != "undefined"){
    ebtn2.remove();
  }
  if(typeof btn3 != "undefined"){
    btn3.remove();
  }
  if(typeof ebtn3 != "undefined"){
    ebtn3.remove();
  }
  if(typeof btn4 != "undefined"){
    btn4.remove();
  }
  if(typeof ebtn4 != "undefined"){
    ebtn4.remove();
  }
  if(typeof btn5 != "undefined"){
    btn5.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn5.remove();
  }
  if(typeof btn6 != "undefined"){
    btn6.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn6.remove();
  }
  if(typeof topicA != "undefined"){
    topicA.remove();
  }
  if(typeof oneA != "undefined"){
    oneA.remove();
  }
  if(typeof twoA != "undefined"){
    twoA.remove();
  }
  if(typeof threeA != "undefined"){
    threeA.remove();
  }
  if(typeof fourA != "undefined"){
    fourA.remove();
  }
  if(typeof fiveA != "undefined"){
    fiveA.remove();
  }
  if(typeof bbtn != "undefined"){
    bbtn.remove();
  }
  if(typeof nbtn != "undefined"){
    nbtn.remove();
  }
  if(typeof mmbtn != "undefined"){
    mmbtn.remove();
  }
  if(typeof dbtn != "undefined"){
    dbtn.remove();
  }
  
  textAlign(CENTER);
  background(6, 12, 233);
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  name = text("Board Name:", 100, 100);
  nameA = createInput();
  nameA.position(200, 83);
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t1);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
}
function b1t1(){
  writer1.write(nameA.value());
  textAlign(CENTER);
  background(6, 12, 233);
  if(typeof btn1 != "undefined"){
    btn1.remove();
  }
  if(typeof ebtn1 != "undefined"){
    ebtn1.remove();
  }
  if(typeof btn2 != "undefined"){
    btn2.remove();
  }
  if(typeof ebtn2 != "undefined"){
    ebtn2.remove();
  }
  if(typeof btn3 != "undefined"){
    btn3.remove();
  }
  if(typeof ebtn3 != "undefined"){
    ebtn3.remove();
  }
  if(typeof btn4 != "undefined"){
    btn4.remove();
  }
  if(typeof ebtn4 != "undefined"){
    ebtn4.remove();
  }
  if(typeof btn5 != "undefined"){
    btn5.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn5.remove();
  }
  if(typeof btn6 != "undefined"){
    btn6.remove();
  }
  if(typeof ebtn5 != "undefined"){
    ebtn6.remove();
  }
  if(typeof topicA != "undefined"){
    topicA.remove();
  }
  if(typeof oneA != "undefined"){
    oneA.remove();
  }
  if(typeof twoA != "undefined"){
    twoA.remove();
  }
  if(typeof threeA != "undefined"){
    threeA.remove();
  }
  if(typeof fourA != "undefined"){
    fourA.remove();
  }
  if(typeof fiveA != "undefined"){
    fiveA.remove();
  }
  if(typeof bbtn != "undefined"){
    bbtn.remove();
  }
  if(typeof nbtn != "undefined"){
    nbtn.remove();
  }
  if(typeof mmbtn != "undefined"){
    mmbtn.remove();
  }
  
  
  
  //reposition buttons on the bottom
  
  bbtn = createButton("Back");
  bbtn.mouseClicked(nameMenu);
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
  nbtn.mouseClicked(b1t2);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 1:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
}
function b1t2(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fiveA.value());
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
  bbtn.remove();
  
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
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 2:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
}
function b1t3(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fiveA.value());
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
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 3:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
}
function b1t4(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fiveA.value());
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
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 4:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
}
function b1t5(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fiveA.value());
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
  dbtn.mouseClicked(saved);
  dbtn.size(100, 40);
  dbtn.position(265, 355);
  dbtn.style("font-family", myFont);
  dbtn.style("font-size", "20px")
  
  
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 5:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  one = text("100:", 100, 150)
  oneA = createInput();
  oneA.position(200, 132);
  two = text("200:", 100, 200)
  twoA = createInput();
  twoA.position(200, 181);
  three = text("300:", 100, 250);
  threeA = createInput();
  threeA.position(200, 231);
  four = text("400:", 100, 300)
  fourA = createInput();
  fourA.position(200, 281);
  five = text("500:", 100, 350)
  fiveA = createInput();
  fiveA.position(200, 331);
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