let arr = [
    [28, 65, 89],
    [220, 254, 230],
    [51, 198, 150],
    [0, 255, 255],
    [145, 165, 30],
]


let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 500);
svg.setAttribute("height", 500);
svg.setAttribute("viewBox", "0 0 500 500");

function createCircle(x,y,r,kleur){
    let circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cx",x);
    circle.setAttribute("cy",y);
    circle.setAttribute("r",r);
    circle.setAttribute("fill",kleur);
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
    
}

for (let i = 0; i < 1200;i= i + 1){
    let r1 = Math.round((Math.random() * 500)) + 1;
    let r2 = Math.round((Math.random() * 500)) + 1;
    let r3 = Math.round ((Math.random() * 13)) + 3;
    let r4 = Math.round((Math.random() * 5 ));
    klr = "rgb(" + arr[r4] + ")";
    
    createCircle(r1,r2,r3,klr)
}

document.body.appendChild(svg);