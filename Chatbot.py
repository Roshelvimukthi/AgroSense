import streamlit as st
from googletrans import Translator

translator = Translator()

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Translate text
def translate(text, dest):
    try:
        return translator.translate(text, dest=dest).text
    except:
        return text

# Detect language
def detect_language(text):
    try:
        return translator.detect(text).lang
    except:
        return "en"

# Farm chatbot knowledge
def farm_chatbot(user_input):

    if "tea" in user_input:
        return "Tea requires acidic soil, regular rainfall, and partial sunlight. Use nitrogen-rich fertilizer."

    elif "rice" in user_input:
        return "Rice grows best in flooded fields. Maintain good water management and apply organic manure."

    elif "fertilizer" in user_input:
        return "Use compost or balanced NPK fertilizer for vegetables."

    elif "pest" in user_input or "disease" in user_input:
        return "Use neem oil or organic pesticides to control pests."

    elif "water" in user_input:
        return "Most crops need regular watering. Avoid waterlogging."

    elif "hello" in user_input or "hi" in user_input:
        return "Hello! Ask me about crop cultivation, fertilizers, pests, or watering."

    elif "bye" in user_input:
        return "Goodbye! Happy farming!"

    else:
        return "Sorry, I can only answer farming related questions."

# Streamlit UI
st.title("🌾 AgroSense Multilingual Farm Chatbot")

user_input = st.text_input("Ask your farming question (Sinhala / Tamil / English):")

if user_input:

    # Detect language
    lang = detect_language(user_input)

    # Translate to English for processing
    english_input = translate(user_input, "en").lower()

    # Get chatbot response
    response = farm_chatbot(english_input)

    # Translate response back to user's language
    final_response = translate(response, lang)

    st.session_state.messages.append(("You", user_input))
    st.session_state.messages.append(("Bot", final_response))

# Display chat history
for sender, message in st.session_state.messages:
    if sender == "You":
        st.markdown(f"**You:** {message}")
    else:
        st.markdown(f"**Bot:** {message}")