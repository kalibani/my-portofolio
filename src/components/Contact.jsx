import { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const submitNotification = (error = "", toastHandler = toast) => {
    if (error) {
      toastHandler.error(`Failed to sent message: ${error}`, {
        style: {
          background: "#eb4034",
          color: "#fff",
          maxWidth: 500,
        },
      });
    } else {
      toastHandler.success(`Successfully sent message`, {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          submitNotification();
        },
        (error) => {
          submitNotification(error?.text);
        }
      );
  };
  return (
    <section id="contact">
      <Toaster position="top-right" reverseOrder={false} />
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container w-[90%] laptop:w-[58%] grid grid-cols-1 laptop:grid-cols-[30%,50%] gap-8 laptop:gap-[12%] m-auto">
        <div className="flex flex-col gap-[1.2rem]">
          <article className="bg-background-variant p-[1.2rem] rounded-[1.2rem] text-center border-[1px] border-solid border-[transparent] transition delay-150 duration-300 ease-in-out hover:bg-[transparent] hover:border-primary-variant">
            <MdOutlineEmail className="inline-block text-2xl mb-2" />
            <h4>Email</h4>
            <h5>kalibani.ka@gmail.com</h5>
            <a
              href="mailto:kalibani.ka@gmail.com"
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              Send a Message
            </a>
          </article>
          <article className="bg-background-variant p-[1.2rem] rounded-[1.2rem] text-center border-[1px] border-solid border-[transparent] transition delay-150 duration-300 ease-in-out hover:bg-[transparent] hover:border-primary-variant">
            <RiMessengerLine className="inline-block text-2xl mb-2" />
            <h4>Messenger</h4>
            <h5>kautzaralibani</h5>
            <a
              href="https://m.me/kautzaralibani"
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              Send a Message
            </a>
          </article>
          <article className="bg-background-variant p-[1.2rem] rounded-[1.2rem] text-center border-[1px] border-solid border-[transparent] transition delay-150 duration-300 ease-in-out hover:bg-[transparent] hover:border-primary-variant">
            <BsWhatsapp className="inline-block text-2xl mb-2" />
            <h4>Whatsapp</h4>
            <h5>+6287822946362</h5>
            <a
              href="https://web.whatsapp.com/send?phone=+6287822946362"
              target="_blank"
              className="mt-3 inline-block text-xs"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-[1.2rem]"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
