document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('btnEnviar').addEventListener('click', function () {
    const mensaje = document.getElementById('txtMensaje').value;
    if (mensaje) {
      const chatBody = document.querySelector('.chat-body[style*="display: block"]');
      const nuevoMensaje = document.createElement('div');
      nuevoMensaje.classList.add('chat-message', 'sent');
      nuevoMensaje.innerHTML = `<p>${mensaje}</p>`;
      chatBody.appendChild(nuevoMensaje);
      document.getElementById('txtMensaje').value = ''; 
    }
  });
  initializeFileAttachment();

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`conversacion${i}`).addEventListener('click', function () {
      mostrarChat(i);
    });
  }
});

function mostrarChat(chatId) {

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`chat-header${i}`).style.display = 'none !important';
    document.getElementById(`chatBody${i}`).style.display = 'none !important';
  }

  document.getElementById(`chat-header${chatId}`).style.display = 'none';
  document.getElementById(`chatBody${chatId}`).style.display = 'flex !important';
}

function initializeFileAttachment() {
  document.getElementById('attachImage').addEventListener('click', function() {
    document.getElementById('imageInput').click();
  });

  document.getElementById('attachVideo').addEventListener('click', function() {
    document.getElementById('videoInput').click();
  });

  document.getElementById('attachDocument').addEventListener('click', function() {
    document.getElementById('documentInput').click();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initializeFileAttachment();
});
