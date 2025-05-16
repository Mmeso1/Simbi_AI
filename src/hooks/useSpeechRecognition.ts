"use client";
import { useRef, useState, useEffect } from "react";

export function useSpeechRecognition(onResult: (t: string) => void) {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) {
      console.warn("Web Speech API not supported.");
      return;
    }
    recognitionRef.current = new Rec();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      onResult(text);
    };
    // you can also wire up onerror/onend here if you like
  }, [onResult]);

  const toggle = () => {
    const recog = recognitionRef.current;
    if (!recog) return;
    if (listening) {
      recog.stop();
      setListening(false);
    } else {
      recog.start();
      setListening(true);
    }
  };

  return { listening, toggle };
}
