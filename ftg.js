function start(){
    let board=document.getElementById("board")
    let gameimg=document.getElementById("gameimg")
    gameimg.remove()
    for (let i = 1; i <= 25; i++) {
        const button = document.createElement('button');
        const img = document.createElement('img');
        button.id = 'but' + i;
        img.id = 'img' + i;
        img.style.position="absolute"
        img.style.height="55px"
        img.style.width="55px"
        img.style.zIndex="-10"
        img.style.left="0"
        img.style.top="0"
        button.style.position="relative"
        board.appendChild(button).append(img);
    }
//     for (let j=1;j<=25;j++){
//         but+${i}
//     }
}