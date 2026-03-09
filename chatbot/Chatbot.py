import streamlit as st
import requests

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Translation function
def translate(text, source="auto", target="en"):
    url = "https://translate.googleapis.com/translate_a/single"
    params = {
        "client": "gtx",
        "sl": source,
        "tl": target,
        "dt": "t",
        "q": text
    }

    response = requests.get(url, params=params)
    result = response.json()
    return result[0][0][0]

# Language detection
def detect_language(text):
    url = "https://translate.googleapis.com/translate_a/single"
    params = {
        "client": "gtx",
        "sl": "auto",
        "tl": "en",
        "dt": "t",
        "q": text
    }

    response = requests.get(url, params=params)
    result = response.json()
    return result[2]  # detected language code


# Farm chatbot knowledge
def farm_chatbot(user_input):

    user_input = user_input.lower()

    if "tea" in user_input:
        return "Tea requires acidic soil, regular rainfall, and partial sunlight."

    elif "rice" in user_input:
        return "Rice grows well in flooded fields. Maintain good water management and organic manure."

    elif "fertilizer" in user_input:
        return "Use compost or balanced NPK fertilizers for better crop growth."

    elif "pest" in user_input or "disease" in user_input:
        return "Use neem oil or organic pesticides to control pests and diseases."

    elif "water" in user_input:
        return "Most crops need regular watering but avoid waterlogging."

    elif "hello" in user_input or "hi" in user_input:
        return "Hello! I can help with crop cultivation, fertilizers, pests and watering."

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

    # Translate to English
    english_input = translate(user_input, "auto", "en")

    # Get chatbot response
    response = farm_chatbot(english_input)

    # Translate response back to original language
    final_response = translate(response, "en", lang)

    st.session_state.messages.append(("You", user_input))
    st.session_state.messages.append(("Bot", final_response))


# Display chat history
for sender, message in st.session_state.messages:
    st.markdown(f"**{sender}:** {message}")