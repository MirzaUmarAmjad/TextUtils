import React, {useState} from "react";

export default function TextForm() {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const changeToUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }

    function changeToLowerCase() {
        const newText = text.toLowerCase();
        setText(newText);
    }

    function clearText() {
        setText('');
    }

    return (
        <div>
            <h2>Text Util to format text</h2>
            <form>
                <div className="mb-3">
                    <textarea className="form-control" rows="8" value={text} onChange={handleChange} />
                </div>
                <button className="btn btn-primary m-2" onClick={changeToUpperCase}>Change to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={changeToLowerCase}>Change to Lowercase</button>
                <button className="btn btn-primary m-2" onClick={clearText}>Clear Text</button>

            </form>

            <p>Total words: {text.length > 0 ? text.split(' ').length : 0}</p>
            <p>Total letters: {text.length}</p>
        </div>
    );
}