const chatbot = {
    context: [],
    greetings: ["hi", "hello", "hey", "greetings"],
    farewells: ["bye", "goodbye", "see ya", "cya", "farewell"],
    
    responses: {
        "how are you": ["I'm doing well, thank you for asking!", "I'm great, how about you?", "All systems operational!"],
        "what's your name": ["My name is ChatBot. Nice to meet you!", "I'm ChatBot, your friendly AI assistant."],
        "what do you do": ["I'm here to chat and help with basic questions.", "I'm a conversational AI, here to interact with you!"],
        "tell me a joke": ["Why don't scientists trust atoms? Because they make up everything!", "What do you call fake spaghetti? An impasta!"],
        "weather": ["I'm afraid I don't have real-time weather data. How's the weather where you are?", "I hope it's nice where you are! I don't have a window to check myself."],
        "your favorite color": ["As an AI, I don't have personal preferences, but I find the concept of colors fascinating!", "I appreciate all colors equally. Do you have a favorite?"],
        "default": ["That's interesting! Can you tell me more?", "I'm not sure about that. What do you think?", "Interesting point. How did you come to that conclusion?"]
    },

    getResponse(input) {
        input = input.toLowerCase();
        this.context.push(input);
        if (this.context.length > 3) this.context.shift();
        
        if (this.greetings.some(greeting => input.includes(greeting))) {
            return "Hello! How can I help you today?";
        }
        
        if (this.farewells.some(farewell => input.includes(farewell))) {
            return "Goodbye! It was nice chatting with you.";
        }
        
        for (let key in this.responses) {
            if (input.includes(key)) {
                const responses = this.responses[key];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        
        if (this.context.length > 1 && this.context[this.context.length - 2].includes("your favorite")) {
            return "I'm an AI, so I don't have personal preferences. But I'd love to hear about your favorites!";
        }
        
        const defaultResponses = this.responses["default"];
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
