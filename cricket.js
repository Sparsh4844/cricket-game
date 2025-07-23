// let button = document.createElement('Button');
// button.innerText = 'JS Button';

// document.querySelector('.buttons').appendChild(button);

window.alert(`This Game is Just like a Rock-Paper-Seasor

RULES 
Bat - Ball = Bat Win
Ball - Stump = Ball Win
Stump - Bat = Stump`);

let scoreSet = localStorage.getItem('score');
let score;
resetScore(scoreSet);

function resetScore(scoreSet) {
  score = scoreSet ? JSON.parse(scoreSet) : {
    win: 0,
    lost: 0,
    draw: 0,
  };
  
  score.displayScore = function(){
      return `win: ${score.win}, lost: ${score.lost}, draw: ${score.draw}`;
  };
  showResult();
};

// generatig computer choice 
function generateComputerChoice() {
  let rendomNumber = Math.random()*3;

  // console.log(yourChoice);
  // console.log(rendomNumber);
  
  if(rendomNumber>0 && rendomNumber<=1){
    return 'Bat';
  } else if(rendomNumber>1 && rendomNumber<=2) {
    return'Ball';
  } else {
    return 'Stump';
  }
} 

// generate result
function generateResult(yourChoice,computerChoice) {
  
  // let computerChoice = generateComputerChoice();
  if(yourChoice===undefined || computerChoice===undefined){
    return undefined;
  }else if(computerChoice===yourChoice){
    score.draw++;
    return 'Draw';
  } else if(yourChoice==='Bat'){
    if(computerChoice==='Ball'){
      score.win++;
      return 'You Won';
    } else {
      score.lost++;
      return 'Computer Won';
    }
  } else if(yourChoice==='Ball'){
    if(computerChoice==='Bat'){
      score.lost++;
      return 'Computer Won';
    } else {
      score.win++;
      return 'You Won';
    }
  } else {
    if(computerChoice==='Bat'){
      score.win++;
      return 'You Won';
    } else {
      score.lost++;
      return 'Computer Won';
    }
  } 

  // storing result
  //   localStorage.setItem('score',JSON.stringify(score));

  // window.alert(`you have chosen ${yourChoice}. computer choice ${computerChoice}
  //   ${result}
  //   ${score.displayScore()}`);
}

// show result
function showResult(yourChoice,computerChoice,result) {

  // if(yourChoice !== undefined){
  //   computerChoice = generateComputerChoice();
  // } else {
  //   computerChoice = undefined;
  // }
  yourChoice !== undefined ? computerChoice = generateComputerChoice() : computerChoice = undefined;


  // if(yourChoice !== undefined){
  //   result = generateResult(yourChoice,computerChoice);
  // } else {
  //   result = undefined;
  // }
  (yourChoice !== undefined || computerChoice !== undefined) ? result = result = generateResult(yourChoice,computerChoice) : result = undefined;

// storing result
  localStorage.setItem('score',JSON.stringify(score));
  
  // window.alert(`you have chosen ${yourChoice}. computer choice ${computerChoice}
  // ${result}
  // ${score.displayScore()}`);

  // output showing on page ;
  // show user move 
  document.querySelector('#user-move').innerText =
    yourChoice !== undefined ? `you has chosen ${yourChoice}.` : '' ;
  // show computer move 
  document.querySelector('#computer-move').innerText = 
    computerChoice !== undefined ? `computer has chosen ${computerChoice}.` : '';
  // show result 
  let access = document.querySelector('#get-result');
  if(result==='You Won'){
    access.classList.remove('js-draw');
    access.classList.remove('js-lost');
    access.classList.add('js-win');
  } else if(result==='Computer Won') {
    access.classList.remove('js-draw');
    access.classList.remove('js-win');
    access.classList.add('js-lost');
  } else {
    access.classList.remove('js-win');
    access.classList.remove('js-lost');
    access.classList.add('js-draw');
  }
  access.innerText = 
    result !== undefined ? `${result}.` : '';
  // show score
  document.querySelector('#score').innerText = `${score.displayScore()}.`;

}

