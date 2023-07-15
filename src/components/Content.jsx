import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = () => {
  const [DisplayText, setDisplayText] = useState(null);
  const [textareaValue, setTextareaValue] = useState(null);

  const handleButtonClick = () => {
    if (textareaValue === "") {
      toast.error("Please enter a message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setDisplayText(textareaValue);
      setTextareaValue("");
      toast.success(textareaValue, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  return (
    <main>
      <div className="container">
        <textarea
          onChange={handleTextareaChange}
          name="text"
          placeholder="Write your text here...."
        ></textarea>
        <button className="btn" onClick={handleButtonClick}>
          Show Text
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <br />
        <p id="showMessage">{DisplayText}</p>
      </div>
    </main>
  );
};

export default Content;
