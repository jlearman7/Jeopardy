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
  col =color(6, 12, 233);
  createCanvas(400, 400);
  textFont(myFont);
  writer1 = createWriter('Board1.txt');
  
  b1 = new Board(board1[0], [board1[1], board1[2], board1[3], board1[4], board1[5], board1[6], board1[7], board1[8], board1[9], board1[10], board1[11], board1[12], board1[13], board1[14], board1[15], board1[16], board1[17], board1[18], board1[19], board1[20], board1[21], board1[22], board1[23], board1[24], board1[25], board1[26], board1[27], board1[28], board1[29], board1[30], board1[31], board1[32], board1[33], board1[34], board1[35], board1[36]]);
  b2 = new Board(board2[0], [board2[1], board2[2], board2[3], board2[4], board2[5], board2[6], board2[7], board2[8], board2[9], board2[10], board2[11], board2[12], board2[13], board2[14], board2[15], board2[16], board2[17], board2[18], board2[19], board2[20], board2[21], board2[22], board2[23], board2[24], board2[25], board2[26], board2[27], board2[28], board2[29], board2[30], board2[31], board2[32], board2[33], board2[34], board2[35], board2[36]]);
  b3 = new Board(board3[0], [board3[1], board3[2], board3[3], board3[4], board3[5], board3[6], board3[7], board3[8], board3[9], board3[10], board3[11], board3[12], board3[13], board3[14], board3[15], board3[16], board3[17], board3[18], board3[19], board3[20], board3[21], board3[22], board3[23], board3[24], board3[25], board3[26], board3[27], board3[28], board3[29], board3[30], board3[31], board3[32], board3[33], board3[34], board3[35], board3[36]]);
  b4 = new Board(board4[0], [board4[1], board4[2], board4[3], board4[4], board4[5], board4[6], board4[7], board4[8], board4[9], board4[10], board4[11], board4[12], board4[13], board4[14], board4[15], board4[16], board4[17], board4[18], board4[19], board4[20], board4[21], board4[22], board4[23], board4[24], board4[25], board4[26], board4[27], board4[28], board4[29], board4[30], board4[31], board4[32], board4[33], board4[34], board4[35], board4[36]]);
  b5 = new Board(board5[0], [board5[1], board5[2], board5[3], board5[4], board5[5], board5[6], board5[7], board5[8], board5[9], board5[10], board5[11], board5[12], board5[13], board5[14], board5[15], board5[16], board5[17], board5[18], board5[19], board5[20], board5[21], board5[22], board5[23], board5[24], board5[25], board5[26], board5[27], board5[28], board5[29], board5[30], board5[31], board5[32], board5[33], board5[34], board5[35], board5[36]]);
  b6 = new Board(board6[0], [board6[1], board6[2], board6[3], board6[4], board6[5], board6[6], board6[7], board6[8], board6[9], board6[10], board6[11], board6[12], board6[13], board6[14], board6[15], board6[16], board6[17], board6[18], board6[19], board6[20], board6[21], board6[22], board6[23], board6[24], board6[25], board6[26], board6[27], board6[28], board6[29], board6[30], board6[31], board6[32], board6[33], board6[34], board6[35], board6[36]]);
  
  
  mainMenu();
  openBoard1();
  
  
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
  
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(b1t6);
  nbtn.size(100, 40);
  nbtn.position(265, 355);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px")
  
  
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
function b1t6(){
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
  topic = text("Topic 6:", 100, 100);
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
function openBoard1(){
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
  createCanvas(1920, 1080);
  background(0);
  
  
  t1 = createButton(b1.questions[0]);
  //t1.mouseClicked(b1t4);
  t1.size(315, 175);
  t1.position(5, 5);
  t1.style('color:#FFCC00');
  t1.style("font-family", myFont);
  t1.style("font-size", "100px");
  t1.style("background-color",col);
  
  t2 = createButton(b1.questions[6]);
  t2.size(315, 175);
  t2.position(325, 5);
  t2.style('color:#FFCC00');
  t2.style('font-family: myFont');
  t2.style("font-family", myFont);
  t2.style("font-size", "100px");
  t2.style("background-color",col);
  
  t3 = createButton(b1.questions[12]);
  t3.size(315, 175);
  t3.position(645, 5);
  t3.style('color:#FFCC00');
  t3.style('font-family: myFont');
  t3.style("font-family", myFont);
  t3.style("font-size", "100px");
  t3.style("background-color",col);
  
  t4 = createButton(b1.questions[18]);
  t4.size(315, 175);
  t4.position(965, 5);
  t4.style('color:#FFCC00');
  t4.style('font-family: myFont');
  t4.style("font-family", myFont);
  t4.style("font-size", "100px");
  t4.style("background-color",col);
  
  t5 = createButton(b1.questions[24]);
  t5.size(315, 175);
  t5.position(1285, 5);
  t5.style('color:#FFCC00');
  t5.style('font-family: myFont');
  t5.style("font-family", myFont);
  t5.style("font-size", "100px");
  t5.style("background-color",col);
  
  t6 = createButton(b1.questions[30]);
  t6.size(315, 175);
  t6.position(1605, 5);
  t6.style('color:#FFCC00');
  t6.style('font-family: myFont');
  t6.style("font-family", myFont);
  t6.style("font-size", "100px");
  t6.style("background-color",col);
  
  t11 = createButton("$100");
  t11.mouseClicked(b1t11);
  t11.size(315, 175);
  t11.position(5, 190);
  t11.style('color:#FFCC00');
  t11.style('font-family: myFont');
  t11.style("font-size", "100px");
  t11.style("background-color", col);
  
  t12 = createButton("$200");
  t12.mouseClicked(b1t11);
  t12.style('color:#FFCC00');
  t12.style('font-family: myFont');
  t12.size(315, 175);
  t12.position(5, 370);
  t12.style("font-family", myFont);
  t12.style("font-size", "100px");
  t12.style("background-color",col);
  
  t13 = createButton("$300");
  t13.mouseClicked(b1t11);
  t13.style('color:#FFCC00');
  t13.style('font-family: myFont');
  t13.size(315, 175);
  t13.position(5, 550);
  t13.style("font-family", myFont);
  t13.style("font-size", "100px");
  t13.style("background-color",col);
  
  t14 = createButton("$400");
  t14.mouseClicked(b1t11);
  t14.style('color:#FFCC00');
  t14.style('font-family: myFont');
  t14.size(315, 175);
  t14.position(5, 730);
  t14.style("font-family", myFont);
  t14.style("font-size", "100px");
  t14.style("background-color",col);
  
  t15 = createButton("$500");
  t15.mouseClicked(b1t11);
  t15.style('color:#FFCC00');
  t15.style('font-family: myFont');
  t15.size(315, 175);
  t15.position(5, 910);
  t15.style("font-family", myFont);
  t15.style("font-size", "100px");
  t15.style("background-color",col);
  
  t21 = createButton("$100");
  t21.mouseClicked(b1t11);
  t21.size(315, 175);
  t21.position(325, 190);
  t21.style('color:#FFCC00');
  t21.style('font-family: myFont');
  t21.style("font-size", "100px");
  t21.style("background-color", col);
  
  t22 = createButton("$200");
  t22.mouseClicked(b1t11);
  t22.style('color:#FFCC00');
  t22.style('font-family: myFont');
  t22.size(315, 175);
  t22.position(325, 370);
  t22.style("font-family", myFont);
  t22.style("font-size", "100px");
  t22.style("background-color",col);
  
  t23 = createButton("$300");
  t23.mouseClicked(b1t11);
  t23.style('color:#FFCC00');
  t23.style('font-family: myFont');
  t23.size(315, 175);
  t23.position(325, 550);
  t23.style("font-family", myFont);
  t23.style("font-size", "100px");
  t23.style("background-color",col);
  
  t24 = createButton("$400");
  t24.mouseClicked(b1t11);
  t24.style('color:#FFCC00');
  t24.style('font-family: myFont');
  t24.size(315, 175);
  t24.position(325, 730);
  t24.style("font-family", myFont);
  t24.style("font-size", "100px");
  t24.style("background-color",col);
  
  t25 = createButton("$500");
  t25.mouseClicked(b1t11);
  t25.style('color:#FFCC00');
  t25.style('font-family: myFont');
  t25.size(315, 175);
  t25.position(325, 910);
  t25.style("font-family", myFont);
  t25.style("font-size", "100px");
  t25.style("background-color",col);
  
  t31 = createButton("$100");
  t31.mouseClicked(b1t11);
  t31.size(315, 175);
  t31.position(645, 190);
  t31.style('color:#FFCC00');
  t31.style('font-family: myFont');
  t31.style("font-size", "100px");
  t31.style("background-color", col);
  
  t32 = createButton("$200");
  t32.mouseClicked(b1t11);
  t32.style('color:#FFCC00');
  t32.style('font-family: myFont');
  t32.size(315, 175);
  t32.position(645, 370);
  t32.style("font-family", myFont);
  t32.style("font-size", "100px");
  t32.style("background-color",col);

  t33 = createButton("$300");
  t33.mouseClicked(b1t11);
  t33.style('color:#FFCC00');
  t33.style('font-family: myFont');
  t33.size(315, 175);
  t33.position(645, 550);
  t33.style("font-family", myFont);
  t33.style("font-size", "100px");
  t33.style("background-color",col);
  
  t34 = createButton("$400");
  t34.mouseClicked(b1t11);
  t34.style('color:#FFCC00');
  t34.style('font-family: myFont');
  t34.size(315, 175);
  t34.position(645, 730);
  t34.style("font-family", myFont);
  t34.style("font-size", "100px");
  t34.style("background-color",col);
  
  t35 = createButton("$500");
  t35.mouseClicked(b1t11);
  t35.style('color:#FFCC00');
  t35.style('font-family: myFont');
  t35.size(315, 175);
  t35.position(645, 910);
  t35.style("font-family", myFont);
  t35.style("font-size", "100px");
  t35.style("background-color",col);
  
  t41 = createButton("$100");
  t41.mouseClicked(b1t11);
  t41.size(315, 175);
  t41.position(965, 190);
  t41.style('color:#FFCC00');
  t41.style('font-family: myFont');
  t41.style("font-size", "100px");
  t41.style("background-color", col);
  
  t42 = createButton("$200");
  t42.mouseClicked(b1t11);
  t42.style('color:#FFCC00');
  t42.style('font-family: myFont');
  t42.size(315, 175);
  t42.position(965, 370);
  t42.style("font-family", myFont);
  t42.style("font-size", "100px");
  t42.style("background-color",col);
  
  t43 = createButton("$300");
  t43.mouseClicked(b1t11);
  t43.style('color:#FFCC00');
  t43.style('font-family: myFont');
  t43.size(315, 175);
  t43.position(965, 550);
  t43.style("font-family", myFont);
  t43.style("font-size", "100px");
  t43.style("background-color",col);
  
  t44 = createButton("$400");
  t44.mouseClicked(b1t11);
  t44.style('color:#FFCC00');
  t44.style('font-family: myFont');
  t44.size(315, 175);
  t44.position(965, 730);
  t44.style("font-family", myFont);
  t44.style("font-size", "100px");
  t44.style("background-color",col);
  
  t45 = createButton("$500");
  t45.mouseClicked(b1t11);
  t45.style('color:#FFCC00');
  t45.style('font-family: myFont');
  t45.size(315, 175);
  t45.position(965, 910);
  t45.style("font-family", myFont);
  t45.style("font-size", "100px");
  t45.style("background-color",col);
  
  t51 = createButton("$100");
  t51.mouseClicked(b1t11);
  t51.size(315, 175);
  t51.position(1285, 190);
  t51.style('color:#FFCC00');
  t51.style('font-family: myFont');
  t51.style("font-size", "100px");
  t51.style("background-color", col);
  
  t52 = createButton("$200");
  t52.mouseClicked(b1t11);
  t52.style('color:#FFCC00');
  t52.style('font-family: myFont');
  t52.size(315, 175);
  t52.position(1285, 370);
  t52.style("font-family", myFont);
  t52.style("font-size", "100px");
  t52.style("background-color",col);
  
  t53 = createButton("$300");
  t53.mouseClicked(b1t11);
  t53.style('color:#FFCC00');
  t53.style('font-family: myFont');
  t53.size(315, 175);
  t53.position(1285, 550);
  t53.style("font-family", myFont);
  t53.style("font-size", "100px");
  t53.style("background-color",col);
  
  t54 = createButton("$400");
  t54.mouseClicked(b1t11);
  t54.style('color:#FFCC00');
  t54.style('font-family: myFont');
  t54.size(315, 175);
  t54.position(1285, 730);
  t54.style("font-family", myFont);
  t54.style("font-size", "100px");
  t54.style("background-color",col);
  
  t55 = createButton("$500");
  t55.mouseClicked(b1t11);
  t55.style('color:#FFCC00');
  t55.style('font-family: myFont');
  t55.size(315, 175);
  t55.position(1285, 910);
  t55.style("font-family", myFont);
  t55.style("font-size", "100px");
  t55.style("background-color",col);

  t61 = createButton("$100");
  t61.mouseClicked(b1t11);
  t61.size(315, 175);
  t61.position(1605, 190);
  t61.style('color:#FFCC00');
  t61.style('font-family: myFont');
  t61.style("font-size", "100px");
  t61.style("background-color", col);
  
  t62 = createButton("$200");
  t62.mouseClicked(b1t11);
  t62.style('color:#FFCC00');
  t62.style('font-family: myFont');
  t62.size(315, 175);
  t62.position(1605, 370);
  t62.style("font-family", myFont);
  t62.style("font-size", "100px");
  t62.style("background-color",col);

  t63 = createButton("$300");
  t63.mouseClicked(b1t11);
  t63.style('color:#FFCC00');
  t63.style('font-family: myFont');
  t63.size(315, 175);
  t63.position(1605, 550);
  t63.style("font-family", myFont);
  t63.style("font-size", "100px");
  t63.style("background-color",col);

  t64 = createButton("$400");
  t64.mouseClicked(b1t11);
  t64.style('color:#FFCC00');
  t64.style('font-family: myFont');
  t64.size(315, 175);
  t64.position(1605, 730);
  t64.style("font-family", myFont);
  t64.style("font-size", "100px");
  t64.style("background-color",col);

  t65 = createButton("$500");
  t65.mouseClicked(b1t11);
  t65.style('color:#FFCC00');
  t65.style('font-family: myFont');
  t65.size(315, 175);
  t65.position(1605, 910);
  t65.style("font-family", myFont);
  t65.style("font-size", "100px");
  t65.style("background-color",col);
}
function b1t11(){
  
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