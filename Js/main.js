function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
        if(myRequest.status === 200 && myRequest.readyState === 4) {
            console.log(myRequest.responseText);
        }
    };
    myRequest.open("GET","../questions.json",true);
    myRequest.send();
}

getQuestions();