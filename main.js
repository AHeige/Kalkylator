window.onload = function () {
    
    document.getElementById("item-equ").addEventListener("click", finish);
    document.getElementById("item-ac").addEventListener("click", clearInput);
    document.getElementById("item-ac").addEventListener("click", clearYarr);
    document.getElementById("item-ac").addEventListener("click", clearXarr);
    document.addEventListener("keydown", keyDown, false);
    document.getElementById("nr1").addEventListener("input", whenInput);

function whenInput(){
    console.log("input happening");
}

function keyDown(e) {
    let i = e.keyCode;
    switch (i){
        case 48:
            console.log("0");
            return;
        case 49:
            console.log("1")
            return;
        case 50:
            console.log("2");
            return;
        case 51:
            console.log("3");
            return;
        case 52:
            console.log("4");
            return;
        case 53:
            console.log("5");
            return;
        case 54:
            console.log("6");
            return;
        case 55:
            console.log("7");
            return;
        case 56:
            console.log("8");
            return;
        case 57:
            console.log("9");
            return;
        case 190:
            console.log(".");
            return;
    }
}

    let x = []; // bug-maker...
    let operName = ['item-add', 'item-sub', 'item-mul', 'item-div']
    let numPad = ['item-0','item-1', 'item-2', 'item-3', 
                    'item-4', 'item-5','item-6','item-7',
                    'item-8','item-9'];
                                
    let y = [];
    let answer = document.getElementById("answer");

    for (let i = 0; i < numPad.length; i++){
        let a = document.getElementById(numPad[i])
        a.addEventListener("click", keyPress)
    }


    function keyPress(){
        let p = document.getElementById("nr1");
        let c = this;
        let nr = this.innerHTML;
        let k = y.length - 1;
        //this.style.backgroundColor = '#999998';
            if(y.length < 1){
                p.value = nr;
                y.push(nr);
                return;
            }else
                p.value = y.join('') + nr;
                y.push(nr)
    }

    for (let i = 0; i < operName.length; i++){
        let btn = document.getElementById(operName[i])
        btn.addEventListener("click", fetchNumber)
    }

    function fetchNumber(){
        let num = parseFloat(document.getElementById("nr1").value);
        x.push(num);
        answer.innerHTML = x[0] + ' ' + this.innerHTML;
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
        document.getElementById("answer").innerHTML = ("")
    }

    function clearYarr(){
        y = [];
    }

    function clearXarr(){
        x = [];
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
        if (x.length < 1){
            clearYarr();    
            return;
        }
        let num = parseFloat(document.getElementById("nr1").value)
        x.push(num);
        let d = document.getElementById("nr1")
        let c = document.getElementById('answer')
        let active = document.getElementsByClassName('active')[0]
        console.log(calc(x[0], x[1], active.innerHTML));
        if (active){
            c.innerHTML = x[0] + ' ' + active.innerHTML + ' ' + x[1] + " = " + calc(x[0], x[1], active.innerHTML)
            d.value = calc(x[0], x[1], active.innerHTML)
        }
        focusInput()
        clearActive()
        //clearInput();
        clearYarr();
        clearXarr();
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
