// each function will correspond to a specific button that will either 
// show or stop showing a gif-stopping the animation as well whenever 
// the button is clicked 
function clicked(){
    if(gif==1){
        document.getElementById("gif").style.display="inline"
        return gif=0
    }else{
        document.getElementById("gif").style.display="none"
            return gif=1;
    }
}
function clicked2(){
    if(gif==1){
        document.getElementById("gif2").style.display="inline"
        return gif=0
    }else{
        document.getElementById("gif2").style.display="none"
            return gif=1;
    }
}
function clicked3(){
    if(gif==1){
        document.getElementById("gif3").style.display="inline"
        return gif=0
    }else{
        document.getElementById("gif3").style.display="none"
            return gif=1;
    }
}