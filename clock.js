function clockInit() {
    var datetime    =   new Date()
    var hours       =   30*datetime.getHours();
    var minutes     =   6*datetime.getMinutes();
    var seconds     =   6*datetime.getSeconds();
    document.getElementById("secondHand").style.cssText="-webkit-transform:rotate("+seconds+"deg)";   
    document.getElementById("minuteHand").style.cssText="-webkit-transform:rotate("+minutes+"deg)";   
    document.getElementById("hourHand").style.cssText="-webkit-transform:rotate("+hours+"deg)";   
    setTimeout(clockInit, 1000)
}
    
window.onload = clockInit;