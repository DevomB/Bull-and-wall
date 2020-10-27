
var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(1,200)


  thickness=random(1,100)

 


  
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color("Gold");

 
  	
    
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color("Brown");
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background("Grey");  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.01 * weight * speed* speed/(thickness);

  	
	if(damage>40)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<40)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}


