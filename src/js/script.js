const telEl = document.querySelector(".tel")


const TEL_NUMBERS = [
    "+998 88 634 12 31 ",
    "+998 88 958 55 44 ",
    "+998 88 444 44 22 ",
    "+998 88 111 25 50 ",
    "+998 88 944 20 01 ",
    "+998 88 411 04 05 ",
   
]

function foo(){
    const interval = setInterval(() =>{
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
        telEl.innerHTML = TEL_NUMBERS[randomNumber]
    },50)
    setTimeout(() => {
        clearInterval(interval)
        // telEl.innerHTML = "+998 88 634 12 31"
    },2500)
}