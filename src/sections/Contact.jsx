import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner"; // Import toast from "sonner"

const formID = import.meta.env.VITE_FORM_KEY;

export default function Contact({}) {
  const [state, handleSubmit] = useForm(formID);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.submitting) {
      toast("Sending...");
    } else {
      if (state.succeeded) {
        toast.success("Email Sent!");
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setName("");
        }, 10000);
      }
      if (state.errors?.length ?? 0 > 0) {
        toast.error("Email Failed!");
      }
    }
  }, [state.submitting]);

  // useEffect(() => {
  //   toast("sending..");
  //   console.log(state, "this is state");
  //   if (state.succeeded) {
  //     toast.success("Email Sent!");
  //     setSubmitted(true);
  //     setTimeout(() => {
  //       setSubmitted(false);
  //       setName("");
  //     }, 10000);
  //   } else if (state.errors?.length ?? 0 > 0) {
  //     toast.error("Email Error!");
  //   }
  // }, [state.succeeded, state.errors]);

  return (
    <>
      <div className="contact section " id="contact">
        <h1 className="titles">Contact</h1>
        <div>
          <section></section>
          <div className="contact-container flex flex-wrap text-center">
            <div className="contact-card">
              <a href="mailto:chriscoding@icloud.com">
                <i class="las la-at"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/wisniewskichris/"
                target="_blank"
              >
                <i class="lab la-linkedin"></i>
              </a>

              <a href="https://github.com/cherrydub" target="_blank">
                <i class="lab la-github-square"></i>
              </a>
            </div>
            <div
              className="contact-card flex flex-col justify-center items-center"
              style={{ height: "420px" }}
            >
              {!submitted ? (
                <>
                  <span>Get in touch:</span>
                  <p></p>
                  <br />
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                    style={{ width: "80%" }}
                  >
                    <input
                      className="pl-3"
                      required
                      id="name"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={name} // Bind the value to the state
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <br />

                    <input
                      className="pl-3"
                      // placeholder="your e-mail"
                      required
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <br />

                    <textarea
                      required
                      placeholder="Message"
                      id="message"
                      name="message"
                      className="h-40 resize-y p-2"
                    ></textarea>

                    <div className="flex mt-1">
                      <a
                        className="text-blue-700"
                        href="mailto:chriscoding@icloud.com"
                      ></a>
                      <button
                        style={{
                          width: "50px",
                          backgroundColor: "var(--background-color)",
                          border: "none",
                        }}
                        type="submit"
                        className="flex items-center justify-center ml-auto"
                      >
                        Submit
                      </button>
                    </div>

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </form>
                </>
              ) : (
                `Thanks for the e-mail ${name}!`
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
