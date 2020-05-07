import React from "react";
import { steps } from "../../Utils/Utilities";

const HowItWork = props => {
  const bg = props.background;

  return (
    <div>
      <div className="how-it-works">
        <div className="yc-container">
          <h1 className="text-center how-it-works-title pt-3">
            Here‘s how it works
          </h1>
          <div className="how-it-works-steps">
            {steps.map(s => {
              // replace the last space character in the p string with an &nbsp;
              // html entities get escaped, so use the unicode character
              let p1 = s.p1;
              p1 = p1.substr(0, p1.lastIndexOf(" ")) + "\u00a0" + p1.substr(p1.lastIndexOf(" ") + 1);

              return (
                <div key={s.num} className="how-it-works-step">
                  <h1
                    className={`how-it-works-num text-center ${
                      s.num === "1" ? "" : "mt-5 mt-md-0"
                    }`}
                  >
                    {s.num}
                  </h1>
                  <p className="how-it-works-title-num text-center mb-0">
                    {" "}
                    {s.title}
                  </p>
                  <p className="how-it-works-description-num text-center pt-2">
                    {p1}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="yc-about text-center">
        <div className="yc-container">
          <div className="row justify-content-center">
            <h2 className="mb-3 mt-2 text-center">About YourCase</h2>
            <div className="col-12 ">
              <p className="pt-5 pb-4">
                YourCase was created by a team of legal professionals who
                believed that finding an attorney online was unnecessarily
                confusing, impersonal and stressful. YourCase provides people
                with a dignified and efficient way to find the lawyers
                they&nbsp;need,&nbsp;free.
              </p>
              <p>
                If you're an attorney and you'd like to work with YourCase,{" "}
                <a
                  href="mailto: attorneyinquiries@yourcase.com"
                  className="pointer"
                >
                  <b>get&nbsp;in&nbsp;touch.</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
