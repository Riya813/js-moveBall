
// var ball = document.getElementById('ball');
function getNumber(str){
    var num = str.slice(0, -2);
    return Number(num);
}
document.addEventListener('keydown', function(e){
    var ball = document.getElementById('ball');
    if(e.code === 'KeyW'){
        var top = ball.style.top;
        if(top === ''){
            ball.style.top = 0;
            return;
        }
        var topInt = getNumber(top);
        topInt = topInt - 10;
        ball.style.top = topInt + "px";
    }
    if(e.code === 'KeyS'){
        var down = ball.style.top;
        if(down === ''){
            ball.style.top = 0;
            return;
        }
        var topInt = getNumber(down);
        topInt = topInt + 10;
        ball.style.top = topInt + "px";
    }
    if(e.code === 'KeyA'){
        var left = ball.style.left;
        if(left === ''){
            ball.style.left = 0;
            return;
        }
        var topInt = getNumber(left);
        topInt = topInt - 10;
        ball.style.left = topInt + "px";
    }
    if(e.code === 'KeyD'){
        var right = ball.style.left;
        if(right === ''){
            ball.style.left = 0;
            return;
        }
        var topInt = getNumber(right);
        topInt = topInt + 10;
        ball.style.left = topInt + "px";
    }
});