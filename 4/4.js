let faturamentoMes = [["SP", 67836.43], ["RJ", 36678.66], ["MG", 29229.88], ["ES", 27165.48], ["OUTROS", 19849.53]]

let fatTotal = 0, percentual


faturamentoMes.forEach( f => {                          //Calcula faturamento total do mes
    parseFloat(f[1])
    
    fatTotal += f[1]
})


faturamentoMes.forEach( f => {                          
    
    parseFloat(f[1])
  
    percentual = (f[1] * 100) / fatTotal                //Calcula percentual de cada estado em relação ao faturamento total
    console.log(`O percentual de ${f[0]} em relação ao faturamento total é ${percentual.toFixed(2)}%`)
})