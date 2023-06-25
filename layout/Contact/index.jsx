import "./styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact container-fluid d-flex flex-column gap-4">
      <header className="container d-flex justify-content-center align-items-center">
        <h2>Contact Us</h2>
      </header>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="d-flex flex-column align-items-center justify-content-center gap-3 p-4">
          <label htmlFor="name"> <input type="text" name="name" id="name" placeholder="Name" /> </label>
          <label htmlFor="email"> <input type="email" name="email" id="email" placeholder="Email" /> </label>
          <textarea name="message" id="message" placeholder="Type your message here..."></textarea>
          <button type="button" className="btn form-submit-btn">Send message</button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
