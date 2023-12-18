function shake(){

    var ball= document.getElementById("ball")
    var messageText = document.getElementById("message")
 
    
    if(messageText != null){
     messageText.parentNode.removeChild(messageText);
    }
    
    
    ball.classList.add("shake");
 
    //Remove the shake class after it stops shaking
    setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
    
    
    setTimeout(function(){ getFortune(); }, 1500);
 }

 function getFortune(){

    var fortunes = ['It is certain', 'Without a doubt', 'Yes, definitely', 'As I see it, yes', 'Most likely', 'Outlook good', 'Not gonna happen', 'Never in this lifetime', 'Haha you wish',]

   
    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    
    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\""+fortune+"\"";
    parent.appendChild(newMessage);
}