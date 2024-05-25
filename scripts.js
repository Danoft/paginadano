const apiKey = 'sk-proj-xPABLsXPgfkGiCEwvnxLT3BlbkFJEa27tPSlDzeQNa9H1jB5';
const apiUrl = 'https://chatgpt.com/c/998292ae-b84a-4c11-8e94-431976c2c71c';

function sendMessage() {
    var userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user-message');
        document.getElementById('userInput').value = '';
        
        // Realiza la solicitud a la API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            var botResponse = data.response; // Ajusta según la estructura de la respuesta de tu API
            displayMessage(botResponse, 'bot-message');
        })
        .catch(error => {
            console.error('Error:', error);
            displayMessage('Lo siento, ocurrió un error. Por favor, inténtalo de nuevo.', 'bot-message');
        });
    }
}

function displayMessage(message, className) {
    var chatbox = document.getElementById('chatbox');
    var messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Desplaza hacia abajo el chatbox
}