var a = [5,6,7,62,3,4,78,45,2,3,8];

var scrW = a.length*50 + 160;
var scrH = 500;

function setup() 
{
  createCanvas(scrW, scrH);
  background(220);
  
  textSize(24)
  textStyle(BOLD);
  text("key: ", 10, 30);
}

let n = 2;
let j = 1;
let i = 0;

let flag = false;

function draw()
{
  drawArr(i, j);

  if(mouseIsPressed && n <= a.length) 
  {
    flag = insSort(n, j, i);
    
    if(flag == false && i>=0) i--;
    
    else if(i==0 || flag == true)
    {
      j++;
      n++;
      i = j-1;
    }
    
    sleepms(200);
  }
}

//Insertion sort

var key;

function insSort(n, jj, ii)
{
  textSize(25);
  
  let j = jj; 
  
  //To remove the previous text

  fill(220);
  strokeWeight(0)
  circle((j-1)*50+76, 190, 30);
  fill('white');

  //
  
  fill('red');
  textStyle(BOLD);
  text("J", j*50+66, 200);
  fill('white');

  //I save the key of the element that I want to move
    
  if(ii == j-1) 
  {
    key = a[j];
    
    //To remove the previous text

    fill(220);
    strokeWeight(0)
    circle(10,30,300);
    fill('black');

    //
    
    textSize(24)
    textStyle(BOLD);
    text("key: " + key,10, 30);
  }  
    
  let i = ii;
    
  if(a[i] > key && i >= 0)
  {
    if(i < j-1)
    {
      //To remove the previous text

      fill(220);
      strokeWeight(0)
      circle((i+1)*50+76, 190, 30);
      fill('white');
    }  

    fill('blue');
    textStyle(BOLD);
    text("I", i*50+70, 200);
    fill('white');
      
    a[i+1] = a[i];
    return false;
  }
  
  if(i < j-1)
  {
    //To remove the previous text

    fill(220);
    strokeWeight(0)
    circle((i+1)*50+76, 190, 30);
    fill('white');
  }  
    
  a[i+1] = key;
  return true;
}

//Draw array

function drawArr(ii, jj)
{
  textStyle(BOLD);
  
  let y1 = 215;
  let y2 = 265;
  
  strokeWeight(3);
  textSize(25);
  
  for(let i = 50; i <= a.length*50; i += 50)
  {
    fill('white');
    quad(i, y1, i + 50, y1, i + 50, y2, i, y2);
    
    if((i-50)/50 - 1 == ii && ii+1 < jj)
    {
      fill('blue');
      quad(i, y1, i + 50, y1, i + 50, y2, i, y2);
    }
    
    if((i-50)/50 == jj  && ii+1 < jj)
    {
      fill('red');
      quad(i, y1, i + 50, y1, i + 50, y2, i, y2);
    }
    
    fill('black');
    
    if(a[(i-50)/50] < 9) text(a[(i-50)/50], i+18, y2-15);
    else text(a[(i-50)/50], i+10, y2-15);
  }
}

function sleepms(milliseconds) 
{
    var start = new Date().getTime();

    for (var i = 0; i < 1e7; i++) 
    {
      if ((new Date().getTime() - start) > milliseconds)
      {
        return;
      }
    }
  }