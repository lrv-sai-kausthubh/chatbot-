const chatbot = {
    context: [],
    greetings: ["hi", "hello", "hey", "greetings"],
    farewells: ["bye", "goodbye", "see ya", "cya", "farewell"],
    
    responses: {
        "how are you": ["I'm doing well, thank you for asking!", "I'm great, how about you?", "All systems operational!"],
        "what's your name": ["My name is LuminaraBot. Nice to meet you!", "I'm LuminaraBot, your friendly Luminara language assistant."],
        "what do you do": ["I'm here to chat and help with questions about the Luminara language.", "I'm a conversational AI, here to interact with you and discuss Luminara!"],
        "who created": ["The Luminara language was created by LRV Sai Kausthubh to show his love towards space and astronomy.", "Luminara is the creation of LRV Sai Kausthubh, inspired by his passion for space and astronomy."],
        "what is luminara": ["Luminara is a fictional language created by LRV Sai Kausthubh, inspired by space and astronomy.", "Luminara is an invented language that reflects its creator's love for the cosmos."],
        "why was luminara created": ["Luminara was created by LRV Sai Kausthubh as an expression of his love for space and astronomy.", "The purpose behind Luminara's creation was to blend language with the beauty of the cosmos."],
        "tell me about luminara": ["Luminara is a fascinating language created by LRV Sai Kausthubh. It's deeply influenced by concepts from space and astronomy. What specific aspect would you like to know more about?"],
        "tell me about eldoria": ["Eldoria is the 1st planet in the luminara star system"],
        "default": ["That's an interesting question about Luminara! Could you be more specific?", "Luminara has many fascinating aspects. What particular area are you curious about?", "As a language inspired by space and astronomy, Luminara has a lot to explore. What would you like to know more about?"]
        
    },

    getResponse(input) {
        input = input.toLowerCase();
        this.context.push(input);
        if (this.context.length > 3) this.context.shift();
        
        if (this.greetings.some(greeting => input.includes(greeting))) {
            return "Hello! Welcome to the world of Luminara. How can I assist you today?";
        }
        
        if (this.farewells.some(farewell => input.includes(farewell))) {
            return "Goodbye! I hope you enjoyed learning about Luminara. Come back anytime!";
        }
        
        for (let key in this.responses) {
            if (input.includes(key)) {
                const responses = this.responses[key];
                return responses[Math.floor(Math.random() * responses.length)];
            }
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
    chatBox.innerHTML += `<p><strong>LuminaraBot:</strong> ${response}</p>`;
    
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
