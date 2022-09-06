export function mega(qtde = 6, array = []) {

    let trys = 0
    
    const generateRandom = () => {
        let numberRandom = Math.floor(Math.random() * (60 - 1) + 1)
        return checkRepeated(numberRandom)
    }
    
    const checkRepeated = (numberRandom) => {
        if(trys <= 5){
            if(array.includes(numberRandom)){
                trys ++
                return generateRandom()
            } else return numberRandom
        } else throw "Número de tentativas excedidas"
    }

    if(qtde < 6 && qtde > 60) {
        throw "Quantidade inválida!"
    }
    
    for(let i = 0; i < qtde; i ++) {
        array.push(generateRandom())
    }
    
    array.sort((n1, n2) => n1 - n2)
    
    return array 
}