//script.js
let bullets = [];
let enemies = [];
let score = 0;

//player
let cord_x = 0;
let cord_y = 300;
let playerSpeed =3;

//p5.js 라이브러리의 렌더링 API인 preload(),setup(),draw() 를 이용하여 게임 그래픽 렌더링

function preload(){    
    //playerImg = loadImage("sprite/tyler1-select.png");
    playerImg = loadImage("sprites/warrior-select.png");
    bulletImg = loadImage("sprites/bullet.png");
    enemyImg = loadImage("sprites/goblin.png");
}

function setup(){
    createCanvas(800,600);
    playerImg.resize(100,100);
    bulletImg.resize(23,13);

    for(let i=0;i<5;i++){
        let enemyImg={
            x:random(800,1000),
            y:random(100,400),
        };
        enemies.push(enemyImg);
    }
}

    function draw(){
        background(220);
        image(playerImg,cord_x,cord_y);

        keyboardController();

        
        
    }