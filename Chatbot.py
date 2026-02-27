import streamlit as st

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Farm cultivation knowledge-based chatbot
def farm_chatbot(user_input):
    user_input = user_input.lower()

    # Crop guidance
    if "tea" in user_input:
        return "Tea requires acidic soil, regular rainfall, and partial sunlight. Fertilize with nitrogen-rich compost."
    elif "rice" in user_input:
        return "Rice grows well in flooded fields. Ensure proper water management and use organic manure."
    elif "fertilizer" in user_input:
        return "For vegetables, use compost or balanced NPK fertilizers. Avoid overuse to prevent soil damage."
    elif "pest" in user_input or "disease" in user_input:
        return "Common pests include aphids and caterpillars. Use neem oil or organic pesticides. Crop rotation helps prevent disease."
    elif "watering" in user_input:
        return "Most crops need consistent watering. Avoid waterlogging. Drip irrigation is efficient for vegetable farms."
    elif "hello" in user_input or "hi" in user_input:
        return "Hello! I can guide you on crop cultivation, fertilizers, pests, and watering. How can I help?"
    elif "bye" in user_input:
        return "Goodbye! Happy farming!"
    else:
        return "Sorry, I can only answer questions related to crop cultivation, pests, fertilizers, and watering."

# Streamlit UI
st.title("🌾 Farm Cultivation Chatbot")

user_input = st.text_input("You: ", "")

if user_input:
    response = farm_chatbot(user_input)
    st.session_state.messages.append(("You", user_input))
    st.session_state.messages.append(("Bot", response))

# Display chat history
for sender, message in st.session_state.messages:
    if sender == "You":
        st.markdown(f"**You:** {message}")
    else:
        st.markdown(f"**Bot:** {message}")