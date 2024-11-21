const  minum = document.querySelector('.minnumber'),
      maxnum = document.querySelector('.maxnumber'),
       getinput = document.querySelector('#guessnumber'),
       getbtn = document.querySelector('#btn'),
       message1 = document.querySelector('.message1'),
       message2 = document.querySelector('.message2'),
       getgameform = document.querySelector('gamefrom');



const min = 1,
     max = 10,
     winningnum = 5;


     let gameleft = 3;
minum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click',function(e){
    // console.log("hay i ame working");
    // console.log(getinput.value);
    // console.log(typeof getinput.value);


    // let guess = Number(getinput.value);
    // let guess = +getinput.value;
    // console.log(guess);
    // console.log(typeof guess);

    let guess  = parseInt(getinput.value);
    // console.log(guess);
    // console.log(typeof guess);

    if(guess < min || guess > max || isNaN(guess)){
        console.log(`Please enter a number between ${min} to ${max}`);
        message2.textContent = ` Please enter anumber between ${min} to ${max}`;

    }

    if (guess === winningnum){
        //Game over WoN
    }else{
        gameleft --;
        // gameleft -= 1; 2 1


    if(gameleft ===0){
        // Game over Lose 

        // disbaled getinput
        getinput.disabled = true;


        // getinput broder color to red 
        getinput.computedStyleMap.broderColor = "red";

        // message
        message1.textContent = `Game OVer, You lost, The  correct number is  ${winningnum}`;
        message1.style.color = "red"
        
    }else{
        //Continue Game

        //get input broder color to red
        getinput.style.broderColor= "red";

        // message1
        message1.textContent = `${guess} is not correct!, ${gameleft} guess left.`;
        message1.style.color = "blue"
    }
        
}


    e.preventDefault();
});

function setmessage1(msg,color){
    message1.textContent = msg;
    message2.style.color = color;

}


function setmessage2(msg,color){
    message1.textContent = msg;
    message2.style.color = color;
    //1s = 1000ms
    setTimeout(function(){
        message2.textContent = "";
    },2000);

}

function gameover (won,msg){
    let color;

    won == true?  color  = "green" : color = "red";

    // disabled getinput
    getinput.style.broderColor = color;

    // message1
    setmessage1(msg,color)


    // play again ?
        getbtn.value = "Play Again";

    }
 
getgameform.addEventListener('mousedown',function(e){
    console.log(e.target);

    e.target.classList.contain('playagin');

    if(e.target.className === "btn playagin"){
        console.log('i am working');
        window.location.reload();
    }
});


function randomnum(1.10){
    let getrdm = Math.floor(Math.random()*(max,min)+min);
    return getrdm;
}

console.log(randomnum(1,10));
console.log(winningnum);


// 31JS 