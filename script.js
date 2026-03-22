// 1. Logic mta3 el Scroll Animation (Your Original Code)
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 80) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// 2. Logic mta3 el Chatbot (Toggle Function)
function toggleChat() {
    const chat = document.getElementById('chat-window');
    if (chat) {
        // Swapping between flex and none for the UI
        chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
    }
}

// 3. Logic mta3 el Sending Messages & AI Simulation
function sendMessage() {
    const input = document.getElementById('user-input');
    const body = document.getElementById('chat-body');
    
    // Check if input exists and is not empty
    if (!input || input.value.trim() === "") return;

    // Add User Message to the chat body
    body.innerHTML += `<div class="message user-msg">${input.value}</div>`;
    
    const userText = input.value.toLowerCase();
    input.value = "";

    // Auto-scroll to the bottom for the latest message
    body.scrollTop = body.scrollHeight;

    // Bot Response Logic (Simulated AI)
    setTimeout(() => {
        let response = "I'm not sure about that. Would you like to check our 'Medicines' section?";
        
        // Keyword matching for smart responses
        if (userText.includes("dog")) {
            response = "Dogs need regular vaccination! Have you checked our 'Dog Health' guide?";
        } else if (userText.includes("medicine") || userText.includes("buy")) {
            response = "You can find all treatments in our shop. We recommend brands like Frontline and Beaphar.";
        } else if (userText.includes("emergency") || userText.includes("sick")) {
            response = "If it's an emergency, please contact a local vet immediately! My guide can help with initial first aid.";
        } else if (userText.includes("hello") || userText.includes("hi")) {
            response = "Hello! 🐾 I am your PetCare Assistant. How can I help you today?";
        }

        // Add Bot Message to the chat body
        body.innerHTML += `<div class="message bot-msg">${response}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

// 4. Event Listener for the "Enter" Key
// We use DOMContentLoaded to ensure the element is loaded before adding the listener
document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("user-input");
    if (userInput) {
        userInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }
});
