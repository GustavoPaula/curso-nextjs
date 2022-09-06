export default function mega(qtde = 6, numbers = []) {
    if(qtde < 6 && qtde > 60) {
        throw "Quantidade inválida!"
    }

    if(numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numberRandom = parseInt(Math.random() * (60 - 1) + 1)
    if(!numbers.includes(numberRandom)) {
        return mega(qtde, [...numbers, numberRandom])
    } else {
        return mega(qtde, numbers)
    }
}