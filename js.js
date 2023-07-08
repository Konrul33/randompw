var a=document.getElementById("konrul");

function Password(){
    var pass='';
    var str='abcdefghIijklmnoöprqşsxyz0123456789';
    for(let i=1; i<=8;i++){
        var char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char)
    }
    return pass;
    
}

function pw(){
    a.innerHTML=Password();
}