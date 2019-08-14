window.onload = function () {
    
    document.getElementById("equal").addEventListener("click", finish);
    document.getElementById("col-ac").addEventListener("click", clearInput);
    document.getElementById("col-ac").addEventListener("click", clearYarr);

    let x = []; // bug-maker...
    let operName = ['add', 'sub', 'mul', 'div']
    let numPad = ['col-0','col-1', 'col-2', 'col-3', 
                    'col-4', 'col-5','col-6','col-7',
                    'col-8','col-9'];
    let y = [];
    let answer = document.getElementById("answer");
    let cc;

    for (let i = 0; i < numPad.length; i++){
        let a = document.getElementById(numPad[i])
        a.addEventListener("click", keyPress)
    }

    function returnColorTime(){
    setTimeout(send,50);
    }

    function send(){
        returnColor(cc);
    }

    function returnColor(a){
        $( a ).css("background-color", "#f5f5f0");
    }

    function keyPress(){
        let p = document.getElementById("nr1");
        let c = this;
        let nr = this.innerHTML;
        let k = y.length - 1;
        this.style.backgroundColor = '#999998';
        returnColorTime();
        cc = c;
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
        if (x.length < 1){
            clearYarr();    
            return;
        }
        let num = parseFloat(document.getElementById("nr1").value)
        x.push(num);
        let d = document.getElementById("nr1")
        let c = document.getElementById('answer')
        let active = document.getElementsByClassName('active')[0]
        console.log(calc(x[0], x[1], active.value));
        if (active){
            c.innerHTML = x[0] + ' ' + active.value + ' ' + x[1] + " = " + calc(x[0], x[1], active.value)
            d.value = calc(x[0], x[1], active.value)
        }
        focusInput()
        clearActive()
        //clearInput();
        clearYarr();
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
