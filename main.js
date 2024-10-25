//Select Elements
let countQuestions = document.querySelector(".count span");
let quizInfo = document.querySelector(".quiz_info");
let removeAfterFinish = document.querySelectorAll(".remove_after_finish");
let bulletContainer = document.querySelector(".bullets .spans");
let spans = document.querySelectorAll(".spans span");
let question = document.querySelector(".quiz_area h2");
let answers = document.querySelectorAll(".answers_area label");
let answersI = document.querySelectorAll(".answers_area input");
let submitButton = document.querySelector(".submit_button");
let category = document.querySelector(".category span");
let resultContainer = document.querySelector(".results");
let countDown = document.querySelector(".count_down");
let control = document.querySelector(".control");
let min = document.querySelector(".count_down .min");
let sec = document.querySelector(".count_down .sec");

let currentIndex = 0;
let rightAnswers = 0;
let duration = 20;
let speed = 1000;
let countDownInterval;

function getQuestions() {
    // let myRequest = new XMLHttpRequest();
    // myRequest.onreadystatechange = function() {
        // if(this.status === 200 && this.readyState === 4) {
            // let questionsObj = JSON.parse(this.responseText);
            let questionsObj = [
                {
                    "title": "when Is Tag Mahl Built?",
                    "answer-1": "1631",
                    "answer-2": "1648",
                    "answer-3": "1650",
                    "answer-4": "1635",
                    "right_answer": "1648",
                    "Category": "history"
                },
                {
                    "title": "what Is Thomas Ideson's First Invention?",
                    "answer-1": "Phongraph",
                    "answer-2": "Lamp",
                    "answer-3": "Photograph",
                    "answer-4": "Car",
                    "right_answer": "Phongraph",
                    "Category": "sience"
                },
                {
                    "title": "Who Is The Most National Team Won The World Cup?",
                    "answer-1": "Brazil",
                    "answer-2": "Germany",
                    "answer-3": "Spain",
                    "answer-4": "France",
                    "right_answer": "Brazil",
                    "Category": "sport"
                },
                {
                    "title": "what Is The Oldest Historical Capital?",
                    "answer-1": "Paris",
                    "answer-2": "Roma",
                    "answer-3": "Damascus",
                    "answer-4": "Bairut",
                    "right_answer": "Damascus",
                    "Category": "history"
                },
                {
                    "title": "what Is The Equation Name That Calculates The Repetition Of Experience In Prospects?",
                    "answer-1": "Bernoulli",
                    "answer-2": "Kirchhoff",
                    "answer-3": "Newton",
                    "answer-4": "Einstein",
                    "right_answer": "Bernoulli",
                    "Category": "sience"
                },
                {
                    "title": "what Is The Language Of The Belgian?",
                    "answer-1": "France",
                    "answer-2": "Arabic",
                    "answer-3": "Brazil",
                    "answer-4": "Spain",
                    "right_answer": "France",
                    "Category": "culture"
                },
                {
                    "title": "when Did The Syrian Grand Revolution?",
                    "answer-1": "1920",
                    "answer-2": "1921",
                    "answer-3": "1922",
                    "answer-4": "1925",
                    "right_answer": "1925",
                    "Category": "history"
                },
                {
                    "title": "what Is The Largest Country In Terms Of Space?",
                    "answer-1": "Russia",
                    "answer-2": "Chaina",
                    "answer-3": "Spain",
                    "answer-4": "Turkay",
                    "right_answer": "Russia",
                    "Category": "geography"
                },
                {
                    "title": "what Is The Minimum Country In Terms Of Space?",
                    "answer-1": "Qatar",
                    "answer-2": "Syria",
                    "answer-3": "Bahrin",
                    "answer-4": "Italy",
                    "right_answer": "Bahrin",
                    "Category": "geography"
                },
                
                {
                    "title": "what Country Has The Highest Life Expectancy?",
                    "answer-1": "Hong Kong",
                    "answer-2": "Roma",
                    "answer-3": "Tokyo",
                    "answer-4": "Dubai",
                    "right_answer": "Hong Kong",
                    "Category": "culture"
                },
                {
                    "title": "who Was The Ancient Greek God Of The Sun?",
                    "answer-1": "lonia",
                    "answer-2": "kris",
                    "answer-3": "Venus",
                    "answer-4": "Apollo",
                    "right_answer": "Apollo",
                    "Category": "history"
                },
                {
                    "title": "What Sports Car Company Manufactures The 911?",
                    "answer-1": "Marcides",
                    "answer-2": "BMW",
                    "answer-3": "Porsche",
                    "answer-4": "Audi",
                    "right_answer": "Porsche",
                    "Category": "sport"
                },
                {
                    "title": "what Year Was The United Nations Established?",
                    "answer-1": "1944",
                    "answer-2": "1945",
                    "answer-3": "1946",
                    "answer-4": "1947",
                    "right_answer": "1945",
                    "Category": "history"
                },
                {
                    "title": "What City Is Known As 'The Eternal City'?",
                    "answer-1": "Damascus",
                    "answer-2": "Roma",
                    "answer-3": "Paris",
                    "answer-4": "Berlin",
                    "right_answer": "Roma",
                    "Category": "history"
                },
                {
                    "title": "Kratos Is The Main Character Of What Video Game Series?",
                    "answer-1": "God Of War",
                    "answer-2": "PES",
                    "answer-3": "FIFA",
                    "answer-4": "GTA",
                    "right_answer": "God Of War",
                    "Category": "gaming"
                },
                {
                    "title": "How Many Bones Do We Have In An Ear?",
                    "answer-1": "One",
                    "answer-2": "Two",
                    "answer-3": "Three",
                    "answer-4": "Four",
                    "right_answer": "Three",
                    "Category": "medicne"
                },
                {
                    "title": "In what Country Is The Chernobyl Nuclear Plant Located?",
                    "answer-1": "Russia",
                    "answer-2": "Ukraine",
                    "answer-3": "Iran",
                    "answer-4": "USA",
                    "right_answer": "Ukraine",
                    "Category": "culture"
                }
            ]
            questionsObj = randomize(questionsObj);
            let qCount = questionsObj.length;
            createBullets(qCount);
            addQuestionData(questionsObj[currentIndex],qCount);
            clearInterval(countDownInterval);
            countDownn(duration,qCount);

            submitButton.onclick = () => {
                let theRightAnswer = questionsObj[currentIndex]["right_answer"];

                checkAnswer(theRightAnswer, qCount);

                currentIndex++;

                //Avoide Error
                showResult(qCount);
                if(currentIndex>=qCount) {
                    currentIndex=qCount-1;
                }
                question.innerHTML = "";
                for(let i=0;i<4;i++) {
                    answers[i].innerHTML = "";
                }

                addQuestionData(questionsObj[currentIndex],qCount);

                handleBullets(currentIndex);

                clearInterval(countDownInterval);
                countDownn(duration,qCount);
            };
        // }
    // };
    // myRequest.open("GET",data,true);
    // myRequest.send();
}
getQuestions();

function createBullets(num) {
    countQuestions.innerHTML = num;

    for(let i=0; i<num; i++) {
        let theBullet = document.createElement("span");
        if(i === 0) {
            theBullet.classList.add("on");
        }
        bulletContainer.appendChild(theBullet);
    }
}
function addQuestionData(obj, num) {
    if(currentIndex < num) {
        category.innerHTML = obj.Category;
        question.innerHTML = obj.title;
        for(let i=0;i<4;i++) {
            answers[i].innerHTML = obj[`answer-${i+1}`];
        }        
    }
}

function checkAnswer(value, num) {
    let chosenAnswer;
    for(let i=0;i<4;i++) {
        if(answersI[i].checked) {
            chosenAnswer = answers[i].innerHTML;
            // chosenAnswer = answersI[i].dataset.name;
        }
    }
    if(chosenAnswer === value) {
        rightAnswers++;
    }
}

function handleBullets(num) {
    for(let i=1;i<=num;i++) {
        bulletContainer.children[i].classList.add("on");
    }
}
function controll() {
    control.children[0].onclick = () => {
        window.history.go(0);
    };
    control.children[1].onclick = () => {
        window.close();
    };
}
controll();
function showResult(num) {
    let theResult;
    if(currentIndex === num) {
        control.classList.add("show");
        quizInfo.innerHTML = "";
        quizInfo.classList.add("center");
        let finish = document.createElement("span");
        finish.innerHTML = "FINISH";
        quizInfo.append(finish);
        for(let i=0;i<removeAfterFinish.length;i++) {
            removeAfterFinish[i].remove();
        }
        if(rightAnswers > (num / 2) && rightAnswers < num) {
            theResult = `<span class="good">Good</span>, ${rightAnswers} From ${num}`;
        } else if(rightAnswers === num) {
            theResult = `<span class="perfect">Perfect</span>, All Answers Is Good`;
        } else {
            theResult = `<span class="bad">Bad</span>, ${rightAnswers} From ${num}`;
        }
        resultContainer.innerHTML = theResult;
    }
}

function countDownn(duration, num) {
    if(currentIndex < num) {
        countDownInterval = setInterval(() => {
            min.innerHTML = min.innerHTML<=10?`0${parseInt(duration/60)}`:parseInt(duration/60);
            sec.innerHTML = sec.innerHTML<=10 && sec.innerHTML>0?`0${parseInt(duration%60)}`:parseInt(duration%60);

            if(--duration < 0) {
                clearInterval(countDownInterval);
                submitButton.click();
            }
        }, speed);
    }
}

function randomize(array) {
    let newArray = [];
    for(let i=0;i<10;i++) {
        newArray[i] = array[Math.floor((Math.random() * 17))];
    }
    return newArray;
}