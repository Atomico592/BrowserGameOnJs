   


const returnCards = () => {
    const array = ["75", "1", "35", "", "885", "40"]
    const bgColorsArray = ["#f28e37", '#fc73b0', '#8e3dcb', '#94c94d', '#94c94d', '#4db8ec']
     let allDiv = document.createElement('div');
     allDiv.classList.add('cards-block');
    for (let i = 0; i < array.length; i++) {
        let previewCards = document.createElement('div')
        previewCards.className = "div-" + i;
        previewCards.innerText = array[i];
        previewCards.style.backgroundColor = bgColorsArray[i]
        allDiv.append(previewCards)
    }
    return allDiv
}



const clickBtn = (className) => {
    let item = document.querySelector(`.${className}`)
    item.addEventListener('click', (event) => {
        if (className === "main-block-btn") {
            document.getElementById("first-page").style.display = "none";
            document.getElementById("second-page").style.display = "block";
        }
        if (className === "div-0") {
            document.getElementById("second-page").style.display = "none";
            document.getElementById("third-page").style.display = "block";
           if (event.target.className == "div-0") {
              countdown()
           }
        }
    })
}


const countdown = () => {
    
    document.getElementById('counter')
  let p = document.createElement('p')
  let count = 3;
    
    p.className = 'pCount'
    
  const countdown = setInterval(() => {
      p.innerText = count
      counter.append(p)
      count--;
      if (count < 0) {
          document.getElementById("third-page").style.display = "none"
           document.getElementsByClassName("game-page")[0].style.display = "block";
          clearInterval(countdown);
      }
  }, 900);
}




const getRandomCards = (lvl) => {

    const bgColorsArray = ["#f28e37", '#fc73b0', '#8e3dcb', '#94c94d', '#94c94d', '#4db8ec']
    const animationsClass= ["blink","scale","rotate"]
   
    let elem = document.getElementsByClassName('game-field-container')[0]
    let createDiv = document.createElement('div');
    let gameFieldDiv = document.querySelector('.game-field');
    let count = 6;
    let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    if (gameFieldDiv) gameFieldDiv.remove()
    

    for (let k = numbers.length - 1; k > 0; k--) {
        let j = Math.floor(Math.random() * (k + 1));
        [numbers[k], numbers[j]] = [numbers[j], numbers[k]];
    }

    elem.style.backgroundColor = bgColorsArray[lvl - 1];
    createDiv.className = "game-field"
    
         if (lvl >= 4 && lvl < 6) {
            count = 12
        } else if (lvl >= 6 && lvl < 8 ) {
            count = 16
        } else if (lvl >= 8) {
            count = 25
        } 

    for (let i = 1; i <= count; i++) {
        let getRandomNumber;
        switch (lvl) {
            case 1:
                getRandomNumber = numbers[i]
                break;
            case 2:
                getRandomNumber = Math.floor(Math.random() * (100 - 10 + 1)) + 10
                break;
            case 3:
            case 4:
            case 5:
            case 6:
                getRandomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                break;
            case 7:
            case 8:
            case 9:
                getRandomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
                break;
        }
            
        let gameNumCards = document.createElement('div')
        gameNumCards.className = "gameCards"
        
       
            switch (count) {
                case 12:
                    createDiv.style.gridTemplateColumns = "repeat(4, 0fr)"
                    gameNumCards.style.height = "64px"
                    gameNumCards.style.width = "117px"
                    break;
                case 16:
                    createDiv.style.gridTemplateColumns = "repeat(4, 0fr)"
                    createDiv.style.left = "98px"
                    gameNumCards.style.height = "45px"
                    gameNumCards.style.width = "100px"
                    gameNumCards.style.fontSize = "20px"
                    break;
                    case 25:
                        createDiv.style.gridTemplateColumns = "repeat(5, 0fr)"
                        createDiv.style.gridColumnGap = "12px"
                        createDiv.style.gridRowGap = "13px"
                        createDiv.style.left = "80px"
                        gameNumCards.style.height = "37px"
                        gameNumCards.style.width = "89px"
                        gameNumCards.style.fontSize = "18px"
                        break;
                        default:
                            break;
        } 

        
                          if (lvl > 2) {
                              let randomAnimation = Math.floor(Math.random() * 3)
                              if (randomAnimation === 2) {
                                  gameNumCards.innerHTML = `<span class='inner-span'>${getRandomNumber}</span>`
                                  let a = document.getElementsByClassName('inner-span')
                                  a.classList.add(animationsClass[2])
                              } else {
                                  gameNumCards.classList.add(`${animationsClass[Math.floor(Math.random() * 2)]}`)
                              }  
                             }
                    
                      
                        gameNumCards.innerHTML = `<span class='inner-span'>${getRandomNumber}</span>`
                        gameNumCards.style.backgroundColor = bgColorsArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
                        createDiv.append(gameNumCards)
                    } 
                    return createDiv
}


const findTheNumber = () => {
    let currentCard = document.querySelectorAll(".gameCards")
    let random = Math.floor(Math.random() * currentCard.length)
    let getNum = currentCard[random].innerText
    document.querySelector('#toFindWhat').innerText = getNum
    document.addEventListener('click', (e) => {
        if (document.querySelector('.third-page').style.display === "none") {
            if (gameState.currentLvl <= gameState.gameLvl - 1) {
                if (e.target.innerText === getNum) {
                    gameState.currentLvl++
                    if (gameState.bonus !==5) gameState.bonus++
                    gameState.currentUnswer++
                    gameState.points += (Math.floor(Math.random() * (220 - 20 + 1)) + 20) * gameState.bonus
                        letsPlay(gameState.currentLvl)
                    
                } else {
                    // gameState.currentUnswer--
                    // gameState.bonus--
                }
            } else {
                document.querySelector('.game-page').style.display = "none"
            }
        }
    })
    
}



const letsPlay = (num) => {
    document.getElementById("lvl").innerText = `${gameState.currentLvl} - ${gameState.gameLvl}`
    document.getElementById("points").innerText = gameState.points
    document.getElementById("bonus").innerText = `X${gameState.bonus}`
    document.querySelector('#result-page-content-point').innerHTML = gameState.points
    document.querySelector('#result-page-content-answers').innerHTML = `${gameState.currentUnswer} из ${gameState.gameLvl}`
    document.querySelector('#result-page-content-accuracy').innerHTML = `${gameState.incorrectUnswer === 0 ? "100%" : `${(gameState.currentUnswer * 100) / gameState.incorrectUnswer}%`}`
      let item = document.getElementsByClassName('game-field-container')[0]
      item.append(getRandomCards(num))
      findTheNumber()    
}
    


         const startTimer = () => {
             gameState.timer--;
             document.querySelector('.game-field-menu-title-inner-text').innerText = `00:${gameState.timer < 10 ? "0" + gameState.timer : gameState.timer}`
             if (gameState.timer === 0) {
                 clearInterval(timerInterval);
             }
         }

         let timerInterval = setInterval(startTimer, 1000)
    







   
    
 
  







