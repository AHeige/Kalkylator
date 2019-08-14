window.onload = function () {
    
    document.getElementById("equal").addEventListener("click", finish);

    let x = []; // bug-maker...
    let operName = ['add', 'sub', 'mul', 'div']
    let answer = document.getElementById("answer");

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
        clearInput();
    }

    function focusInput(){
        document.getElementById("nr1").focus();
    }

    function clearInput(){
        document.getElementById("nr1").value = ("")
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
        clearInput()
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
