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



// Получаем ссылки на элементы
const radioButtons = document.querySelectorAll('input[type="radio"]');
const button = document.querySelector('button');

// Привязываем слушатель событий к radio buttons
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', () => {
    // Если выбран хотя бы один radio button, активируем кнопку
    if (radioButtons[i].checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}
var delay = 3000;
setTimeout(checkAnswer, delay )
function checkAnswer() {

        const LabelButton1 = document.getElementById('answer1');

                 if (jsonData[i].opt1 == jsonData[i].answer) 
                 {
                    LabelButton1 .classList.remove('static-border');
                    LabelButton1 .classList.add('green-border');
                 } 
                 else 
                 {
                    LabelButton1 .classList.remove('static-border');
                    LabelButton1 .classList.add('red-border');
                 }

                 const LabelButton2 = document.getElementById('answer2');

                 if (jsonData[i].opt2 == jsonData[i].answer) 
                 {
                    LabelButton2 .classList.remove('static-border');
                    LabelButton2 .classList.add('green-border');
                 } 
                 else 
                 {
                    LabelButton2 .classList.remove('static-border');
                    LabelButton2 .classList.add('red-border');
                 }

                 const LabelButton3 = document.getElementById('answer3');

                 if (jsonData[i].opt3 == jsonData[i].answer) 
                 {
                    LabelButton3 .classList.remove('static-border');
                    LabelButton3 .classList.add('green-border');
                 } 
                 else 
                 {
                    LabelButton3 .classList.remove('static-border');
                    LabelButton3 .classList.add('red-border');
                 }

                 const LabelButton4 = document.getElementById('answer4');

                 if (jsonData[i].opt4 == jsonData[i].answer) 
                 {
                    LabelButton4 .classList.remove('static-border');
                    LabelButton4 .classList.add('green-border');
                 } 
                 else 
                 {
                    LabelButton4 .classList.remove('static-border');
                    LabelButton4 .classList.add('red-border');
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
