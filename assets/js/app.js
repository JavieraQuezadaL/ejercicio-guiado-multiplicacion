const factorial = (numero) => {
    if (numero <= 1) return 1
    return numero * factorial(numero - 1)
}

const main = numero => {
    if (!numero) {
        console.log("No ingresaste un numero")
        return
    }

    if (numero < 1 || numero > 20) {
        console.log("Numero fuera de rango")
        return
    }

    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }

    for (let i = 1; i <= numero; i++) {
        console.log(`El factorial de ${i}! = ${factorial(i)}`)
    }

}

let continuar = true
while (continuar) {
    const input = +prompt("Ingrese un numero")
    main(input)
    continuar = confirm("¿Deseas continuar con el programa?")
}








