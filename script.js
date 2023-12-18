


















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
 









































  // let canvas = document.getElementById('resultsChart');
  // let chartImageUrl = canvas.toDataURL('image/png');

  // doc.addImage(chartImageUrl, 'PNG', 120, 45, 75, 75); // Adjust position and size as needed

  // doc.line(50, 20, 50, 80);

  const correctAnswers = calculateScore();
  const incorrectAnswers = questions.length - correctAnswers;
  yPos += 10; // Adjusted yPos after adding questions
  doc.setFontSize(10); // Decrease font size for visualization
  doc.text('Visualization', 23, yPos + 20, { angle: 90 }); // Add vertical text
  doc.rect(25, yPos, correctAnswers * 3, 20, 'F'); // Bar for correct answers
  doc.rect(25 + correctAnswers * 3, yPos, incorrectAnswers * 3, 20); // Bar for incorrect answers
  doc.setFontSize(8);
  doc.text(`Correct [ filled ]: ${correctAnswers}`, 25, (yPos += 24));
  doc.text(`Incorrect [ no fill ]: ${incorrectAnswers}`, 55, (yPos));
  doc.setFontSize(10);
  /**
   * Generate personalized feedback
   * ------------------------------
   */
  let feedback = '';
  if (scorePercentage >= 80) {
    feedback = 'Excellent work! Keep it up!';
  } else if (scorePercentage >= 50) {
    feedback = 'Good effort! Review the incorrect answers to improve further.';
  } else {
    feedback =
      'It looks like you might need some more practice. Try reviewing the material and retaking the quiz.';
  }
  doc.text(feedback, 25, (yPos += 5)); // Add feedback
  doc.line(20, 270, 190, 270); // Add horizontal line
  /**
   * Save the PDF with the name "Quiz Report.pdf"
   * --------------------------------------------
   */
  doc.save('Quiz Report.pdf');
}
/** 