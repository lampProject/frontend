const YeeDevice = require('yeelight-platform').Device

const device = new YeeDevice({ host: "192.168.1.107", port: 55443 })

device.connect()

device.on('deviceUpdate', (newProps) => {
    console.log("teste:", newProps)
})

device.on('connected', () => {
    setTimeout(() => {
        device.disconnect()
    }, 20000)

})    

function desligaLuz(){
    device.sendCommand({"id":1,"method":"set_power","params":["off", "smooth", 500]})
}
function ligaLuz(){
    device.sendCommand({"id":1,"method":"set_power","params":["on", "smooth", 500]})
}
function mudaCor(r,g,b){
    let rgb = geraRGB(r,g,b)
    device.sendCommand({"id":1,"method":"set_rgb","params":[rgb, "smooth", 500]})
}
function geraRGB(r,g,b){
    return (r*65536)+(g*256)+b
}


module.exports = {
    mudaCor,
    geraRGB,
}