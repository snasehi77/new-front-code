import React from 'react';

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
    <div className="container w-80 mt-5 mb-5 content-steps">
      <hr className="hr-primary w-10"/>
      <h1 className="text-center mb-5">Here´s how it works</h1>
      <div className="row mb-5">
        {steps.map(s => {
          return (
            <div key={s.num} className="col-lg-4 ">
              <h1 className="font-num text-center">{s.num}</h1>
              <h4> {s.title}</h4>
              <p className="gray-color text-left">{s.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};


export default HowItWorks;