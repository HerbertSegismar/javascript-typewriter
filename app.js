const text = document.getElementById('typewriterText');
let currentPhrase = []; 
let deleting = false;
let i = 0;
let j = 0;
let time = 500;

const phrases = [
    'Hi there! ', 
    'My name is Herb Segis. ', 
    'I am a Front-End Developer, ', 
    'and a Back-End Developer, ', 

    'I use Tailwind to style my Projects ',
    'and JavaScript to make my pages Interactive. ',

    'I am currently working with React and Node.js. ',
    'Also VueJS and Nuxt is on my List ',

    'My goal is to become a Senior Full-Stack Engineer. '
]

function type(){
    if (i < phrases.length){
        if (!deleting && j <= phrases[i].length){
            text.classList.add("typing");
            currentPhrase.push(phrases[i][j]);
            j++;
            text.innerHTML = currentPhrase.join('');
        } 
        else {
            text.classList.remove("typing");
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
        if (i === phrases.length){
            i = 0;
        }
        
    }
    setTimeout(type, time * Math.random());
}

type();