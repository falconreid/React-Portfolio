import React from "react";
const textArea = {
  width:'250',
  height:'150',
};

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/moqpldgw"
        method="POST"
      >
        {/* <!-- add your custom form HTML here --> */}
        <label>Email: </label>&nbsp;
        <input type="email" name="email" /><br/>
        <label>Phone: </label>&nbsp;
        <input type="text" name="phone" /><br/>
        <label>Message: </label>&nbsp; 
        <input id="textarea" type="textarea" name="message" style={textArea}/><br/> 
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-white btn-animate">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}