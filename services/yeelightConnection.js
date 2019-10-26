const YeeDevice = require('yeelight-platform').Device
const device = new YeeDevice({ host: "192.168.1.107", port: 55443 })
device.connect()

device.on('deviceUpdate', (newProps) => {
    console.log(newProps)
})

device.on('connected', () => {
    console.log("conectado a lâmpada")
    
})
function desligaLuz(){
    device.sendCommand({"id":1,"method":"set_power","params":["off", "smooth", 500]})
}
function ligaLuz(){
    device.sendCommand({"id":1,"method":"set_power","params":["on", "smooth", 500]})
}
function mudaCor(r,g,b){

    setTimeout(()=>{
        let rgb = geraRGB(r,g,b)
        console.log("rgb gerado:",rgb)
        device.sendCommand({"id":1,"method":"set_rgb","params":[rgb, "smooth", 500]})
        console.log("Enviou a cor ",r,g,b)
    },2000)
}
function geraRGB(r,g,b){
    return (r*65536)+(g*256)+b
}


module.exports = {
    mudaCor,
    geraRGB,
}