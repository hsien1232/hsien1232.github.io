var p=prompt("剪刀/石頭/布");
var computer = Math.random();

if(computer<=0.33){
    computer="剪刀";
}

else if(computer<=0.67){
    computer="石頭";
}

else{
    computer="布";
}

alert("電腦出"+computer);

if(computer==p){
    alert("平手");
}
else{
    
    if(computer="剪刀"){
        
        if(p="石頭"){
            alert("玩家獲勝");
        }
        else{
            alert("電腦獲勝");
        }
    
    }
    else if(computer="石頭"){
        
        if(p="布"){
            alert("玩家獲勝");
        }
        else{
            alert("電腦獲勝");
        }
    
    }
    else{
       
        if(p="剪刀"){
            alert("玩家獲勝");
        }
        else{
            alert("電腦獲勝");
        }
   
    }

}