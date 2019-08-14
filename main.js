window.onload = function () {
    
    document.getElementById("equal").addEventListener("click", finish);
    document.getElementById("col-ac").addEventListener("click", clearInput);

    let x = []; // bug-maker...
    let operName = ['add', 'sub', 'mul', 'div']
    let numPad = ['col-0','col-1', 'col-2', 'col-3', 
                    'col-4', 'col-5','col-6','col-7',
                    'col-8','col-9'];
    let y = [];
    let answer = document.getElementById("answer");

    for (let i = 0; i < numPad.length; i++){
        let a = document.getElementById(numPad[i])
        a.addEventListener("click", keyPress)
    }
    
    function keyPress(){
        let p = document.getElementById("nr1");
        let nr = this.innerHTML;
        let k = y.length - 1;
            if(y.length < 1){
                p.value = nr;
                y.push(nr);
                console.log("if")
                return;
            } else
                p.value = y.join('') + nr;
                console.log("to string: "+y.join(''));
                y.push(nr)
                console.log("else")
                console.log("y length: "+y.length)
                console.log("k is: "+k);
    }

    for (let i = 0; i < operName.length; i++){
        let btn = document.getElementById(operName[i])
        btn.addEventListener("click", fetchNumber)
    }

    function fetchNumber(){
        let num = parseFloat(document.getElementById("nr1").value);
        x.push(num);
        answer.innerHTML = x[0] + ' ' + this.innerHTML;
        console.log(this);
        toggleActiveOperator(this)
        focusInput();
        clearYarr();
        /*clearInput();*/
    }

    function focusInput(){
        document.getElementById("nr1").focus();
    }

    function clearInput(){
        document.getElementById("nr1").value = ("")
        clearYarr();
    }

    function clearYarr(){
        y = [];
    }

    function toggleActiveOperator(buttonNode){
        clearActive()
        buttonNode.classList.add('active')
    }

    function clearActive() {
        let all = document.getElementsByClassName('oper')
        for (let i = 0; i < all.length; i++){
            all[i].classList.remove('active')
        }
    }

    function finish(){
        let num = parseFloat(document.getElementById("nr1").value)
        x.push(num);
        let c = document.getElementById('answer')
        let active = document.getElementsByClassName('active')[0]
        if (active){
            c.innerHTML = x[0] + ' ' + active.value + ' ' + x[1] + " = " + calc(x[0], x[1], active.value)
        }
        focusInput()
        /*clearInput()*/
        clearActive()
        x = []
    }

    function calc (a, b, operator) {
        switch (operator) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '/':
                if (b === 0){
                    return NaN
                }
                return a / b
            case '*':
                return a * b
            default:
                console.error('Unvalid operator: ' + operator)
                return NaN
        }
    }
}
