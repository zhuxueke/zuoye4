function frist(){
    var result=document.getElementById("screenName");
    result.value=0;
  }
  function rec(){
    var one="c";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    if(a.substr(0, 1)=="-"){
      a=a.substr(1,100);
      Submit.value=a;
    }else{
    one="-"+a;
    Submit.value=one;
    }
  }
  function recd(){
    var one=".";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+".";
    Submit.value=one;
  }
  function Remove(){
    var one=0;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    mystringlength=a.length
    a=a.substr(0,mystringlength-1);
    if(a==""){
      a=0;
    }
    Submit.value=a;
  }
  function rec0(){
    var one=0;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"0";
    Submit.value=one;
  }
    function rec00(){
    var one=0;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"00";
    Submit.value=one;
  }
  function rec1(){
    var one=1;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"1";
    Submit.value=one;
  }
  function rec2(){
    var one=2;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"2";
    Submit.value=one;
  }
  function rec3(){
    var one=3;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"3";
    Submit.value=one;
  }
  function rec4(){
    var one=4;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"4";
    Submit.value=one;
  }
  function rec5(){
    var one=5;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"5";
    Submit.value=one;
  }
  function rec6(){
    var one=6;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"6";
    Submit.value=one;
  }
  function rec7(){
    var one=7;
    var Submit=document.getElementById("screenName");
    var a=Submit.value    
    if(a==0){
      a="";
    }
    one=a+"7";
    Submit.value=one;
  }
  function rec8(){
    var one=8;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"8";
    Submit.value=one;
  }
  function rec9(){
    var one=9;
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    if(a==0){
      a="";
    }
    one=a+"9";
    Submit.value=one;
  }
  function add(){
    var one="+";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    mystringlength=a.length;
    var b=a.substr(mystringlength-1,mystringlength);
    if(b=="+"){
      Submit.value=a;
    }else if(b=="-"||b=="/"||b=="*"||b=="."){
      a=a.substr(0,mystringlength-1);
      one=a+"+";
      Submit.value=one;
    }else{
      one=a+"+";
      Submit.value=one;
    }
  }
  function subtract(){
    var one="-";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    mystringlength=a.length;
    var b=a.substr(mystringlength-1,mystringlength);
    if(b=="-"){
      Submit.value=a;
    }
    if(b=="+"||b=="/"||b=="*"||b=="."){
      a=a.substr(0,mystringlength-1);
      one=a+"-";
      Submit.value=one;
    }else{
      one=a+"-";
      Submit.value=one;
  }
}
  function multiply (){
    var one="*";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    mystringlength=a.length;
    var b=a.substr(mystringlength-1,mystringlength);
    if(b=="*"){
      Submit.value=a;
    }
    if(b=="-"||b=="/"||b=="+"||b=="."){
      a=a.substr(0,mystringlength-1);
      one=a+"*";
      Submit.value=one;
    }else{
      one=a+"*";
      Submit.value=one;
  }
}
  function divide(){
    var one="/";
    var Submit=document.getElementById("screenName");
    var a=Submit.value;
    mystringlength=a.length;
    var b=a.substr(mystringlength-1,mystringlength);
    if(b=="/"){
      Submit.value=a;
    }
    if(b=="-"||b=="+"||b=="*"||b=="."){
      a=a.substr(0,mystringlength-1);
      one=a+"/";
      Submit.value=one;
    }else{
      one=a+"/";
      Submit.value=one;
  }
}
  function end(){
    var Submit=document.getElementById("screenName");
    var Su=Submit.value;
    var mystringlength=Su.length;
    var b=Su.substr(mystringlength-1,mystringlength);
    if(b=="-"||b=="/"||b=="*"||b=="+"||b==".")
    {
      if(b==".")
        {
          Su=Su.substr(0,mystringlength-1);
          var c=1;
        }else{
          var mychar="无法计算";
          alert(mychar); 
          var c=0;
          Su=Su.substr(0,mystringlength-1);
          Submit.value=Su;
      }
    }else{
      var c=1;
    }
    if(c==1){ 
     if(Su.indexOf('+')!="-1"){
          var arr=Su.split("+");
          Su=eval(arr.join('+'));
          Submit.value=Su;
    }
     if(Su.indexOf('-')!="-1"){
          var arr=Su.split("-");
          Su=eval(arr.join('-'));
          Submit.value=Su;
    }
     if(Su.indexOf('*')!="-1"){
          var arr=Su.split("*");
          Su=eval(arr.join('*'));
          Submit.value=Su;
    }
     if(Su.indexOf('/')!="-1"){
          var arr=Su.split("/");
          Su=eval(arr.join('/'));
          Submit.value=Su;
    }
  }
}

  window.onload = frist;