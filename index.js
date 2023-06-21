const returnCards = () => {
    const array = ["75", "1", "35", "", "885", "40"]
    const bgColorsArray = ["#f28e37", '#fc73b0', '#8e3dcb', '#94c94d', '#94c94d', '#4db8ec']
     let allDiv = document.createElement('div');
     allDiv.classList.add('cards-block');
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        div.className = "div-" + i;
        div.innerText = array[i];
        div.style.width = "32%"
        div.style.backgroundColor = bgColorsArray[i]
        allDiv.append(div)
    }
    return allDiv
}







