var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.round(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.round(Math.random() * 5);
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    const userAnswer = predictImage();
    if (userAnswer == answer) {
        score++;
        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`)
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Well done! Your garden is in full bloom. Start again');
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
            score = 0;
        }
    } else {
        if (score > 0) {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
            score--;
            // alert(`Wrong Answer !! Your score is ${score}`);
        }
    }
}