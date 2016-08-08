var questions = [
   {
	  question: 'What temperature is water the most dense?',
	  answer1: '0 degree celcius',
	  answer2: '100 degree celcius',
	  answer3: '4 degree celcius',
	  correctAnswer: 3
   },
   {
	  question:'Why are ice castle blue?',
	  answer1: 'Because magic',
	  answer2: 'Because they would look silly red',
	  answer3: 'Because blue has short wavelength',
	  correctAnswer: 3
   },
   {
	   question: 'How many electrons in hydrogen?',
	   answer1: 'One',
	   answer2: 'Five',
	   answer3: 'Two',
	   correctAnswer: 1
   }
	 
];

var readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout);
var questionNumber = 0;
function askQuestion(item){
	console.log("Question:" +item.question);
	console.log();
	console.log("1)" +item.answer1);
	console.log("2)" +item.answer2);
	console.log("3)" +item.answer3);
	console.log();
	console.log('Type the Number for your Answer:');
	r1.once('line',function(userInput) {
		var userAnswer = parseInt(userInput);
		if(userAnswer ==item.correctAnswer){
			console.log('CORRECT!');
			
		}
		else{
			console.log('WRONG!');
		}
		console.log('-------------');
		questionNumber++;
		if(questionNumber < questions.length){
		askQuestion(questions[questionNumber]);
		}else{
			r1.close();
		}
	});
	r1.prompt();
	
}
askQuestion(questions[questionNumber]);
