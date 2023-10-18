import React, { useState } from "react";
import {
  IoPerson,
  IoMail,
  IoAtCircle,
  IoCall,
  IoLocation,
} from "react-icons/io5";
import SuccessModal from "@/components/ui/SuccessModal";
import { ScaleLoader } from "react-spinners";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setIsLoading(false);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      {success && <SuccessModal setSuccess={setSuccess} />}
      <div className="w-full rounded-[6px] min-h-[80vh] mb-12 flex bg-secondary-dark overflow-hidden p-2">
        <div className="w-[40%] h-auto  rounded-[6px] contact-overlay p-4 md:flex flex-col justify-end text-white hidden">
          <div className="flex items-center mb-4">
            <div className="rounded-full h-8 w-8 border  border-white flex items-center justify-center mr-4">
              <IoCall />
            </div>
            <p className="text-sm flex-1">9876 543 210</p>
          </div>

          <div className="flex items-center mb-4">
            <div className="rounded-full h-8 w-8 border  border-white flex items-center justify-center mr-4">
              <IoMail />
            </div>
            <p className="text-sm flex-1">arzl.lao@zesty.com</p>
          </div>

          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 border  border-white flex items-center justify-center mr-4">
              <IoLocation />
            </div>
            <p className="text-sm flex-1">Sample Place, Somewhere else City</p>
          </div>
        </div>
        <form
          className="p-2 md:p-8 text-main-text-color flex flex-col flex-1 justify-center"
          action="https://forms.zohopublic.com/zestyio/form/OnDemandDevsForm/formperma/SO3dwie3U8eooBBIHKaIYuginbFLedcwD6ZBmtbBOwA/htmlRecords/submit"
          name="form"
          id="form"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          target="dummyframe"
          onSubmit={() => handleSubmit()}
        >
          <iframe name="dummyframe" id="dummyframe" className="hidden"></iframe>
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />
          <h2 className="uppercase font-light text-2xl mb-12">
            GET IN <span className="font-bold">TOUCH</span>
          </h2>
          <div className="w-full">
            <div className="flex-col justify-between mb-6 flex md:flex-row">
              <div className="flex flex-col flex-1 md:mr-4 mr-0 mb-6 md:mb-0">
                <label className="mb-2  text-main-text-color text-sm font-medium tracking-wide">
                  First name *
                </label>
                <div className="relative">
                  <IoPerson className="absolute top-[50%] translate-y-[-50%] left-2 text-sm" />
                  <input
                    required
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                    type="text"
                    maxLength={255}
                    name="Name_First"
                    placeholder="John"
                    className="h-10 rounded bg-transparent border border-[#4e535c] outline-none focus:border-main-color placeholder:font-light placeholder:text-sm w-full pl-8 placeholder:pb-1 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 ">
                <label className="mb-2  text-main-text-color text-sm font-medium tracking-wide">
                  Last name *
                </label>
                <div className="relative">
                  <IoPerson className="absolute top-[50%] translate-y-[-50%] left-2 text-sm" />
                  <input
                    required
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                    type="text"
                    maxLength={255}
                    name="Name_Last"
                    placeholder="Doe"
                    className="h-10 rounded bg-transparent border border-[#4e535c] outline-none focus:border-main-color placeholder:font-light placeholder:text-sm w-full pl-8 placeholder:pb-1 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 mb-6">
              <label className="mb-2  text-main-text-color text-sm font-medium tracking-wide">
                Email *
              </label>
              <div className="relative">
                <IoAtCircle className="absolute top-[50%] translate-y-[-50%] left-2 text-sm" />
                <input
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="text"
                  maxLength={255}
                  name="Email"
                  placeholder="example@gmail.com"
                  className="h-10 rounded bg-transparent border border-[#4e535c] outline-none focus:border-main-color placeholder:font-light placeholder:text-sm w-full pl-8 placeholder:pb-1 text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col flex-1 mb-6">
              <label className="mb-2  text-main-text-color text-sm font-medium tracking-wide">
                Message *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="How can we help you?"
                name="MultiLine"
                maxLength={65535}
                className="h-40 rounded bg-transparent border border-[#4e535c] outline-none focus:border-main-color resize-none p-2 text-sm placeholder:font-light placeholder:text-sm "
              />
            </div>

            <button
              className={`w-full ${
                isLoading ? "bg-main-color-dark select-none" : "bg-main-color"
              } rounded h-10 text-sm font-semibold uppercase transition hover:bg-main-color-dark`}
            >
              {isLoading ? (
                <ScaleLoader height={10} width={4} color="#fff" />
              ) : (
                "SUBMIT"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
