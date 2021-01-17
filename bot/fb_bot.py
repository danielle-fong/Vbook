import pyautogui
import time
import speech_recognition as sr
import pyttsx3

r = sr.Recognizer()

engine = pyttsx3.init()

speak_string = ""

while speak_string != "stop":
    with sr.Microphone() as source:
        engine.say("Please speak your response, or say stop to cancel")
        engine.runAndWait()
        audio_text = r.listen(source)
        engine.say("Processing your response.")
        engine.runAndWait()
        
        try:
            # using google speech recognition
            print(r.recognize_google(audio_text))
            speak_string = r.recognize_google(audio_text)
        except:
            print("Sorry, I did not get that")

        time.sleep(3)
        pyautogui.typewrite(speak_string)
        pyautogui.press('enter')

print("Done")

