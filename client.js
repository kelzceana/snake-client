const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
   // interpret incoming data as text
   conn.setEncoding('utf8');
   conn.on("connect", () =>{
     console.log("Successfully connected to game server")
     conn.write("Name: KEL")
    
    })
   conn.on("close", () => {
     console.log("you ded cuz you idled")
   })
   
   return conn;
}



module.exports = connect;


/**
 *  const moves = ['Move: up','Move: down','Move: up','Move: down', 'Move: left', 'Move: right','Move: up','Move: down',  'Move: left', 'Move: right', 'Move: left', 'Move: right','Move: up','Move: down', 'Move: left', 'Move: right']
     for (const move of moves) {
     for (let i = 1; i <= moves.length ; i++) { // moveup with timeout delay
      setTimeout(() => {
      conn.write(move);
      }, 100 * i)
      };
    }
 * 
 */