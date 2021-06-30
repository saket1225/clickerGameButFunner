let wholeContent = document.querySelector(".content")
let loader = document.querySelector(".loadingEffect")
let clickedNum = 0;
let clicksLeftNum = 100;
let clicksLeftNumDom = document.querySelector(".clicksLeftNum");
let counter = document.querySelector(".count");
let clicker = document.querySelector(".clicker");
let timerFinished = false;
let minutes = document.querySelector(".mins")
let seconds = document.querySelector(".secLeft")
let endingScreen = document.querySelector(".endingScreen")
let levelNums = document.querySelectorAll(".levelNum")
let appreciation = document.querySelector(".appreciation")
let gameOver = document.querySelector(".gameOver")
let minutesLeft = 0;
let secondsLeft = 0;
let levelOneCleared = false;
let levelTwoCleared = false;
let levelThreeCleared = false;

let timerInterval = ""

// setting the confetti effect
document.querySelector(".confettiClicker").addEventListener("click", function (e){
    party.confetti(this, {
        count: party.variation.range(100, 140),
    });
});

function timer(min,sec){
    minutesLeft = min;
    secondsLeft = sec;

    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

    timerInterval = setInterval(() => {
        secondsLeft -= 1;

        seconds.innerHTML = secondsLeft;
        if (secondsLeft < 10){
            seconds.innerHTML = '0' + secondsLeft;
        }

        if (secondsLeft == 0 && minutesLeft > 0){
            secondsLeft = 60;
        }


        if (secondsLeft == 59 && minutesLeft > 0){
            minutesLeft -= 1;
            minutes.innerHTML = minutesLeft;
        }

        if (secondsLeft == 0 && minutesLeft == 0){
            clearInterval(timerInterval)
            timerFinished = true;

            wholeContent.style.display = 'none';
            loader.style.display = 'none';
            gameOver.style.display = 'block';
            endingScreen.style.display = 'none'
        }

    }, 1000)
}

clicker.addEventListener("click", () => {
    clickedNum += 1;
    counter.innerHTML = clickedNum

    clicksLeftNum -= 1;
    clicksLeftNumDom.innerHTML = clicksLeftNum

    if (clickedNum == 1 && levelOneCleared == false){
        document.querySelector(".confettiClicker").click()
        timer(0,30)
    }

    if (clicksLeftNum == 0){
        if (levelOneCleared == false){
            levelOneCleared = true;
        }
    }

    if (clicksLeftNum == 0){
        if (levelTwoCleared == false){
            levelTwoCleared = true;
        }
    }


    if (clicksLeftNum == 0){
        if (levelThreeCleared == false){
            levelThreeCleared = true;
        }
    }
})

clicker.addEventListener("click", () => {
    if (levelOneCleared == true){
        if (clicksLeftNum == 0){
            clickedNum = 0;
            counter.innerHTML  = clickedNum;

            wholeContent.style.display = 'none'
            loader.style.display = 'block'
            clicksLeftNum = 10;

            setTimeout(()=> {
                loader.style.display = 'none'
                wholeContent.style.display = 'block'
                levelOneCleared = "levelOneCleared";

                clickedNum = 0;
                clickedNum.innerHTML = clickedNum;

                clicksLeftNum = 500;
                clicksLeftNumDom.innerHTML = clicksLeftNum

                levelNums.forEach((levelNum) => {
                    levelNum.innerHTML = "2"
                })

                clearInterval(timerInterval)
                timer(1,30)
            },2000)
        }
    }

    if (levelTwoCleared == true){
        if (clicksLeftNum == 0){
            clickedNum = 0;
            counter.innerHTML  = clickedNum;

            appreciation.innerHTML = "Hmm please don't break your mouse"

            wholeContent.style.display = 'none'
            loader.style.display = 'block'
            clicksLeftNum = 900;

            setTimeout(()=> {
                loader.style.display = 'none'
                wholeContent.style.display = 'block'
                levelTwoCleared = "levelTwoCleared";

                clickedNum = 0;
                clickedNum.innerHTML = clickedNum;

                clicksLeftNum = 900;
                clicksLeftNumDom.innerHTML = clicksLeftNum

                levelNums.forEach((levelNum) => {
                    levelNum.innerHTML = "3"
                })

                clearInterval(timerInterval)
                timer(3,30)
            },2000)
        }
    }

    if (levelThreeCleared == true){
        if (clicksLeftNum == 0){
            wholeContent.style.display = 'none';
            loader.style.display = 'none';
            gameOver.style.display = 'none';
            endingScreen.style.display = 'block'
        }
    }
})
