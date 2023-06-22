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
  p.className = 'pCount'
  let count = 3;
  const countdown = setInterval(() => {
      p.innerText = count
      counter.append(p)
      count--;
      if (count < 0) {
          document.getElementById("third-page").style.display = "none"
          clearInterval(countdown);
      }
  }, 900);
}


const getRandomCards = (lvl) => {
    const bgColorsArray = ["#f28e37", '#fc73b0', '#8e3dcb', '#94c94d', '#94c94d', '#4db8ec']
        let createDiv = document.createElement('div');
        createDiv.className = "game-field"
        let count = 6;
         if (lvl >= 4 && lvl < 6) {
            count = 9
        } else if (lvl >= 6 && lvl < 8 ) {
            count = 16
        } else if (lvl >= 8) {
            count = 25
        } 

        for (let i = 1; i <= count; i++) {
            let getRandomNumber;
            switch (lvl) {
                case 1 :
                getRandomNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0
                break;
                case 2 :
                getRandomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0
                break;
                case 3 :
                getRandomNumber = Math.floor(Math.random() * (1000 - 0 + 1)) + 0
                break;
                case 7 :
                getRandomNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0
                break;
            }
        
             let div = document.createElement('div')
             div.className = "gameCard-" + i;
             div.className = "test"
             div.innerText = getRandomNumber;
             div.style.backgroundColor = bgColorsArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
             createDiv.append(div)
         }
         return createDiv
}






