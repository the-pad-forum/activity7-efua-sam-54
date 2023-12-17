


















 // Generate personalized feedback
 let feedback = '';

 if (scorePercentage >= 80) {
   feedback = 'Excellent work! Keep it up!';
 } else if (scorePercentage >= 50) {
   feedback = 'Good effort! Review the incorrect answers to improve further.';
 } else {
   feedback =
     'Looks like you might need some more practice. \nTry reviewing the material and retaking the quiz.';
 }

 resultsHTML += `<p class="feedback">${feedback}</p>`;

 // Compile results for each question
 