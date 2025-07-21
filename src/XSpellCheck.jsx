import { useState } from "react";
import "./XSpellCheck.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const getCorrection = (text) => {
  const words = text.match(/\b\w+\b/g);
  if (!words) return null;

  for (let w of words) {
    const word = w.toLowerCase();
    if (customDictionary[word]) {
      return customDictionary[word];
    }
  }
  return null;
};

const XSpellCheck = () => {
  const [input, setInput] = useState("");
  const correction = input.trim() ? getCorrection(input) : null;
  return (
    <div className="spellcheck-main">
      <h1 className="spellcheck-heading">Spell Check and Auto-Correction</h1>
      <textarea
        className="spellcheck-textarea"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {correction && (
        <div className="spellcheck-suggestion">
          Did you mean: <b>{correction}</b>{" "}
        </div>
      )}
    </div>
  );
};

export default XSpellCheck;
