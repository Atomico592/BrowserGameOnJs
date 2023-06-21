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
    item.onclick = function () {
        if (className == "main-block-btn") {
            document.getElementById("first-page").style.display = "none";
            document.getElementById("second-page").style.display = "block";
        }
        if (className == "div-0") {
            document.getElementById("second-page").style.display = "none";
            document.getElementById("third-page").style.display = "block";
        }
     };
}

// const gountdown = (item) => {
//     let count = 3;
//     let сounter = document.querySelector(`.${item}`)
//     let span = document.createElement('span')
//     const countdown = setInterval(() => {
//          span.innerText = count
//          counter.append(span)
//        count--;
//        if (count < 1) {
//            clearInterval(countdown);
//        }
//    }, 1000);
// }







