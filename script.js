// Suma de parseInts recursivos

function NumRecur(n,k) {
    if (n.length ===1){
        return parseInt(n);
    }

    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += parseInt(n[i]);
    }

    sum *= k;
    console.log(sum);
    
    return NumRecur(sum.toString(), 1);
}
let n = String(prompt("Ingrese el numero a sumar"));
let k = parseInt(prompt("Ingrese el numero que desea multiplicar"));
console.log(NumRecur(n,k));


