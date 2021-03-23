function multiplicacion(a, b){
    if(b>0){
        return a + multiplicacion(a, b-1);
    }
    return 0;
}


function division(a, b){
    if(a>1){
        return 1 + division(a-b, b);
    }
    return 0;
}

function factorial(n){
    if(n>1){
        return n * factorial(n-1);
    }
    return 0;
}

function ackermann(m, n){
    if (m == 0){
        return n + 1;
    } else if(m > 0 && n == 0){
        return ackermann(m - 1, 1);
    } else{
        return ackermann(m - 1, ackermann(m,n - 1));
    }
}

function arregloMagico(num){
    let a = [];
    for (let i = 0; i < num; i++) {
        a.push((num*i*i)-num);
    }
    return a;
}

exports.multiplicacion = multiplicacion;
exports.division = division;
exports.factorial = factorial;
exports.ackermann = ackermann;
exports.arregloMagico = arregloMagico;
