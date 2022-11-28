//
//Char.js
//모든 charClass 들의 부모임.
class Char{
    constructor(id,name,points){
        this.type='player';
        this.x=X_STARTING_POS;//랜덤으로 변경할 것.
        this.y=Y_STARTING_POS;//랜덤으로 변경할 것.
        this.points=points;
        this.char=STARTING_CHAR;//상속으로 변경할것
        this.direction=STARTING_DIR;
        this.cooldown=0;
        this.rightPress=false;
        this.leftPress=false;
        this.downPress=false;
        this.upPress=false;
        this.isShoot=false;
        this.speed=PLAYER_SPEED;
    }
    updatePosition(){
        if (this.rightPress){
            this.x += this.speed;
            this.direction='right';
            //console.log('right!!!')
        }                
        else if (this.leftPress){
            this.x -= this.speed;
            this.direction='left';
            //console.log('left!!!')
        }   
        else if (this.upPress){
            this.y -= this.speed;
            this.direction='up';
            //console.log('up!!!')
        }
        else if (this.downPress){
            this.y += this.speed;
            this.direction='down';
            //console.log('down!!!')
        }
    }
    addPoint(){
        this.points++;
    }
    shootBullet(){
        if(this.isShoot&&this.cooldown===0){
            let bullet = new Bullet(this.id,this.x,this.y,this.direction);
            bulletList[bullet.id] = bullet;
            this.cooldown=COOL_TIME;
        }
    }
    updateCooldown(){
        if(this.cooldown>0){
            this.cooldown-=1;
        }
    }
};