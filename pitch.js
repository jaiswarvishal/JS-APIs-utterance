function press() {
    const text = "sorry brother, i will be late tonight☹️.";

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 2;

    window.speechSynthesis.speak(utterance);
}