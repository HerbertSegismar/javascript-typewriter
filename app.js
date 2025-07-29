const text = document.getElementById('typewriterText');
let currentPhrase = []; 
let deleting = false;
let i = 0;
let j = 0;

const phrases = [
    'Hello! ', 
    'My name is Herb. ', 
    'I am a Front-End Developer, ', 
    'Back-End Developer, ', 
    'and a Full-Stack Engineer'
]

function type(){
    if (i < phrases.length){
        if (!deleting && j <= phrases[i].length){
            currentPhrase.push(phrases[i][j]);
            text.innerHTML = currentPhrase.join('');
            j++;
        }
        if (j === phrases[i].length){
            i++;
            j = 0;
        }
        
    }
    setTimeout(type, 300);
}

type();