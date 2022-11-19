let list, item;
var msgNumber = 0;
let messages = [];

function sendMessage(message) {
  msgNumber++

  // Inserindo a msg no array
  messages.push(message);

  // Limpando o input após enviar a msg
  document.getElementById('input-send-message').value = '';

  // Criando a msg que vai ser inserida na lista
  msg = document.createElement('msg');  

  if(msgNumber % 2 != 0) {  
    // Inserindo a msg no HTML
    document.getElementById('list-message-side-left').appendChild(msg);
    msg.innerHTML = '<div class="message-chat-left"> <p class="text-message-chat" id="text-message-chat">'+message+'</p> </div>';
  } else {
    document.getElementById('list-message-side-right').appendChild(msg); 
    msg.innerHTML = '<div class="message-chat-right"> <p class="text-message-chat" id="text-message-chat">'+message+'</p> </div>';   
  }  
}

// Chamando a função de enviar a msg ao pressionar o enter
document.addEventListener("keydown", (event) => {
  console.log(event.key)
  if (event.key == 'Enter') {
    sendMessage(document.getElementById('input-send-message').value)
  }
});



