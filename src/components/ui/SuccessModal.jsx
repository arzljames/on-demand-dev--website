import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessModal = ({ setSuccess }) => {
  return (
    <div
      onClick={() => setSuccess(false)}
      className="w-[100%] flex items-center justify-center h-screen fixed top-0 left-0 z-20 backdrop-blur-sm px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-dark p-6 rounded-xl  max-w-[500px] relative border-[#494949] border"
      >
        <h2 className="font-semibold text-main-text-color mb-4 border-b border-[#4e4e4e] pb-4 flex items-center">
          <span>
            <AiOutlineCheckCircle className="mr-2 text-[#4fcf6b]" size={26} />
          </span>
          Thank you for submitting the form!
        </h2>

        <p className="text-secondary-text-color">
          Your information has been received and is being processed. We
          appreciate your time and will get back to you shortly.
        </p>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setSuccess(false)}
            className="bg-main-color text-main-text-color py-2 px-4 rounded text-sm uppercase font-medium hover:bg-main-color-dark transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
