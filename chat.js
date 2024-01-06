function openChat() {
    // Toggle the display property of the chat container
    var chatContainer = document.getElementById('chat-container');
    chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';

    // If the chat container is displayed, focus on the text input
    if (chatContainer.style.display === 'block') {
        document.getElementById('textInput').focus();
    }
}