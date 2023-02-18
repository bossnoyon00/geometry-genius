
//Randomly card background color change :
const colors = ["red", "green", "blue", "yellow", "orange", "tomato"];

function changeBackgroundColor(card) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    card.style.backgroundColor = randomColor;
}

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function () {
        changeBackgroundColor(this);
    };
}


