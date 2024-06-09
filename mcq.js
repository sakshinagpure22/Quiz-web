// Get the submit button element
var submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener('click', function() {
  // Get the selected answers
  var answer1 = document.querySelector('input[name="q1"]:checked');
  var answer2 = document.querySelector('input[name="q2"]:checked');
  var answer3 = document.querySelector('input[name="q3"]:checked'); 
  var answer4 = document.querySelector('input[name="q4"]:checked'); 
  var answer5 = document.querySelector('input[name="q5"]:checked'); 
  var answer6 = document.querySelector('input[name="q6"]:checked'); 
  var answer7 = document.querySelector('input[name="q7"]:checked');
  var answer8 = document.querySelector('input[name="q8"]:checked');
  var answer9 = document.querySelector('input[name="q9"]:checked');
  var answer10 = document.querySelector('input[name="q10"]:checked');
  var answer11 = document.querySelector('input[name="q11"]:checked');
  var answer12 = document.querySelector('input[name="q12"]:checked');
  var answer13 = document.querySelector('input[name="q13"]:checked');
  var answer14 = document.querySelector('input[name="q14"]:checked');
  var answer15 = document.querySelector('input[name="q15"]:checked');
  var answer16 = document.querySelector('input[name="q16"]:checked');
  var answer17 = document.querySelector('input[name="q17"]:checked');
  var answer18 = document.querySelector('input[name="q18"]:checked');
  var answer19 = document.querySelector('input[name="q19"]:checked');
  var answer20 = document.querySelector('input[name="q20"]:checked');
  var answer21 = document.querySelector('input[name="q21"]:checked');
  var answer22 = document.querySelector('input[name="q22"]:checked');
  var answer23 = document.querySelector('input[name="q23"]:checked');
  var answer24 = document.querySelector('input[name="q24"]:checked');
  var answer25 = document.querySelector('input[name="q25"]:checked');
  var answer26 = document.querySelector('input[name="q26"]:checked');
  var answer27 = document.querySelector('input[name="q27"]:checked');
  var answer28 = document.querySelector('input[name="q28"]:checked');
  var answer29 = document.querySelector('input[name="q29"]:checked');
  var answer30 = document.querySelector('input[name="q30"]:checked');
  var answer31 = document.querySelector('input[name="q31"]:checked');
  var answer32 = document.querySelector('input[name="q32"]:checked');
  var answer33 = document.querySelector('input[name="q33"]:checked');
  var answer34 = document.querySelector('input[name="q34"]:checked');
  var answer35 = document.querySelector('input[name="q35"]:checked');
  var answer36 = document.querySelector('input[name="q36"]:checked');
  var answer37 = document.querySelector('input[name="q37"]:checked');
  var answer38 = document.querySelector('input[name="q38"]:checked');
  var answer39 = document.querySelector('input[name="q39"]:checked');
  var answer40 = document.querySelector('input[name="q40"]:checked');
  var answer41 = document.querySelector('input[name="q41"]:checked');
  var answer42 = document.querySelector('input[name="q42"]:checked');
  var answer43 = document.querySelector('input[name="q43"]:checked');
  var answer44 = document.querySelector('input[name="q44"]:checked');
  var answer45 = document.querySelector('input[name="q45"]:checked');
  var answer46 = document.querySelector('input[name="q46"]:checked');
  var answer47 = document.querySelector('input[name="q47"]:checked');
  var answer48 = document.querySelector('input[name="q48"]:checked');
  var answer49 = document.querySelector('input[name="q49"]:checked');
  var answer50 = document.querySelector('input[name="q50"]:checked');
 
  // Check if all questions have been answered
  if (answer1 && answer2) {
    // Check the answers
    var score = 0;
    
    if (answer1.value === 'b') {
      score++;
    }
    
    if (answer2.value === 'd') {
      score++;
    }

    if (answer3.value === 'b') {
      score++;
    }

    if (answer4.value === 'd') {
      score++;
    }

    if (answer5.value === 'a') {
      score++;
    }
    
    if (answer6.value === 'a') {
      score++;
    }

    if (answer7.value === 'a') {
      score++;
    }

    if (answer8.value === 'b') {
      score++;
    }

    if (answer9.value === 'a') {
      score++;
    }

    if (answer10.value === 'a') {
      score++;
    }

    if (answer11.value === 'b') {
      score++;
    }

    if (answer12.value === 'd') {
      score++;
    }

    if (answer13.value === 'c') {
      score++;
    }

    if (answer14.value === 'd') {
      score++;
    }

    if (answer15.value === 'b') {
      score++;
    }

    if (answer16.value === 'b') {
      score++;
    }

    if (answer17.value === 'c') {
      score++;
    }

    if (answer18.value === 'b') {
      score++;
    }

    if (answer19.value === 'd') {
      score++;
    }

    if (answer20.value === 'd') {
     score++;
    }

    if (answer21.value === 'b') {
      score++;
     }

     if (answer22.value === 'c') {
      score++;
     }

     if (answer23.value === 'a') {
      score++;
     }

     if (answer24.value === 'c') {
      score++;
     }

     if (answer25.value === 'b') {
      score++;
     }

     if (answer26.value === 'a') {
      score++;
     }

     if (answer27.value === 'd') {
      score++;
     }

     if (answer28.value === 'a') {
      score++;
     }

     if (answer29.value === 'c') {
      score++;
     }

     if (answer30.value === 'c') {
      score++;
     }

     if (answer31.value === 'b') {
      score++;
     }

     if (answer32.value === 'b') {
      score++;
     }

     if (answer33.value === 'd') {
      score++;
     }

     if (answer34.value === 'c') {
      score++;
     }

     if (answer35.value === 'd') {
      score++;
     }

     if (answer36.value === 'a') {
      score++;
     }

     if (answer37.value === 'd') {
      score++;
     }

     if (answer38.value === 'c') {
      score++;
     }

     if (answer39.value === 'a') {
      score++;
     }

     if (answer40.value === 'b') {
      score++;
     }

     if (answer41.value === 'a') {
      score++;
     }

     if (answer42.value === 'a') {
      score++;
     }

     if (answer43.value === 'a') {
      score++;
     }

     if (answer44.value === 'd') {
      score++;
     }

     if (answer45.value === 'd') {
      score++;
     }

     if (answer46.value === 'b') {
      score++;
     }

     if (answer47.value === 'd') {
      score++;
     }

     if (answer48.value === 'd') {
      score++;
     }

     if (answer49.value === 'd') {
      score++;
     }

     if (answer50.value === 'b') {
      score++;
     }

     // Display the score
    alert('Your score is: ' + score);
  } else {
    // Prompt the user to answer all questions
    alert('Please answer all questions before submitting.');
   }
  
});
