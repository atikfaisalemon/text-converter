import { useState } from "react";

export default function Textfield() {
  const [text, setText] = useState("");
  function onhashchange(e) {
    let newText = e.target.value;
    setText(newText);
  }
  const textUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clearText = () => {
    setText("");
  };

  const textLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <div className="px-3 dark:bg-gray-900 bg-white">
      <label
        htmlFor="comment"
        className="block text-sm font-bold leading-6 text-gray-900 dark:text-white"
      >
        Add your Text :
      </label>
      <div className="mt-2">
        <textarea
          onChange={onhashchange}
          value={text}
          rows={6}
          name="comment"
          id="comment"
          className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm"
        />
      </div>
      <div className="sm:flex sm:gap-6 flex justify-center md:justify-start gap-3 py-2 ">
        <button
          onClick={textUpperCase}
          type="button"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2"
        >
          Text UpperCase
        </button>
        <button
          onClick={textLowerCase}
          type="button"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Text LowerCase
        </button>
        <button
          onClick={clearText}
          type="button"
          className="rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Text Clear
        </button>
      </div>

      <div className="mt-5">
        <div className="font-bold">
          <div className="flex justify-between dark:text-white">
            <h2>Preview Text:</h2>
            <button
              onClick={() => {
                navigator.clipboard.writeText(text);
              }}
              type="button"
              className="rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Copy
            </button>
          </div>
          <h2 className="text-green-500 animate-pulse">
            Total Word{" "}
            <span className="text-orange-500">
              ({text.split(" ").length - 1})
            </span>{" "}
            & Total Character
            <span className="text-orange-500">({text.length})</span>
          </h2>
        </div>
        {text}
      </div>
    </div>
  );
}
