
// Discord.js 

client.on("ready", () => {
    console.log('mesage estoy listo o lista');   
    setInterval(function() {
      var estados = ["mensaje1","mensaje2"]
      let estado = estados[Math.floor(estados.length * Math.random())];
      client.user.setPresence({
        status: "online", //dnd = no molestar, idle = Ausente , invible, online
        activity: {
          name: estado,
          type: "WATCHING", //PLAYING = Jugando, WATCHING = Viendo, LISTENING = Escuchando, STREAMING = En Directo
        }
      })
    }, 60000); 
//tiempo en milisegundos. 60000 = 1 minuto```
