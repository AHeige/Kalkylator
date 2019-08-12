window.onload = function () {
    
    /*document.getElementById("subtr").addEventListener("click", subtraction);
    document.getElementById("multi").addEventListener("click", multiplication);
    document.getElementById("divis").addEventListener("click", division);*/
    document.getElementById("addit").addEventListener("click", numberPlus);
    document.getElementById("subtr").addEventListener("click", numberMinus);
    document.getElementById("equal").addEventListener("click", finish);

    var x = [];
    var plus = document.getElementById("addit");
    var minus = document.getElementById("subtr");
    var check = 0;
    var answer = document.getElementById("answer");

    function focusInput(){
        let f = document.getElementById("nr1");
        f.focus();
    }

    function clearInput(){
        let f = document.getElementById("nr1");
        f.value = ("");
    }

    function addActive(activeclass){
        console.log(check);
        var a = document.getElementById(activeclass);
        if (check == "addit"){
            a.classList.add("active");
            minus.classList.remove("active");
        }else
        if (check == "subtr"){
            a.classList.add("active");
            plus.classList.remove("active");
        }
    }

    function clearClass() {
       plus.classList.remove("active");
       minus.classList.remove("active");
    }

    function numberPlus(){
        var nr1 = parseFloat(document.getElementById("nr1").value);
        x.push(nr1);
        answer.innerHTML = x[0] + " +";
        b = "addit";
        check = b;
        addActive(b);
        focusInput();
        clearInput();
    }

    function numberMinus(){
        var nr1 = parseFloat(document.getElementById("nr1").value);
        x.push(nr1);
        answer.innerHTML = x[0] + " -";
        b = "subtr";
        check = b;
        addActive(b);
        focusInput();
        clearInput();
    }

    function finish(){
        var nr2 = parseFloat(document.getElementById("nr1").value);
        x.push(nr2);
            var c = document.getElementById('answer');
            if (plus.classList.contains("active")){
                let k = x[0] + x[1];
                c.innerHTML = x[0] + " + " + x[1] + " = " + k;
            }else
            if (minus.classList.contains("active")){
                let k = x[0] - x[1];
                c.innerHTML = x[0] + " - " + x[1] + " = " + k;
            }
        focusInput();
        clearInput();
        clearClass();
        x = [];
    }

    //under här är för senare tillfälle när implementering av multi + division
    
    function multiplication() {
        var a = parseFloat(document.getElementById('nr1').value);
        var b = parseFloat(document.getElementById('nr2').value);
        var c = document.getElementById('answer');
        var d = a * b;
        c.innerHTML = "Ditt svar:<br>" + d;
    }

    function division() {
        var a = parseFloat(document.getElementById('nr1').value);
        var b = parseFloat(document.getElementById('nr2').value);
        var c = document.getElementById('answer');
        var d = a / b;
        c.innerHTML = "Ditt svar:<br>" + d;
    }

}
