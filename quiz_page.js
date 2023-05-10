  function send() {
   number1= document.getElementById("number1").value;
   number2= document.getElementById("number2").value;
   actual_answer=parseInt(number1) * parseInt(number2);
  }

  question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
  input_box = "<br>Answer = <input type='text' id ='input_check_box'>";
  check_button = "<br></br><button class='btn-btn-info' onclick='check()'>Check</button>";
  row = question_number + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value="";
  document.getElementById("number2").value="";
  {
   if (answer == game )
   { 

   

   if (answer_turn == "player_1_name")
   {
     player_1_score = player_1_score + 1;
     document.getElementById("faith").innerHTML = player_1_score;
   }
   else
   {
       player_2_score = player_2_score + 1;
       document.getElementById("color").innerHTML = player_2_score;
   }
}
   if (question_turn == "player_1_name")
   {
       question_turn == "player_2_name"
       document.getElementById("ask").innerHTML = "question_turn" + player_2_name;
   }
   else
   {
       question_turn == "player_1_name"
       document.getElementById("ask").innerHTML = "question_turn" + player_1_name;
   }

   if (answer_turn == "player_1_name")
   {
       answer_turn == "player_2_name"
       document.getElementById("turn").innerHTML = "answer_turn" + player_2_name;
   }
   else
   {
       answer_turn == "player_1_name"
       document.getElementById("turn").innerHTML = "answer_turn" + player_1_name;
   }
}
