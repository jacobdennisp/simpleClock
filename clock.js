function clockInit() {
    /*DateTime is the Main Variable from Where we are deriving our Hour, Seconds and Minutes*/
    var datetime    =   new Date()
    /*The Angle between the Hour hand is 30 Degres so We Derive the Hours from datetime and Multiply it with 30 to get he exact Alignment.*/
    var hours       =   30*datetime.getHours();
    /*The Angle between the Minute and Seconds hand is 6 Degrees respectively, so We Derive both, the minute and the seconds from datetime and Multiply both with 6 degress to get he exact Alignment.*/
    var minutes     =   6*datetime.getMinutes();    
    var seconds     =   6*datetime.getSeconds();
    /*Once Getting the alignment send that value to the Element with the Help of getElementById Query Selector and Animate it with '-webkite-transform:rotate("pass the angles"deg)'*/
    document.getElementById("secondHand").style.cssText="-webkit-transform:rotate("+seconds+"deg)";   
    document.getElementById("minuteHand").style.cssText="-webkit-transform:rotate("+minutes+"deg)";   
    document.getElementById("hourHand").style.cssText="-webkit-transform:rotate("+hours+"deg)";   
    /*We set the timer such that after every second the function clockInit is Called and the clock keeps ticking*/
    setTimeout(clockInit, 1000)
}
/*The Function is Called when the Page Loads*/
window.onload = clockInit;