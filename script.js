const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('input');
const result = document.querySelector('.result');

// Function that adds the value in the Text Box 
function addingValue() {
    if (input.value == 0) {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        buttons[0].classList.add("active");
    }
    else if (input.value == 1) {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        buttons[1].classList.add("active");
    }
    else if (input.value == 2) {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        buttons[2].classList.add("active");
    }
    else if (input.value == 3) {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

        buttons[3].classList.add("active");
    }
    else if (input.value > 3) {
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }

    }

    if (input.value === '') {
        result.innerHTML = `you should pay`;
    }
    else {
        result.innerHTML = `you Bought ${input.value} Coffee :- total is ${input.value * 200} `;
    }
    return vals = input.value;
}

input.addEventListener('input', (e) => {
    addingValue();
    console.log(e)

    let notification = new Audio('sounds/Yamete_Kudasai.mp3');
    notification.play()
})

result.addEventListener('click', () => {
    if (vals >= 1) {
        alert(`You should pay ${(vals * 200)}`);
        alert(`Thanks for paying ${vals * 200}`);
    }
    else {
        alert(`Please add some value other than 0`);
    }
})



for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        input.value = this.innerHTML ;
        addingValue()

        let notification = new Audio('sounds/Onichan.mp3');
        notification.play()
    })
}


document.addEventListener('keydown', (e)=>{
    if(e.keyCode === 32){
        let madarc = new Audio('sounds/ara_ara.mp3');
        madarc.play();
    }
})