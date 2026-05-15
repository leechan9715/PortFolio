import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const buttonClasses = {
  button:
    "text-gray-500 cursor-pointer [background:var(--button-bg)] border-2 border-(--border) px-14 py-2.5 rounded-lg duration-300 hover:[background:var(--button-hover)] hover:text-white hover:border-(--hover-border) max-md:px-8 max-md:py-1",
  buttonText: "font-bold text-2xl max-xl:text-xl max-md:text-lg",
};

export const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsSending(true);
      setMessage("");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setMessage("메일이 성공적으로 전송되었습니다.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("메일 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_email"
          placeholder="example@email.com"
          required
          className="rounded-xl border border-[#1F4360] bg-transparent px-4 py-3 text-white"
        />
        <textarea
          name="message"
          placeholder="문의 내용을 입력해주세요"
          required
          className="min-h-40 rounded-xl border border-[#1F4360] bg-transparent px-4 py-3 text-white"
        />
        <button
          type="submit"
          className={`${buttonClasses.button} w-1/4 flex self-center`}
        >
          <p className={`${buttonClasses.buttonText} w-full `}>
            {isSending ? "전송 중..." : "메일 보내기"}
          </p>
        </button>
        {message && <p className="text-sm text-white">{message}</p>}
      </form>
    </>
  );
};
