document.addEventListener("DOMContentLoaded", function () {
    let chance = 'X';
    let reset = document.getElementById("reset");
    let box = [];
    let fillCondition = [];
    let win = [[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] ];
    let result = document.getElementById("result");
    let chance_score = document.getElementById("chance");
    let X = document.getElementById("X");
    let O = document.getElementById("O");
    let scoreX = 0;
    let scoreO = 0;
    let resetScore = document.getElementById("resetScore");

    for (let i = 1; i <= 9; i++) {
        let temp = String(i);
        box[i - 1] = document.getElementById(temp);
        fillCondition[i - 1] = 0;
    }

    for (let i = 0; i < 9; i++) {
        box[i].addEventListener("click", function() {
            mark(i);
        });
    }

    function mark(num) {
        if(fillCondition[num]==0){
            box[num].textContent = chance;
            fillCondition[num] = 1;

            if(checkWin()){
                if(chance == 'X') {
                    result.innerHTML = "X wins !!";
                    scoreX+=10;
                    X.innerHTML = "X: " + scoreX +" points";
                } else {
                    result.innerHTML = "O wins !!";
                    scoreO+=10;
                    O.innerHTML = "O: " + scoreO +" points";
                }
            } else {
                if(fillConditionCheck()){
                    result.innerHTML = "It's a Tie !!";
                    scoreX+=5;
                    scoreO+=5;
                    X.innerHTML = "X: " + scoreX +" points";
                    O.innerHTML = "O: " + scoreO +" points";
                    for(let i=0;i<9;i++){
                        box[i].style.color = "Red";
                    }
                }

                chance = (chance == 'X') ? 'O' : 'X';
            }

            chance_score.innerHTML = ("Chance: " + chance);
        }
    }

    function checkWin() {
        let temp = [];
        for(let i=0;i<8;i++){
            for(let j=0;j<3;j++){
                temp[j] = win[i][j];
            }

            if(box[temp[0]].textContent === box[temp[1]].textContent && box[temp[1]].textContent === box[temp[2]].textContent && (box[temp[2]].textContent==="X" || box[temp[2]].textContent==="O")) {
                for(let k=0;k<3;k++){
                    box[temp[k]].style.color = "#9BEC00";
                }
                for(let k=0;k<9;k++){
                    fillCondition[k] =1;
                }
                return true;
            }
        }
        return false;
    }

    function fillConditionCheck(){
        for(let i=0;i<9;i++){
            if(fillCondition[i]==0){
                return false;
            }
        }
        return true;
    }

    reset.addEventListener("click", resetbtn);

    function resetbtn() {
        for (i = 0; i < 9; i++) {
            box[i].textContent = "";
            fillCondition[i] =0;
            box[i].style.color = "#EADBC8";
        }
        chance = 'X';
        result.innerHTML ="";
    }

    resetScore.addEventListener("click", resetScorebtn);

    function resetScorebtn(){
        chance_score.innerHTML = "Chance : X";
        X.innerHTML = "X: 0 points";
        O.innerHTML = "O: 0 points";
        scoreO =0;
        scoreX = 0;
    }
});
