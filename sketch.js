var marks = [35,38,42,45,43,34,46,41,48,32];
function check() {
  for(var i = 0; i<marks.length; i++) {
    if (marks[i]>40) {
      console.log(marks[i])
    }
  }
}

function setup() 
{
  createCanvas(400,400);
  check()
  var ran=Math.round(random(10,50))
  console.log(ran)

}

function draw() 
{
  background(30);
}

 

