"use client";

interface FormButtonProps {
  status: boolean;
}

const FormButton = ({ status }: FormButtonProps) => {
  return (
    <button
      className={`w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-700 hover:cursor-pointer transition`}
      disabled={status}
    >
      {status ? "Sending Message.." : "Send Message"}
    </button>
  );
};

export default FormButton;
