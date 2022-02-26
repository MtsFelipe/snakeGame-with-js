function principal(){

    var stage= document.getElementById('stage');
    var ctx= stage.getContext("2d");
    document.addEventListener("keydown", keyadd);
    setInterval(game,60);

    const vel=1;

    var vx=vy=0;
    var px=py=10;
    var tp=10;
    var qp=40;
    var mx=my=5;

    var trail=[];
    tail=5;

    function game(){
        px += vx;
        py += vy;

        if (px <0) {
            px = qp-1;
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0){
            py = qp-1;
        }
        if (py > qp-1){
            py = 0;
        }
 
        ctx.fillStyle = "black"; //fundo do mapa 
        ctx.fillRect(0,0, stage.width,stage.height);
        
        ctx.fillStyle = "red";//maça
        ctx.fillRect(mx*tp,my*tp, tp,tp);

        ctx.fillStyle = "green"//cobra
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
             if (trail[i].x == px && trail[i].y == py)
            {
                if (vx!=0) {
                    alert("Game Over!!!!!")
                }
                vx = vy=0;
                tail =5;
                
            }
        }//caso ela colida com ela mesma
        trail.push({ x:px, y:py })
        while (trail.length > tail) {
            trail.shift();//tira o primeiro elemento do array
        }
        if (mx==px && my==py){
            tail++;
            mx = Math.floor(Math.random()*qp);
            my = Math.floor(Math.random()*qp);
        }//caso coma a maçã

    }
    function keyadd(event){
        switch (event.keyCode) {
            case 37:
                vx = -vel;
                vy = 0;
                break;
            case 38:
                vx = 0;
                vy = -vel;
                break;
            case 39: 
                vx = vel;
                vy = 0;
                break;
            case 40: 
                vx = 0;
                vy = vel;
                break;
            default:
                break;
        }
    }

}
window.addEventListener("load",principal);