const dadosJson = require('./dados.json');              //Recebe os dados do arquivo .json na variável dadosJson

let menorFat, menorDia, maiorFat=0, maiorDia, ignora=0, soma=0, diasMaiorQueMedia=0, media



dadosJson.forEach( (p, index) => {                      //Percorre os dados
    parseFloat(p.valor)
    parseInt(p.dia)

    if(index == 0){                                     //Atribui o primeiro dado às variáveis para comparação posterior
        menorFat = p.valor
        maiorFat = p.valor
    }

    if(p.valor < menorFat && p.valor != 0){             //Verifica menor valor de faturamento
        menorFat = p.valor
        menorDia = p.dia
    }

    if(p.valor > maiorFat){                             //Verifica maior valor de faturamento
        maiorFat = p.valor
        maiorDia = p.dia
    }

    if(p.valor == 0)                                    //Contador de dias ignorados(fins de semana e feriados)
        ignora++

    soma += p.valor                                     //Somatória
})


media = soma / (dadosJson.length - ignora)              //Calcula média ignorando fins de semana e feriados


dadosJson.forEach( p =>{                                
        parseFloat(p.valor)

        if(p.valor > media)                             //Verifica dias com faturamento superior a média mensal
            diasMaiorQueMedia++
})


//Imprime os dados
console.log(`\nO menor valor de faturamento foi de R$ ${menorFat.toFixed(2)} e ocorreu no dia ${menorDia}`)
console.log(`O maior valor de faturamento foi de R$ ${maiorFat.toFixed(2)} e ocorreu no dia ${maiorDia}`)
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${diasMaiorQueMedia}\n`)
