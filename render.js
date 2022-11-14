//script.js
let bullets = [];
let enemies = [];
let score = 0;


//player
let cord_x = 300;
let cord_y = 300;
let playerSpeed =3;

//p5.js 라이브러리의 렌더링 API인 preload(),setup(),draw() 를 이용하여 게임 그래픽 렌더링

function preload(){    
    //playerImg = loadImage("sprite/tyler1-select.png");
    playerImg = loadImage("sprites/warrior-select.png");
    bulletImg = loadImage("sprites/bullet.png");
    enemyImg = loadImage("sprites/goblin.png");
}

let p;
let js;
let joySticking = false;
let fireButton;

function setup(){
    createCanvas(800,600);
    scl = windowWidth/10;

    playerImg.resize(100,100);
    bulletImg.resize(23,13);

    for(let i=0;i<5;i++){
        let enemyImg={
            x:random(800,1000),
            y:random(100,400),
        };
        enemies.push(enemyImg);
    }

    //조이스틱
    p = new Player(width/2,height/2);
    js = new JoyStick(1.5*scl,height-1.5*scl);
    fireButton = new FireButton(width-scl*1.5,height-scl*1.5);
    textAlign(CENTER,CENTER);
}

    function draw(){
        background(220);
        image(playerImg,cord_x,cord_y);

        keyboardController();

        //조이스틱
        joySticking = false;
        //fireButton.firing = false;

        background(0);

        touches.forEach( touch => {
            if(dist(touch.x,touch.y,js.pos.x,js.pos.y) < scl * 1.2) {
              let dir = js.track(touch);
              dir.normalize();
              dir.mult(p.speed);
              p.pos.add(dir);
              p.angle = lerp(p.angle,js.angle,0.6);
              joySticking = true;
            }
            if(dist(touch.x,touch.y,fireButton.pos.x,fireButton.pos.y) < fireButton.r) {
              fireButton.firing = true;
            }
          });
          if(!joySticking) {
            js.resetStick();
          }
          
          
          p.display();
          
          js.display();
          fireButton.display();


    }