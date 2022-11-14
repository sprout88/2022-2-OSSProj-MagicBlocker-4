//p5.js API 사용
//키 값 레퍼런스
//https://www.toptal.com/developers/keycode/for/control

//const SQRT = 1.4 //대각선 이동속도가 더 빠른 현상 제거

function keyboardController(){

    //동서남북 이동

    let left = keyIsDown(65);  //'A'
    let down = keyIsDown(68); //'D'
    let up = keyIsDown(87); //'W'
    let right = keyIsDown(83) //'S'
   
    if(up){
       console.log('w');
       move_up();
   }
    if(left){
       
       console.log('a');
       move_left();
   }
    if(down){
        console.log('d');
        move_right();
    }

    if(right){
    console.log('s')
        move_down();
    }



}