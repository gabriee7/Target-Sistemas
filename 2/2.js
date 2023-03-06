let verificacao = 34                    //Variavel a ser verificada na sequencia de fibonacci


let pre=0, atu=1, pos=0

do{
    pos = pre + pos
    pre = atu
    atu = pos
}while(pos < verificacao)

if(pos == verificacao) 
    console.log("\nPertence a sequência de Fibonacci! \n")
    else
    console.log("\nNão pertence a sequência de Fibonacci! \n")
