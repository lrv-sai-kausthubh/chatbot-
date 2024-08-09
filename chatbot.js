const chatbot = {
    greetings: ["hi", "hello", "hey"],
    farewells: ["bye", "goodbye", "see ya"],
    
    responses: {
        "how are you": "I'm doing well, thank you for asking!",
        "what's your name": "My name is ChatBot. Nice to meet you!",
        "what do you do": "I'm a simple chatbot here to assist you with basic questions.",
        "default": "I'm not sure how to respond to that. Could you try rephrasing or asking something else?"
    },

    getResponse(input) {
        input = input.toLowerCase();
        
        if (this.greetings.some(greeting => input.includes(greeting))) {
            return "Hello! How can I help you today?";
        }
        
        if (this.farewells.some(farewell => input.includes(farewell))) {
            return "Goodbye! Have a great day!";
        }
        
        for (let key in this.responses) {
            if (input.includes(key)) {
                return this.responses[key];
            }
        }
        
        return this.responses["default"];
    }
};

// Function to handle user input and display responses
function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    const response = chatbot.getResponse(userInput);
    
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>ChatBot:</strong> ${response}</p>`;
    
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Add event listener for the send button
document.getElementById("send-button").addEventListener("click", handleUserInput);

// Add event listener for the Enter key
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});