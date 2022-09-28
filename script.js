// const n = Number(input);
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
let startColor = "#f8f9fa";
function draw(radius,inset){
    ctx.fillStyle = startColor;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
 let n = document.querySelector("#abc").value;
ctx.beginPath();
ctx.save();
ctx.translate(canvas.width/2,canvas.height/2)
ctx.moveTo(0,0-radius);
for(let i =0;i<n;i++){
    ctx.rotate(Math.PI/(n/2));
    ctx.lineTo(0,0-(radius*inset));
    ctx.rotate(Math.PI/(n/2));
    ctx.lineTo(0,0-radius);
}
ctx.restore();
ctx.closePath();
ctx.stroke();

}

