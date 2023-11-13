var n1=0;
var n2=0;
var rand;
var total1=0;
var total2=0;
function T1(){
    n1=n1+1;
    if(n1<13)
    {
    document.getElementById("C1").textContent=12-n1+"  Balls left";
    rand=Math.ceil((Math.random()*5)+1);
    if(rand==5)
    {
        rand=0;
    }
    document.getElementById("B11").textContent=rand;
    total1=total1+rand;
    document.getElementById("B21").textContent="TOTAL SCORE: "+total1;
}


}
function T2(){
    n2=n2+1;
    if(n2<13){
    document.getElementById("C2").textContent=12-n2+"  Balls left";
    rand=Math.ceil((Math.random()*5)+1);
    if(rand==5)
    {
        rand=0;
    }
    document.getElementById("B12").textContent=rand;
    total2=total2+rand;
    document.getElementById("B22").textContent="TOTAL SCORE: "+total2;
}



}
