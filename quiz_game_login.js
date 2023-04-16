#output
{
background:
white;
border-radius: 10px;
border-top: 10px solid #AA4465;
padding: 10px;
float: none;
text-align: left;
}

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2)
}

qusetion_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
imput_box = "<br>" Answer : <imput type= "text" id="imput_check_box"></imput>
check_botton = "<br><br><botton class= "btn btn-info" onclick="check>check<boutton>"

question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box'>";
check button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button;

document.getElementById("output")

document.getElementById(number1).value = ""
document.getElementById(number2).value = ""