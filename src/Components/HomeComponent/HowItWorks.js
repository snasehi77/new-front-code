import React from 'react';
import imgSteps from '../../Assets/Images/man.png'

const steps = [
  {
    num: '1',
    title: 'Tell us what happened.',
    description: 'Answer a few simple questions about your case.'
  },
  {
    num: '2',
    title: 'We make an introduction',
    description: 'Based on your answers, we find an attorney for you.'
  },
  {
    num: '3',
    title: 'They get in touch',
    description: 'within minutes, you´ll be introduced an attorney interested in representing you.'
  }
];

const HowItWorks = () => {
  return (
    <>
      <div className="container w-80 mt-5 mb-5 content-steps">
        <hr className="hr-primary w-10"/>
        <h1 className="text-center mb-5">Here´s how it works</h1>
        <div className="row mb-5">
          {steps.map(s => {
            return (
              <div key={s.num} className="col-lg-4 text-center">
                <h1 className="font-num">{s.num}</h1>
                <h4> {s.title}</h4>
                <p className="gray-color">{s.description}</p>
              </div>
            )
          })}
        </div>
        <span className="m-3"></span>
      </div>
      <div className="blue-background justify-content-end align-items-center d-flex">
        <img src={imgSteps} className="img-steps" alt=""/>
        <div className="w-60 p-3 text-blue">
          <h1 style={{color: '#F5CCF5'}} className="fa-4x text-center ">❝</h1>
          <p className="text-center white-opacity ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>
      </div>
      <div style={{margin: '100px auto 100px auto'}} className="text-center w-60 ">
        <hr className="hr-primary w-10 mt-5 mb-5"/>
        <h3>About YourCase</h3>
        <p>
          YourCase was created by a team of legal professionals who believed that finding an attorney online was
          unnecessarily confusing, impersonal
          an stressful. YourCase provides people with a dignified and efficient way to find the lawyers they need, free.
        </p>
        <p>
          you´re an attorney and you´d like to work with YourCase, get in touch.
        </p>
      </div>
    </>

  )
};


export default HowItWorks;