import { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("Je suis un autre nouveau texte");

  const onChange = (e) => {
    e.preventDefault();
    let newText = e.target.value;
    setText(newText);
    console.log(text);
  };

  return (
    <div className="container input-div">
      <span id="text">{text} </span>
      <input
        type="text"
        placeholder="Ton texte ici"
        id="text-input"
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
