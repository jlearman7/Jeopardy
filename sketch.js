let topicA, gridSpacingx, gridSpacingy, lastMethod;
p1NameFontSize = "50px";
p2NameFontSize = "50px";
p3NameFontSize = "50px"
let value = 0;
let fontSize = '100px';
let textFontSize = 50;
let unused = '#FFCC00';
let used = '#7e8185';

let tCol = unused;
let t11Col = unused;
let t12Col = unused;
let t13Col = unused;
let t14Col = unused;
let t15Col = unused;
let t21Col = unused;
let t22Col = unused;
let t23Col = unused;
let t24Col = unused;
let t25Col = unused;
let t31Col = unused;
let t32Col = unused;
let t33Col = unused;
let t34Col = unused;
let t35Col = unused;
let t41Col = unused;
let t42Col = unused;
let t43Col = unused;
let t44Col = unused;
let t45Col = unused;
let t51Col = unused;
let t52Col = unused;
let t53Col = unused;
let t54Col = unused;
let t55Col = unused;
let t61Col = unused;
let t62Col = unused;
let t63Col = unused;
let t64Col = unused;
let t65Col = unused;

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
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(6,12,233);
  gridSpacingx = (windowWidth -35)/6;
  gridSpacingy = (windowHeight-40)/7;
  if(windowWidth<700){
    fontSize = '35px';
  }
  else if(windowWidth<1000){
    fontSize = '50px'
  }
  else if(windowWidth<1800){
    fontSize = '65px'  
  }
  
  
  
}

function setup() {
  if(getItem('lastMethod') == 'nameMenu'){
    nameMenu();
  }
  storeItem('tCol',unused);
  storeItem('t11Col',unused);
  storeItem('t12Col',unused);
  storeItem('t13Col',unused);
  storeItem('t14Col',unused);
  storeItem('t15Col',unused);
  storeItem('t21Col',unused);
  storeItem('t22Col',unused);
  storeItem('t23Col',unused);
  storeItem('t24Col',unused);
  storeItem('t25Col',unused);
  storeItem('t31Col',unused);
  storeItem('t32Col',unused);
  storeItem('t33Col',unused);
  storeItem('t34Col',unused);
  storeItem('t35Col',unused);
  storeItem('t41Col',unused);
  storeItem('t42Col',unused);
  storeItem('t43Col',unused);
  storeItem('t44Col',unused);
  storeItem('t45Col',unused);
  storeItem('t51Col',unused);
  storeItem('t52Col',unused);
  storeItem('t53Col',unused);
  storeItem('t54Col',unused);
  storeItem('t55Col',unused);
  storeItem('t61Col',unused);
  storeItem('t62Col',unused);
  storeItem('t63Col',unused);
  storeItem('t64Col',unused);
  storeItem('t65Col',unused);

  
  col = color(6, 12, 233);
  createCanvas(400, 400);
  background(6, 12, 233);
  textFont(myFont);
  writer1 = createWriter('Board1.txt');
  
  p1 = new player("player 1");
  p2 = new player("player 2");
  p3 = new player("player 3");
  
  
  
  b1 = new Board(board1[0], [board1[1], board1[2], board1[3], board1[4], board1[5], board1[6], board1[7], board1[8], board1[9], board1[10], board1[11], board1[12], board1[13], board1[14], board1[15], board1[16], board1[17], board1[18], board1[19], board1[20], board1[21], board1[22], board1[23], board1[24], board1[25], board1[26], board1[27], board1[28], board1[29], board1[30], board1[31], board1[32], board1[33], board1[34], board1[35], board1[36], board1[37], board1[38], board1[39], board1[40], board1[41], board1[42], board1[43], board1[44], board1[45], board1[46], board1[47], board1[48], board1[49], board1[50], board1[51], board1[52], board1[53], board1[54], board1[55], board1[56], board1[57], board1[58], board1[59], board1[60], board1[61], board1[62], board1[63], board1[64], board1[65], board1[66], board1[67]]);
  b2 = new Board(board2[0], [board2[1], board2[2], board2[3], board2[4], board2[5], board2[6], board2[7], board2[8], board2[9], board2[10], board2[11], board2[12], board2[13], board2[14], board2[15], board2[16], board2[17], board2[18], board2[19], board2[20], board2[21], board2[22], board2[23], board2[24], board2[25], board2[26], board2[27], board2[28], board2[29], board2[30], board2[31], board2[32], board2[33], board2[34], board2[35], board2[36], board2[37], board2[38], board2[39], board2[40], board2[41], board2[42], board2[43], board2[44], board2[45], board2[46], board2[47], board2[48], board2[49], board2[50], board2[51], board2[52], board2[53], board2[54], board2[55], board2[56], board2[57], board2[58], board2[59], board2[60], board2[61], board2[62], board2[63], board2[64], board2[65], board2[66], board2[67]]);
  b3 = new Board(board3[0], [board3[1], board3[2], board3[3], board3[4], board3[5], board3[6], board3[7], board3[8], board3[9], board3[10], board3[11], board3[12], board3[13], board3[14], board3[15], board3[16], board3[17], board3[18], board3[19], board3[20], board3[21], board3[22], board3[23], board3[24], board3[25], board3[26], board3[27], board3[28], board3[29], board3[30], board3[31], board3[32], board3[33], board3[34], board3[35], board3[36], board3[37], board3[38], board3[39], board3[40], board3[41], board3[42], board3[43], board3[44], board3[45], board3[46], board3[47], board3[48], board3[49], board3[50], board3[51], board3[52], board3[53], board3[54], board3[55], board3[56], board3[57], board3[58], board3[59], board3[60], board3[61], board3[62], board3[63], board3[64], board3[65], board3[66], board3[67]]);
  b4 = new Board(board4[0], [board4[1], board4[2], board4[3], board4[4], board4[5], board4[6], board4[7], board4[8], board4[9], board4[10], board4[11], board4[12], board4[13], board4[14], board4[15], board4[16], board4[17], board4[18], board4[19], board4[20], board4[21], board4[22], board4[23], board4[24], board4[25], board4[26], board4[27], board4[28], board4[29], board4[30], board4[31], board4[32], board4[33], board4[34], board4[35], board4[36], board4[37], board4[38], board4[39], board4[40], board4[41], board4[42], board4[43], board4[44], board4[45], board4[46], board4[47], board4[48], board4[49], board4[50], board4[51], board4[52], board4[53], board4[54], board4[55], board4[56], board4[57], board4[58], board4[59], board4[60], board4[61], board4[62], board4[63], board4[64], board4[65], board4[66], board4[67]]);
  b5 = new Board(board5[0], [board5[1], board5[2], board5[3], board5[4], board5[5], board5[6], board5[7], board5[8], board5[9], board5[10], board5[11], board5[12], board5[13], board5[14], board5[15], board5[16], board5[17], board5[18], board5[19], board5[20], board5[21], board5[22], board5[23], board5[24], board5[25], board5[26], board5[27], board5[28], board5[29], board5[30], board5[31], board5[32], board5[33], board5[34], board5[35], board5[36], board5[37], board5[38], board5[39], board5[40], board5[41], board5[42], board5[43], board5[44], board5[45], board5[46], board5[47], board5[48], board5[49], board5[50], board5[51], board5[52], board5[53], board5[54], board5[55], board5[56], board5[57], board5[58], board5[59], board5[60], board5[61], board5[62], board5[63], board5[64], board5[65], board5[66], board5[67]]);
  b6 = new Board(board6[0], [board6[1], board6[2], board6[3], board6[4], board6[5], board6[6], board6[7], board6[8], board6[9], board6[10], board6[11], board6[12], board6[13], board6[14], board6[15], board6[16], board6[17], board6[18], board6[19], board6[20], board6[21], board6[22], board6[23], board6[24], board6[25], board6[26], board6[27], board6[28], board6[29], board6[30], board6[31], board6[32], board6[33], board6[34], board6[35], board6[36], board6[37], board6[38], board6[39], board6[40], board6[41], board6[42], board6[43], board6[44], board6[45], board6[46], board6[47], board6[48], board6[49], board6[50], board6[51], board6[52], board6[53], board6[54], board6[55], board6[56], board6[57], board6[58], board6[59], board6[60], board6[61], board6[62], board6[63], board6[64], board6[65], board6[66], board6[67]]);
  
  windowResized();
  
  mainMenu();
  
  
}
//loop
function draw() {
  if(keyIsPressed==true && keyCode === ENTER){
       if(getItem('lastMethod')=="openBoard1"){
            openBoard1();
          }
     }
  else if(keyIsPressed==true && keyCode === ESCAPE){
    mainMenu();
  }
}

function output(){
  
  for(let i=0;i<31;i++){
    print(board1[i]);
  }
}

function mainMenu(){
  background(6, 12, 233);
  reset();
  
  btn1 = createButton(board1[0]);
  btn1.mouseClicked(getPlayers);
  btn1.size(125, 50);
  btn1.position((windowWidth/2)-185, 100);
  btn1.style("font-family", myFont);
  btn1.style("font-size", "30px")
  
  ebtn1 = createButton("edit");
  ebtn1.mouseClicked(nameMenu);
  ebtn1.size(50, 50);
  ebtn1.position((windowWidth/2)-60, 100);
  ebtn1.style("font-family", myFont);
  ebtn1.style("font-size", "25px");
  
  btn2 = createButton(b2.name);
  btn2.mouseClicked(openBoard2);
  btn2.size(125, 50);
  btn2.position((windowWidth/2)-185, 175);
  btn2.style("font-family", myFont);
  btn2.style("font-size", "30px")
  
  ebtn2 = createButton("edit");
  ebtn2.mouseClicked(eb2t1);
  ebtn2.size(50, 50);
  ebtn2.position((windowWidth/2)-60, 175);
  ebtn2.style("font-family", myFont);
  ebtn2.style("font-size", "25px")
  
  btn3 = createButton(b3.name);
  btn3.mouseClicked(openBoard3);
  btn3.size(125, 50);
  btn3.position((windowWidth/2)-185, 250);
  btn3.style("font-family", myFont);
  btn3.style("font-size", "30px")
  
  ebtn3 = createButton("edit");
  ebtn3.mouseClicked(eb3t1);
  ebtn3.size(50, 50);
  ebtn3.position((windowWidth/2)-60, 250);
  ebtn3.style("font-family", myFont);
  ebtn3.style("font-size", "25px")
  
  btn4 = createButton(b4.name);
  btn4.mouseClicked(openBoard4);
  btn4.size(125, 50);
  btn4.position((windowWidth/2)+5, 100);
  btn4.style("font-family", myFont);
  btn4.style("font-size", "30px")
  
  ebtn4 = createButton("edit");
  ebtn4.mouseClicked(eb4t1);
  ebtn4.size(50, 50);
  ebtn4.position((windowWidth/2)+130, 100);
  ebtn4.style("font-family", myFont);
  ebtn4.style("font-size", "25px")
  
  btn5 = createButton(b5.name);
  btn5.mouseClicked(openBoard5);
  btn5.size(125, 50);
  btn5.position((windowWidth/2)+5, 175);
  btn5.style("font-family", myFont);
  btn5.style("font-size", "30px")
  
  ebtn5 = createButton("edit");
  ebtn5.mouseClicked(eb5t1);
  ebtn5.size(50, 50);
  ebtn5.position((windowWidth/2)+130, 175);
  ebtn5.style("font-family", myFont);
  ebtn5.style("font-size", "25px")
  
  btn6 = createButton(b6.name);
  btn6.mouseClicked(openBoard6);
  btn6.size(125, 50);
  btn6.position((windowWidth/2)+5, 250);
  btn6.style("font-family", myFont);
  btn6.style("font-size", "30px")
  
  ebtn6 = createButton("edit");
  ebtn6.mouseClicked(eb6t1);
  ebtn6.size(50, 50);
  ebtn6.position((windowWidth/2)+130, 250);
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
  reset();
  
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
  nbtn.style("font-size", "20px");
  
  lastMethod = "nameMenu";
  storeItem('lastMethod',lastMethod);
}

function b1t1(){
  writer1.write(nameA.value());
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  bbtn = createButton("Back");
  bbtn.mouseClicked(nameMenu);
  bbtn.size(100, 40);
  bbtn.position(15, 355);
  bbtn.style("font-family", myFont);
  bbtn.style("font-size", "20px");
  
  
  mmbtn = createButton("Main Menu");
  mmbtn.mouseClicked(mainMenu);
  mmbtn.size(100, 40);
  mmbtn.position(140, 355);   
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
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
}

function b1t2(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+oneQ.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+twoQ.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+threeQ.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fourQ.value());
  writer1.write("\n"+fiveA.value());
  writer1.write("\n"+fiveQ.value());
  writer1.write(nameA.value());
  
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  
  
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
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 2:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
}
function b1t3(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+oneQ.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+twoQ.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+threeQ.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fourQ.value());
  writer1.write("\n"+fiveA.value());
  writer1.write("\n"+fiveQ.value());
  writer1.write(nameA.value());
  
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  
  
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
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 3:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
}

function b1t4(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+oneQ.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+twoQ.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+threeQ.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fourQ.value());
  writer1.write("\n"+fiveA.value());
  writer1.write("\n"+fiveQ.value());
  writer1.write(nameA.value());
  
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  
  
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
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 4:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
}

function b1t5(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+oneQ.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+twoQ.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+threeQ.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fourQ.value());
  writer1.write("\n"+fiveA.value());
  writer1.write("\n"+fiveQ.value());
  writer1.write(nameA.value());
  
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  
  
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
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 5:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
}
function b1t6(){
  writer1.write("\n"+topicA.value());
  writer1.write("\n"+oneA.value());
  writer1.write("\n"+oneQ.value());
  writer1.write("\n"+twoA.value());
  writer1.write("\n"+twoQ.value());
  writer1.write("\n"+threeA.value());
  writer1.write("\n"+threeQ.value());
  writer1.write("\n"+fourA.value());
  writer1.write("\n"+fourQ.value());
  writer1.write("\n"+fiveA.value());
  writer1.write("\n"+fiveQ.value());
  writer1.write(nameA.value());
  
  textAlign(CENTER);
  background(6, 12, 233);
  reset();
  
  
  
  //reposition buttons on the bottom
  
  bbtn = createButton("Back");
  bbtn.mouseClicked(b1t5);
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
  
  fill(255);
  textSize(50);
  title = text(board1[0], 200, 50);
  textSize(25);
  topic = text("Topic 6:", 100, 100);
  topicA = createInput();
  topicA.position(200, 83);
  
  one = text("100:", 100, 125)
  oneA = createInput();
  oneA.position(200, 107);
  onet = text("Answer:", 100, 150)
  oneQ = createInput();
  oneQ.position(200, 131);
  
  two = text("200:", 100, 175)
  twoA = createInput();
  twoA.position(200, 155);
  twot = text("Answer:", 100, 200);
  twoQ = createInput();
  twoQ.position(200, 179);
  
  three = text("300:", 100, 225);
  threeA = createInput();
  threeA.position(200, 203);
  threet = text("Answer:", 100, 250);
  threeQ = createInput();
  threeQ.position(200, 227);
  
  four = text("400:", 100, 275)
  fourA = createInput();
  fourA.position(200, 251);
  fourt = text("Answer:", 100, 300)
  fourQ = createInput();
  fourQ.position(200, 275);
  
  five = text("500:", 100, 325)
  fiveA = createInput();
  fiveA.position(200, 299);
  fivet = text("Answer:", 100, 350)
  fiveQ = createInput();
  fiveQ.position(200, 323);
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
function players(){
  background(col);
  
}
function openBoard1(){
  reset();
  
  storeItem('lastMethod',"openBoard1");
  
  if(typeof name1A !== 'undefined'){
      storeItem('p1Name',name1A.value());
      storeItem('p2Name',name2A.value());
      storeItem('p3Name',name3A.value());
     }
  
  
  p1.name = getItem('p1Name');
  p2.name = getItem('p2Name');
  p3.name = getItem('p3Name');
  
  createCanvas(1920, 1080);
  background(0);
  
  t1 = createButton(b1.questions[0]);
  t1.size(gridSpacingx, gridSpacingy);
  t1.position(5,(1*gridSpacingy)+(2*5));
  t1.style('color', tCol);
  t1.style('font-family: myFont');
  t1.style("font-family", myFont);
  t1.style("font-size", fontSize);
  t1.style("background-color",col);
  
  t2 = createButton(b1.questions[11]);
  t2.size(gridSpacingx, gridSpacingy);
  t2.position(gridSpacingx+(2*5), (1*gridSpacingy)+(2*5));
  t2.style('color', tCol);
  t2.style('font-family: myFont');
  t2.style("font-size", fontSize);
  t2.style("background-color",col);
  
  t3 = createButton(b1.questions[22]);
  t3.size(gridSpacingx, gridSpacingy);
  t3.position((2*gridSpacingx)+(3*5), (1*gridSpacingy)+(2*5));
  t3.style('color', tCol);
  t3.style('font-family: myFont');
  t3.style("font-family", myFont);
  t3.style("font-size", fontSize);
  t3.style("background-color",col);
  
  t4 = createButton(b1.questions[33]);
  t4.size(gridSpacingx, gridSpacingy);
  t4.position((3*gridSpacingx)+(4*5), (1*gridSpacingy)+(2*5));
  t4.style('color', tCol);
  t4.style('font-family: myFont');
  t4.style("font-family", myFont);
  t4.style("font-size", fontSize);
  t4.style("background-color",col);
  
  t5 = createButton(b1.questions[44]);
  t5.size(gridSpacingx, gridSpacingy);
  t5.position((4*gridSpacingx)+(5*5), (1*gridSpacingy)+(2*5));
  t5.style('color', tCol);
  t5.style('font-family: myFont');
  t5.style("font-family", myFont);
  t5.style("font-size", fontSize);
  t5.style("background-color",col);
  
  t6 = createButton(b1.questions[55]);
  t6.size(gridSpacingx, gridSpacingy);
  t6.position((5*gridSpacingx)+(6*5), (1*gridSpacingy)+(2*5));
  t6.style('color', tCol);
  t6.style('font-family: myFont');
  t6.style("font-family", myFont);
  t6.style("font-size", fontSize);
  t6.style("background-color",col);
  
  t11 = createButton("$100");
  t11.mouseClicked(b1t11);
  t11.size(gridSpacingx, gridSpacingy);
  t11.position(5,(2*gridSpacingy)+(3*5));
  t11.style('color', getItem('t11Col'));
  t11.style('font-family: myFont');
  t11.style("font-size", fontSize);
  t11.style("background-color", col);
  
  t12 = createButton("$200");
  t12.mouseClicked(b1t12);
  t12.style('color', getItem('t12Col'));
  t12.style('font-family: myFont');
  t12.size(gridSpacingx, gridSpacingy);
  t12.position(5,(3*gridSpacingy)+(4*5));
  t12.style("font-family", myFont);
  t12.style("font-size", fontSize);
  t12.style("background-color",col);
  
  t13 = createButton("$300");
  t13.mouseClicked(b1t13);
  t13.style('color', getItem('t13Col'));
  t13.style('font-family: myFont');
  t13.size(gridSpacingx, gridSpacingy);
  t13.position(5,(4*gridSpacingy)+(5*5));
  t13.style("font-family", myFont);
  t13.style("font-size", fontSize);
  t13.style("background-color",col);
  
  t14 = createButton("$400");
  t14.mouseClicked(b1t14);
  t14.style('color', getItem('t14Col'));
  t14.style('font-family: myFont');
  t14.size(gridSpacingx, gridSpacingy);
  t14.position(5,(5*gridSpacingy)+(6*5));
  t14.style("font-family", myFont);
  t14.style("font-size", fontSize);
  t14.style("background-color",col);
  
  t15 = createButton("$500");
  t15.mouseClicked(b1t15);
  t15.style('color', getItem('t15Col'));
  t15.style('font-family: myFont');
  t15.size(gridSpacingx, gridSpacingy);
  t15.position(5,(6*gridSpacingy)+(7*5));
  t15.style("font-family", myFont);
  t15.style("font-size", fontSize);
  t15.style("background-color",col);
  
  t21 = createButton("$100");
  t21.mouseClicked(b1t21);
  t21.size(gridSpacingx, gridSpacingy);
  t21.position((1*gridSpacingx)+(2*5),(2*gridSpacingy)+(3*5));
  t21.style('color', getItem('t21Col'));
  t21.style('font-family: myFont');
  t21.style("font-size", fontSize);
  t21.style("background-color", col);
  
  t22 = createButton("$200");
  t22.mouseClicked(b1t22);
  t22.style('color', getItem('t22Col'));
  t22.style('font-family: myFont');
  t22.size(gridSpacingx, gridSpacingy);
  t22.position((1*gridSpacingx)+(2*5),(3*gridSpacingy)+(4*5));
  t22.style("font-family", myFont);
  t22.style("font-size", fontSize);
  t22.style("background-color",col);
  
  t23 = createButton("$300");
  t23.mouseClicked(b1t23);
  t23.style('color', getItem('t23Col'));
  t23.style('font-family: myFont');
  t23.size(gridSpacingx, gridSpacingy);
  t23.position((1*gridSpacingx)+(2*5),(4*gridSpacingy)+(5*5));
  t23.style("font-family", myFont);
  t23.style("font-size", fontSize);
  t23.style("background-color",col);
  
  t24 = createButton("$400");
  t24.mouseClicked(b1t24);
  t24.style('color', getItem('t24Col'));
  t24.style('font-family: myFont');
  t24.size(gridSpacingx, gridSpacingy);
  t24.position((1*gridSpacingx)+(2*5),(5*gridSpacingy)+(6*5));
  t24.style("font-family", myFont);
  t24.style("font-size", fontSize);
  t24.style("background-color",col);
  
  t25 = createButton("$500");
  t25.mouseClicked(b1t25);
  t25.style('color', getItem('t25Col'));
  t25.style('font-family: myFont');
  t25.size(gridSpacingx, gridSpacingy);
  t25.position((1*gridSpacingx)+(2*5),(6*gridSpacingy)+(7*5));
  t25.style("font-family", myFont);
  t25.style("font-size", fontSize);
  t25.style("background-color",col);
  
  t31 = createButton("$100");
  t31.mouseClicked(b1t31);
  t31.size(gridSpacingx, gridSpacingy);
  t31.position((2*gridSpacingx)+(3*5),(2*gridSpacingy)+(3*5));
  t31.style('color', getItem('t31Col'));
  t31.style('font-family: myFont');
  t31.style("font-size", fontSize);
  t31.style("background-color", col);
  
  t32 = createButton("$200");
  t32.mouseClicked(b1t32);
  t32.style('color', getItem('t32Col'));
  t32.style('font-family: myFont');
  t32.size(gridSpacingx, gridSpacingy);
  t32.position((2*gridSpacingx)+(3*5),(3*gridSpacingy)+(4*5));
  t32.style("font-family", myFont);
  t32.style("font-size", fontSize);
  t32.style("background-color",col);

  t33 = createButton("$300");
  t33.mouseClicked(b1t33);
  t33.style('color', getItem('t33Col'));
  t33.style('font-family: myFont');
  t33.size(gridSpacingx, gridSpacingy);
  t33.position((2*gridSpacingx)+(3*5),(4*gridSpacingy)+(5*5));
  t33.style("font-family", myFont);
  t33.style("font-size", fontSize);
  t33.style("background-color",col);
  
  t34 = createButton("$400");
  t34.mouseClicked(b1t34);
  t34.style('color', getItem('t34Col'));
  t34.style('font-family: myFont');
  t34.size(gridSpacingx, gridSpacingy);
  t34.position((2*gridSpacingx)+(3*5),(5*gridSpacingy)+(6*5));
  t34.style("font-family", myFont);
  t34.style("font-size", fontSize);
  t34.style("background-color",col);
  
  t35 = createButton("$500");
  t35.mouseClicked(b1t35);
  t35.style('color', getItem('t35Col'));
  t35.style('font-family: myFont');
  t35.size(gridSpacingx, gridSpacingy);
  t35.position((2*gridSpacingx)+(3*5),(6*gridSpacingy)+(7*5));
  t35.style("font-family", myFont);
  t35.style("font-size", fontSize);
  t35.style("background-color",col);
  
  t41 = createButton("$100");
  t41.mouseClicked(b1t41);
  t41.size(gridSpacingx, gridSpacingy);
  t41.position((3*gridSpacingx)+(4*5),(2*gridSpacingy)+(3*5));
  t41.style('color', getItem('t41Col'));
  t41.style('font-family: myFont');
  t41.style("font-size", fontSize);
  t41.style("background-color", col);
  
  t42 = createButton("$200");
  t42.mouseClicked(b1t42);
  t42.style('color', getItem('t42Col'));
  t42.style('font-family: myFont');
  t42.size(gridSpacingx, gridSpacingy);
  t42.position((3*gridSpacingx)+(4*5),(3*gridSpacingy)+(4*5));
  t42.style("font-family", myFont);
  t42.style("font-size", fontSize);
  t42.style("background-color",col);
  
  t43 = createButton("$300");
  t43.mouseClicked(b1t43);
  t43.style('color', getItem('t43Col'));
  t43.style('font-family: myFont');
  t43.size(gridSpacingx, gridSpacingy);
  t43.position((3*gridSpacingx)+(4*5),(4*gridSpacingy)+(5*5));
  t43.style("font-family", myFont);
  t43.style("font-size", fontSize);
  t43.style("background-color",col);
  
  t44 = createButton("$400");
  t44.mouseClicked(b1t44);
  t44.style('color', getItem('t44Col'));
  t44.style('font-family: myFont');
  t44.size(gridSpacingx, gridSpacingy);
  t44.position((3*gridSpacingx)+(4*5),(5*gridSpacingy)+(6*5));
  t44.style("font-family", myFont);
  t44.style("font-size", fontSize);
  t44.style("background-color",col);
  
  t45 = createButton("$500");
  t45.mouseClicked(b1t45);
  t45.style('color', getItem('t45Col'));
  t45.style('font-family: myFont');
  t45.size(gridSpacingx, gridSpacingy);
  t45.position((3*gridSpacingx)+(4*5),(6*gridSpacingy)+(7*5));
  t45.style("font-family", myFont);
  t45.style("font-size", fontSize);
  t45.style("background-color",col);
  
  t51 = createButton("$100");
  t51.mouseClicked(b1t51);
  t51.size(gridSpacingx, gridSpacingy);
  t51.position((4*gridSpacingx)+(5*5),(2*gridSpacingy)+(3*5));
  t51.style('color', getItem('t51Col'));
  t51.style('font-family: myFont');
  t51.style("font-size", fontSize);
  t51.style("background-color", col);
  
  t52 = createButton("$200");
  t52.mouseClicked(b1t52);
  t52.style('color', getItem('t52Col'));
  t52.style('font-family: myFont');
  t52.size(gridSpacingx, gridSpacingy);
  t52.position((4*gridSpacingx)+(5*5),(3*gridSpacingy)+(4*5));
  t52.style("font-family", myFont);
  t52.style("font-size", fontSize);
  t52.style("background-color",col);
  
  t53 = createButton("$300");
  t53.mouseClicked(b1t53);
  t53.style('color', getItem('t53Col'));
  t53.style('font-family: myFont');
  t53.size(gridSpacingx, gridSpacingy);
  t53.position((4*gridSpacingx)+(5*5),(4*gridSpacingy)+(5*5));
  t53.style("font-family", myFont);
  t53.style("font-size", fontSize);
  t53.style("background-color",col);
  
  t54 = createButton("$400");
  t54.mouseClicked(b1t54);
  t54.style('color', getItem('t54Col'));
  t54.style('font-family: myFont');
  t54.size(gridSpacingx, gridSpacingy);
  t54.position((4*gridSpacingx)+(5*5),(5*gridSpacingy)+(6*5));
  t54.style("font-family", myFont);
  t54.style("font-size", fontSize);
  t54.style("background-color",col);
  
  t55 = createButton("$500");
  t55.mouseClicked(b1t55);
  t55.style('color', getItem('t55Col'));
  t55.style('font-family: myFont');
  t55.size(gridSpacingx, gridSpacingy);
  t55.position((4*gridSpacingx)+(5*5),(6*gridSpacingy)+(7*5));
  t55.style("font-family", myFont);
  t55.style("font-size", fontSize);
  t55.style("background-color",col);

  t61 = createButton("$100");
  t61.mouseClicked(b1t61);
  t61.size(gridSpacingx, gridSpacingy);
  t61.position((5*gridSpacingx)+(6*5),(2*gridSpacingy)+(3*5));
  t61.style('color', getItem('t61Col'));
  t61.style('font-family: myFont');
  t61.style("font-size", fontSize);
  t61.style("background-color", col);
  
  t62 = createButton("$200");
  t62.mouseClicked(b1t62);
  t62.style('color', getItem('t62Col'));
  t62.style('font-family: myFont');
  t62.size(gridSpacingx, gridSpacingy);
  t62.position((5*gridSpacingx)+(6*5),(3*gridSpacingy)+(4*5));
  t62.style("font-family", myFont);
  t62.style("font-size", fontSize);
  t62.style("background-color",col);

  t63 = createButton("$300");
  t63.mouseClicked(b1t63);
  t63.style('color', getItem('t63Col'));
  t63.style('font-family: myFont');
  t63.size(gridSpacingx, gridSpacingy);
  t63.position((5*gridSpacingx)+(6*5),(4*gridSpacingy)+(5*5));
  t63.style("font-family", myFont);
  t63.style("font-size", fontSize);
  t63.style("background-color",col);

  t64 = createButton("$400");
  t64.mouseClicked(b1t64);
  t64.style('color', getItem('t64Col'));
  t64.style('font-family: myFont');
  t64.size(gridSpacingx, gridSpacingy);
  t64.position((5*gridSpacingx)+(6*5),(5*gridSpacingy)+(6*5));
  t64.style("font-family", myFont);
  t64.style("font-size", fontSize);
  t64.style("background-color",col);

  t65 = createButton("$500");
  t65.mouseClicked(b1t65);
  t65.style('color', getItem('t65Col'));
  t65.style('font-family: myFont');
  t65.size(gridSpacingx, gridSpacingy);
  t65.position((5*gridSpacingx)+(6*5),(6*gridSpacingy)+(7*5));
  t65.style("font-family", myFont);
  t65.style("font-size", fontSize);
  t65.style("background-color",col);
  
  if(p1.name.length>5){
    p1NameFontSize = "35px";
  }
  if(p2.name.length>5){
    p2NameFontSize = "35px";
  }
  if(p3.name.length>5){
    p3NameFontSize = "35px";
  }
  
  player1 = createButton(p1.name+": "+p1.points);
  player1.style('color:col');
  player1.size((windowWidth-20)/3,gridSpacingy);
  player1.position(5,5);
  player1.style("font-family: myFont");
  player1.style('background-color', col);
  player1.style('font-size', p1NameFontSize);
  player1.style('color', unused)
  
  player1Correct = createButton("+");
  player1Correct.mouseClicked(correct1);
  player1Correct.style('color', col);
  player1Correct.style('font-family: myFont');
  player1Correct.size(30,(player1.height-15)/2);
  player1Correct.position((windowWidth/3)-35, 10);
  
  player1Wrong = createButton("-");
  player1Wrong.mouseClicked(incorrect1);
  player1Wrong.style('color', col);
  player1Wrong.style('font-family: myFont');
  player1Wrong.size(30,(player1.height-15)/2);
  player1Wrong.position((windowWidth/3)-35, 15+player1Correct.height);
  
  player2 = createButton(p2.name+": "+p2.points);
  player2.style('color:col');
  player2.size((windowWidth-20)/3,gridSpacingy);
  player2.position(10+player1.width, 5);
  player2.style("font-family: myFont");
  player2.style('background-color', col);
  player2.style('font-size',p2NameFontSize);
  player2.style('color', unused)
  
  player2Correct = createButton("+");
  player2Correct.mouseClicked(correct2);
  player2Correct.style('color', col);
  player2Correct.style('font-family: myFont');
  player2Correct.size(30,(player1.height-15)/2);
  player2Correct.position((windowWidth/3)-30+player1.width, 10);
  
  player2Wrong = createButton("-");
  player2Wrong.mouseClicked(incorrect2);
  player2Wrong.style('color', col);
  player2Wrong.style('font-family: myFont');
  player2Wrong.size(30,(player1.height-15)/2);
  player2Wrong.position((windowWidth/3)-30+player1.width, 15+player1Correct.height);
  
  player3 = createButton(p3.name+": "+p3.points);
  player3.style('color:col');
  player3.size((windowWidth-20)/3,gridSpacingy);
  player3.position(15+(player1.width*2), 5);
  player3.style("font-family: myFont");
  player3.style('background-color', col);
  player3.style('font-size',p3NameFontSize);
  player3.style('color', unused)
  
  player3Correct = createButton("+");
  player3Correct.mouseClicked(correct3);
  player3Correct.style('color', col);
  player3Correct.style('font-family: myFont');
  player3Correct.size(30,(player1.height-15)/2);
  player3Correct.position((windowWidth/3)-30+(player1.width*2), 10);
  
  player3Wrong = createButton("-");
  player3Wrong.mouseClicked(incorrect3);
  player3Wrong.style('color', col);
  player3Wrong.style('font-family: myFont');
  player3Wrong.size(30,(player1.height-15)/2);
  player3Wrong.position((windowWidth/3)-30+(player1.width*2), 15+player1Correct.height);
}
function b1t11(){
  reset();
  
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[1], windowWidth/2, windowHeight/2);

  
  
  storeItem('t11Col',used);

  
  value = 100;
}
function b1t12(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[3], windowWidth/2, windowHeight/2);
  
  storeItem('t12Col',used);  value = 200;
}
function b1t13(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[5], windowWidth/2, windowHeight/2);
  
  storeItem('t13Col',used); 
  value = 300;
}
function b1t14(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[7], windowWidth/2, windowHeight/2);

  storeItem('t14Col',used);
  value = 400;
}
function b1t15(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[9], windowWidth/2, windowHeight/2);

  storeItem('t15Col',used);
  value = 500;
}
function b1t21(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[12], windowWidth/2, windowHeight/2);
  
  storeItem('t21Col',used);
  value = 100;
}
function b1t22(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[14], windowWidth/2, windowHeight/2);

   storeItem('t22Col',used);
  value = 200;
}
function b1t23(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[16], windowWidth/2, windowHeight/2);

   storeItem('t23Col',used);
  value = 300;
}
function b1t24(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[18], windowWidth/2, windowHeight/2);

   storeItem('t24Col',used);
  value = 400;
}
function b1t25(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[20], windowWidth/2, windowHeight/2);

   storeItem('t25Col',used);
  value = 500;
}
function b1t31(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[23], windowWidth/2, windowHeight/2);
  
  storeItem('t31Col',used);
  value = 100;
}
function b1t32(){
 reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[25], windowWidth/2, windowHeight/2);

  storeItem('t32Col',used);
  value = 200;
}
function b1t33(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[27], windowWidth/2, windowHeight/2);

  storeItem('t33Col',used);
  value = 300;
}
function b1t34(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[29], windowWidth/2, windowHeight/2);

  storeItem('t34Col',used);
  value = 400;
}
function b1t35(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[31], windowWidth/2, windowHeight/2);

  storeItem('t35Col',used);
  value = 500;
}
function b1t41(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[34], windowWidth/2, windowHeight/2);

  storeItem('t41Col',used);
  value = 100;
}
function b1t42(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[36], windowWidth/2, windowHeight/2);

  storeItem('t42Col',used);
  value = 200;
}
function b1t43(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[38], windowWidth/2, windowHeight/2);

  storeItem('t43Col',used);
  value = 300;
}
function b1t44(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[40], windowWidth/2, windowHeight/2);

  storeItem('t44Col',used);
  value = 400;
}
function b1t45(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[42], windowWidth/2, windowHeight/2);

  storeItem('t45Col',used);
  value = 500;
}
function b1t51(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[45], windowWidth/2, windowHeight/2);

  storeItem('t51Col',used);
  value = 100;
}
function b1t52(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[47], windowWidth/2, windowHeight/2);

  storeItem('t52Col',used);
  value = 200;
}
function b1t53(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[49], windowWidth/2, windowHeight/2);

  storeItem('t53Col',used);
  value = 300;
}
function b1t54(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[51], windowWidth/2, windowHeight/2);

  storeItem('t54Col',used);
  value = 400;
}
function b1t55(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[53], windowWidth/2, windowHeight/2);

  storeItem('t55Col',used);
  value = 500;
}
function b1t61(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[56], windowWidth/2, windowHeight/2);

  storeItem('t61Col',used);
  value = 100;
}
function b1t62(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[58], windowWidth/2, windowHeight/2);

  storeItem('t62Col',used);
  value = 200;
}
function b1t63(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[60], windowWidth/2, windowHeight/2);

  storeItem('t63Col',used);
  value = 300;
}
function b1t64(){
  reset();
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[62], windowWidth/2, windowHeight/2);

  storeItem('t64Col',used);
  value = 400;
}
function b1t65(){
  reset();
  
  background(6, 12, 233);
  textSize(textFontSize);
  fill('#FFCC00');
  textAlign(CENTER);
  question = text(b1.questions[64], windowWidth/2, windowHeight/2);

  storeItem('t65Col',used);
  value = 500;
  
}

function openBoard2(num){
  storeItem('lastMethod',"openBoard2");
  background(0);
  reset();
  
}
function openBoard3(num){
  background(0);
  reset();
  
}
function openBoard4(num){
  background(0);
  reset();
  
}
function openBoard5(num){
  background(0);
  reset();
  
}
function openBoard6(num){
  background(0);
  reset();
  
}
function correct1(){
    p1.points = p1.points+value;
    openBoard1();
  }
function correct2(){
    p2.points = p2.points+value;
    openBoard1();
  }
function correct3(){
    p3.points = p3.points+value;
    openBoard1();
  }
function incorrect1(){
    p1.points = p1.points-value;
    openBoard1();
  }
function incorrect2(){
    p2.points = p2.points-value;
    openBoard1();
  }
function incorrect3(){
    p3.points = p3.points-value;
    openBoard1();
  }
function reset(){
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
  if(typeof ebtn6 != "undefined"){
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
  if(typeof oneQ != "undefined"){
    oneQ.remove();
  }
  if(typeof twoQ != "undefined"){
    twoQ.remove();
  }
  if(typeof threeQ != "undefined"){
    threeQ.remove();
  }
  if(typeof fourQ != "undefined"){
    fourQ.remove();
  }
  if(typeof fiveQ != "undefined"){
    fiveQ.remove();
  }
  if(typeof player1 != "undefined"){
    player1.remove();
  }
  if(typeof player1Correct != "undefined"){
    player1Correct.remove();
  }
  if(typeof player1Wrong != "undefined"){
    player1Wrong.remove();
  }
  if(typeof player2 != "undefined"){
    player2.remove();
  }
  if(typeof player2Correct != "undefined"){
    player2Correct.remove();
  }
  if(typeof player2Wrong != "undefined"){
    player2Wrong.remove();
  }
  if(typeof player3 != "undefined"){
    player3.remove();
  }
  if(typeof player3Correct != "undefined"){
    player3Correct.remove();
  }
  if(typeof player3Wrong != "undefined"){
    player3Wrong.remove();
  }
  if(typeof t1 != "undefined"){
    t1.remove();
  }
  if(typeof t2 != "undefined"){
    t2.remove();
  }
  if(typeof t3 != "undefined"){
    t3.remove();
  }
  if(typeof t4 != "undefined"){
    t4.remove();
  }
  if(typeof t5 != "undefined"){
    t5.remove();
  }
  if(typeof t6 != "undefined"){
    t6.remove();
  }
  if(typeof t11 != "undefined"){
    t11.remove();
  }
  if(typeof t12 != "undefined"){
    t12.remove();
  }
  if(typeof t13 != "undefined"){
    t13.remove();
  }
  if(typeof t14 != "undefined"){
    t14.remove();
  }
  if(typeof t15 != "undefined"){
    t15.remove();
  }
  if(typeof t21 != "undefined"){
    t21.remove();
  }
  if(typeof t22 != "undefined"){
    t22.remove();
  }
  if(typeof t23 != "undefined"){
    t23.remove();
  }
  if(typeof t24 != "undefined"){
    t24.remove();
  }
  if(typeof t25 != "undefined"){
    t25.remove();
  }
  if(typeof t31 != "undefined"){
    t31.remove();
  }
  if(typeof t32 != "undefined"){
    t32.remove();
  }
  if(typeof t33 != "undefined"){
    t33.remove();
  }
  if(typeof t34 != "undefined"){
    t34.remove();
  }
  if(typeof t35 != "undefined"){
    t35.remove();
  }
  if(typeof t41 != "undefined"){
    t41.remove();
  }
  if(typeof t42 != "undefined"){
    t42.remove();
  }
  if(typeof t43 != "undefined"){
    t43.remove();
  }
  if(typeof t44 != "undefined"){
    t44.remove();
  }
  if(typeof t45 != "undefined"){
    t45.remove();
  }
  if(typeof t51 != "undefined"){
    t51.remove();
  }
  if(typeof t52 != "undefined"){
    t52.remove();
  }
  if(typeof t53 != "undefined"){
    t53.remove();
  }
  if(typeof t54 != "undefined"){
    t54.remove();
  }
  if(typeof t55 != "undefined"){
    t55.remove();
  }
  if(typeof t61 != "undefined"){
    t61.remove();
  }
  if(typeof t62 != "undefined"){
    t62.remove();
  }
  if(typeof t63 != "undefined"){
    t63.remove();
  }
  if(typeof t64 != "undefined"){
    t64.remove();
  }
  if(typeof t65 != "undefined"){
    t65.remove();
  }
  if(typeof name1A != "undefined"){
    name1A.remove();
  }
  if(typeof name2A != "undefined"){
    name2A.remove();
  }
  if(typeof name3A != "undefined"){
    name3A.remove();
  }
}
function getPlayers(){
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
  
  textAlign(CENTER);
  background(6, 12, 233);
  
  fill(255);
  textSize(50);
  title = text(board1[0], windowWidth/2, 50);
  textSize(25);
  name = text("Player 1:", 100, 100);
  name1A = createInput();
  name1A.position(200, 83);
  
  name = text("Player 2:", 100, 200);
  name2A = createInput();
  name2A.position(200, 183);
  
  name = text("Player 3:", 100, 300);
  name3A = createInput();
  name3A.position(200, 283);
  
  nbtn = createButton("Next");
  nbtn.mouseClicked(openBoard1);
  nbtn.size(100, 40);
  nbtn.position(windowWidth-105, windowHeight-45);
  nbtn.style("font-family", myFont);
  nbtn.style("font-size", "20px");
  
  
}

class Board{
  constructor(name, questions){
    this.name = name;
    this.questions = questions
    
  }
  
}
class player{
  constructor(name){
    this.name = name;
    this.points = 0;
  }
  
}
