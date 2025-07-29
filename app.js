const text = document.getElementById('typewriterText');
let currentPhrase = []; 
let deleting = false;
let i = 0;
let j = 0;
let time = 500;

const phrases = [
    'Hello! ', 
    'My name is Herb. ', 
    'I am a Front-End Developer, ', 
    'Back-End Developer, ', 
    'and a Full-Stack Engineer. ',
]

function type(){
    if (i < phrases.length){
        if (!deleting && j <= phrases[i].length){
            currentPhrase.push(phrases[i][j]);
            j++;
            text.innerHTML = currentPhrase.join('');
        }
        if (j === phrases[i].length){
            deleting = true;
            time = 200;
        }
        if (deleting && currentPhrase.length > 0){
            currentPhrase.pop();
            text.innerHTML = currentPhrase.join('');
        }
        if (deleting && currentPhrase.length === 0){
            deleting = false;
            time = 500;
            i++;
            j = 0;
        }
        
    }
    setTimeout(type, time * Math.random());
}

type();