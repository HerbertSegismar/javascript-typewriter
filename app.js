const text = document.getElementById('typewriterText');

const phrases = [
    'Hello!', 
    'My name is Herb', 
    'I am a Front-End Developer', 
    'Back-End Developer', 
    'and a Full-Stack Engineer'
]

function type(){
    for (let i = 0; i < phrases.length; i++){
        text.innerHTML = phrases[i];
    }
    setTimeout(type, 1000);
}

type();