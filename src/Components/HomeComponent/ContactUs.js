import React from 'react';


const ContactUsComponent = () => {
  return (
    <div className="text-center p-2">
      <hr className="hr-primary w-10 mt-5 mb-5"/>
      <h1 className="font-weight-light">Contact US</h1>

      <h4 className="subtitle gray-color font-weight-light">Could you tell us why you're contacting us ? </h4>

      <div className="col-lg-6 col-md-8 col-sm-12 m-auto">
        <form className="mb-5">

          <div className="form-group text-left">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Write your name..."/>
          </div>

          <div className="form-group text-left">
            <label htmlFor="name">Email</label>
            <input type="text" id="name" className="form-control" placeholder="Write your email..."/>
          </div>

          <div className="form-group text-left">
            <label htmlFor="name">Phone</label>
            <input type="text" id="name" className="form-control" placeholder="Write your phone..."/>
          </div>

          <div className="form-group text-left">
            <label htmlFor="message">Message</label>
            <textarea rows={10} className="form-control" placeholder="Please write your message...">
            </textarea>
          </div>

          <div className="form-group">
            <button className="btn btn-danger pl-5 pr-5 pt-2 pb-2">Contact us</button>
          </div>

        </form>
      </div>
    </div>
  )
};

export default ContactUsComponent;