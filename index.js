


const returnCards = () => {
    const array = ["75", "1", "35", "", "885", "40"]
    const bgColorsArray = ["#f28e37", '#fc73b0', '#8e3dcb', '#94c94d', '#94c94d', '#4db8ec']
     let allDiv = document.createElement('div');
     allDiv.classList.add('cards-block');
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div')
        div.className = "div-" + i;
        div.innerText = array[i];
        div.style.backgroundColor = bgColorsArray[i]
        allDiv.append(div)
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
    
  let сounter = document.getElementById('counter')
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
    const animations = ["blink .4s ease-in infinite alternate", "scale .4s ease-in infinite alternate", "rotate .6s linear infinite"]
   
    let item = document.getElementsByClassName('game-field-container')[0]
    let createDiv = document.createElement('div');
    let gameFieldDiv = document.querySelector('.game-field');
    let count = 6;
    let numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    if (gameFieldDiv) gameFieldDiv.remove()
    

    for (let k = numbers.length - 1; k > 0; k--) {
        let j = Math.floor(Math.random() * (k + 1));
        [numbers[k], numbers[j]] = [numbers[j], numbers[k]];
    }

    item.style.backgroundColor = bgColorsArray[lvl - 1];
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
                case 2 :
                getRandomNumber = Math.floor(Math.random() * (100 - 10 + 1)) + 10 
                break;
                case 3 :
                    case 4:
                case 5:
                    case 6:
                getRandomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100
                break;
                case 7 :
                    case 8:
                        case 9:
                getRandomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
                break;
            }
            
             let div = document.createElement('div')
             div.className = "gameCards"
            if (lvl > 2) div.style.animation = `${animations[Math.floor(Math.random() * 3)]}`

            switch (count) {
                case 12:
                    createDiv.style.gridTemplateColumns = "repeat(4, 0fr)"
                    div.style.height = "64px"
                    div.style.width = "117px"
                    break;
                case 16:
                    createDiv.style.gridTemplateColumns = "repeat(4, 0fr)"
                    createDiv.style.left = "98px"
                    div.style.height = "45px"
                    div.style.width = "100px"
                    div.style.fontSize = "20px" 
                    break;
                case 25:
                    createDiv.style.gridTemplateColumns = "repeat(5, 0fr)"
                    createDiv.style.gridColumnGap = "12px"
                    createDiv.style.gridRowGap = "13px"
                    createDiv.style.left = "80px"
                    div.style.height = "37px"
                    div.style.width = "89px"
                    div.style.fontSize = "18px"
                    break;
                default:
                    break;
            } 
            div.innerText = getRandomNumber
            //  div.innerHTML = `<span>${getRandomNumber}</span>`;
            //  div.firstChild.style.animation = "rotate .6s linear infinite"
             div.style.backgroundColor = bgColorsArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
             createDiv.append(div)
         } 
         return createDiv
}


const findTheNumber = () => {
    let gameField = document.querySelector('.game-field').childNodes  
    let item = Math.floor(Math.random() * gameField.length)
    let getNum = gameField[item].innerText
    document.querySelector('#toFindWhat').innerText = getNum
        
    document.addEventListener('click', (e) => {
        if (gameState.currentLvl <= gameState.gameLvl - 1)
        if (e.target.innerText === getNum) {
            gameState.currentLvl = gameState.currentLvl + 1
            letsPlay(gameState.currentLvl)
        }
    })
    
}



  const letsPlay = (num) => {
        document.getElementById("lvl").innerText = `${gameState.currentLvl} - ${gameState.gameLvl}`
        document.getElementById("points").innerText = gameState.points
        document.getElementById("bonus").innerText = gameState.bonus
      let item = document.getElementsByClassName('game-field-container')[0]
      item.append(getRandomCards(num))
        findTheNumber()
  }





