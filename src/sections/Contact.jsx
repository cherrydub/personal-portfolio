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

  return (
    <>
      <div className="contact section" id="contact">
        <h1 className="titles justify-start">{"//Contact"}</h1>
        <div className="">
          <div className="contact-container flex flex-wrap text-center">
            <div className="contact-card-left flex flex-col justify-start items-center flex-shrink">
              <div className="">
                <a
                  href="mailto:chriscoding@icloud.com"
                  title="chriscoding@icloud.com"
                >
                  <i className="las la-envelope-square"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/wisniewskichris/"
                  target="_blank"
                  title="LinkedIn"
                >
                  <i className="lab la-linkedin"></i>
                </a>

                <a
                  href="https://github.com/cherrydub"
                  target="_blank"
                  title="GitHub"
                >
                  <i className="lab la-github-square"></i>
                </a>
              </div>
              <div
                id="qr-div"
                className=" flex flex-col justify-center text-center items-center"
              >
                Scan QR code to view on mobile
                <img src="siteQR.png" alt="" width={"150px"} />
              </div>
            </div>
            <div
              className="contact-card flex flex-col justify-start items-center"
              // style={{ height: "420px" }}
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
                        id="contact-button"
                        style={{
                          width: "100px",
                          marginTop: "10px",
                          height: "25px",
                          // backgroundColor: "var(--background-color)",
                          border: "none",
                          cursor: "pointer", // Add this line to change the cursor on hover
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
