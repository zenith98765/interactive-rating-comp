var sic;
var kick= 0;

function displaycongra(e){
    kick = 1;
    e = e || window.event;
    var target = e.target || e.srcElement
    let numm = document.getElementsByClassName("num");
    for (let i = 0; i < numm.length; i++) {
        numm[i].style.backgroundColor = "hsl(214, 19%, 26%)";
        numm[i].style.color = "hsl(217, 12%, 63%)";
    }

    target.style.backgroundColor = "hsl(216, 12%, 54%)";
    target.style.color = "white";
    sic = target.innerText;

    
    
}

function sumb(){
    if(!kick){
        alert("Select a rating");
        return;
    }

    let ratbox = document.getElementById("rat");
    let congra = document.getElementById("con");
    let res = document.getElementById("res");
    ratbox.style.display = "none";
    congra.style.display = "flex";
    res.innerText = `You selected ${sic} out of 5`
    


}


