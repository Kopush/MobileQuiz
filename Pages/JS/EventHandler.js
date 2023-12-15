// json array movement variable
var i = 0;
var correctCount = 0 ;
//initialize the first question
generate(0);
// generate from json array data with index
function generate(index) {
    document.getElementById("question").innerHTML = jsonData[index].q;
    document.getElementById("optt1").innerHTML = jsonData[index].opt1;
    document.getElementById("optt2").innerHTML = jsonData[index].opt2;
    document.getElementById("optt3").innerHTML = jsonData[index].opt3;
    document.getElementById("optt4").innerHTML = jsonData[index].opt4;
}

var delay = 3000;
setTimeout( checkAnswer, delay )

function checkAnswer() {
        

        if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer || 
        document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer    ||
        document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer    ||
        document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer)
          {
             // получение элемента по селектору
             let styles = `border: 3px #14FF00;`;
             document.querySelector("#answer1").style = styles;

             document.querySelector("#answer2").style = styles;

             document.querySelector("#answer3").style = styles;

             document.querySelector("#answer4").style = styles;
          }
          else
          {

            let styles2 = `border: 3px #FF7979;`;
             document.querySelector("#answer1").style = styles2;

             document.querySelector("#answer2").style = styles2;

             document.querySelector("#answer3").style = styles2;

             document.querySelector("#answer4").style = styles2;
          }

    if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
       correctCount++;
    }
    if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
        correctCount++;
    }
    if (document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer) {
        correctCount++;
    }
    // increment i for next question
     i++;
       if(jsonData.length-1 < i)
    {
        document.write("<body style='margin:0px;overflow: hidden;'>");
        document.write("<div style='background-image:url(C:/Users/serg-/Documents/GitHub/MobileQuiz-1/Pages/JS/Resources/BackgroundComplete.png);width:411px;height:882px'></div>");
        document.write("<form action=Quiz.html style='margin-left: -38px;width:300px;height:300px;position:absolute;margin-top:426px;'>"); 
        document.write("<button style='border:none;margin-top: -1211px;margin-left: 89px;width: 90px;height: 90px;position:absolute;background-image:url(C:/Users/serg-/Documents/GitHub/MobileQuiz-1/Pages/JS/Resources/quiz1.svg);'>");
        document.write("</form>");
        document.write("<div style='margin-left: -10px;margin-top: 210px;position:absolute;color:#ffffff;font-size:18pt;text-align:center;color: #5B1CAE;width: 316px;height: 138px;border-radius: 14px;background: #FFF;box-shadow: 0px 2px 13px 4px rgba(157, 87, 227, 0.25);align-items: center;font-family: Poppins;font-weight: 500;'>Your score is : "+correctCount+"</div>");
        document.write("<img style='background-image: url(C:/Users/serg-/Documents/GitHub/MobileQuiz-1/Pages/JS/Resources/completed1.png);margin-left: -38px;width:300px;height:300px;position:absolute;margin-top:426px;'></img>");
        document.write("</body>");
    }
    generate(i);     

    
    
}
