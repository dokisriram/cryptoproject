let counter = 1;
setInterval(()=>{
    document.getElementById("timer").innerText = counter;
    counter++;
    if(counter > 60) location.reload();
}, 1000)