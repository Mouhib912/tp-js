let num=Math.ceil(Math.random()*10);
let counter=3;
let play=true;
alert("hello would you like to play a game ?");
alert("OK you have three guesses ");


function player(){
     alert("can you guess my hidden number between 0 and 10 ?");
    while(counter!==0){
        let guess =prompt("your guess : ");

        if ((+guess)===num){
            alert("great !! ");
            break;
        }

        else {
            alert("sorry :( Try again")
            counter--;
            alert(`you have ${counter} guesses left `);
        }
    }

}



while (play===true){
    player();
    if (counter===0){alert("no more guesses");}
    play=confirm("would you like to play again ?");
    counter=3;
    }

alert ("See you later !");