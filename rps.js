function play(){
    // playing board changes
    let befimg=document.getElementById("befimg");
    befimg.parentNode.removeChild(befimg);
    let board=document.getElementById("board");
    let opp=document.createElement("img");
    let you=document.createElement("img");
    opp.src="images/rock.png"
    you.src="images/paper.png"
    opp.className="opp";
    you.className="you";
    board.appendChild(opp);
    board.appendChild(you);

    //changes in buttons
    let rock=document.createElement("button")
    let paper=document.createElement("button")
    let sissor=document.createElement("button")
    rock.textContent="Rock"
    paper.textContent="Paper"
    sissor.textContent="Sissor"
    let playbut=document.getElementById('playbut')
    playbut.appendChild(rock)
    playbut.appendChild(paper)
    playbut.appendChild(sissor)
    let playlogo=document.getElementById("playlogo")
    playlogo.remove()

    //game logic
    let score=document.getElementById("score")
    let W=0
    let L=0
    let T=1

    rock.addEventListener("click",()=>{
        you.src="images/rock.png"
        let oppnum=Math.floor(Math.random()*3)
        console.log(oppnum)
        if (oppnum==0) {
            opp.src="images/rock.png"
        }
        else if(oppnum==1){
            opp.src="images/sissor.png"
        }
        else{
            opp.src="images/paper.png"
        }
        if (oppnum==0) {
            T+=1
        }
        else if(oppnum==1){
            W+=1
        }
        else{
            L+=1
        }
        score.textContent=`wins: ${W} Losses: ${L} Ties: ${T}`
    })
    sissor.addEventListener("click",()=>{
        you.src="images/sissor.png"
        let oppnum=Math.floor(Math.random()*3)
        console.log(oppnum)
        if (oppnum==0) {
            opp.src="images/rock.png"
        }
        else if(oppnum==1){
            opp.src="images/sissor.png"
        }
        else{
            opp.src="images/paper.png"
        }
        if (oppnum==0) {
            L+=1
        }
        else if(oppnum==1){
            T+=1
        }
        else{
            W+=1
        }
        score.textContent=`wins: ${W} Losses: ${L} Ties: ${T}`
    })
    paper.addEventListener("click",()=>{
        you.src="images/paper.png"
        let oppnum=Math.floor(Math.random()*3)
        console.log(oppnum)
        if (oppnum==0) {
            opp.src="images/rock.png"
        }
        else if(oppnum==1){
            opp.src="images/sissor.png"
        }
        else{
            opp.src="images/paper.png"
        }
        if (oppnum==0) {
            W+=1
        }
        else if(oppnum==1){
            L+=1
        }
        else{
            T+=1
        }
        score.textContent=`wins: ${W} Losses: ${L} Ties: ${T}`
    })
    let reset=document.getElementById("reset")
    reset.addEventListener("click",()=>{
        W=0;
        L=0;
        T=0;
        score.textContent=`wins: ${W} Losses: ${L} Ties: ${T}`
    })
}