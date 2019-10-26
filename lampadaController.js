const watson = require("./services/watsonConnection")
const yeelight = require("./services/yeelightConnection")

async function enviamsg(texto){
    let cor = await watson.enviaMensagem(texto)
    //cor = "153,247,134"  exemplo de como chega
    //cor = ["153","247","134"] exemplo de como fica qnd usa o 
    console.log(cor)    
    cor = cor.split(",") //split para remover as virgulas e colocar num array
    console.log(cor)
    cor.forEach((element,index) => {
       cor[index] = Number(element) // trocar de string pra numero
    });
    console.log(cor)
    yeelight.mudaCor(cor[0],cor[1],cor[2])
}
function conectaYeelight(){
    yeelight
}
conectaYeelight()


module.exports = {
    enviamsg
}