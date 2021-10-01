function myfunction(){
    var x = document.getElementById("demo"),
                 randomNum = Math.floor((Math.random() * 99 ) + 1);
    x.innerHTML = randomNum;
    if(randomNum % 2 == 0){
        document.getElementById("type").innerHTML = "Even";
    }else{
        document.getElementById("type").innerHTML = "odd";
    }
}