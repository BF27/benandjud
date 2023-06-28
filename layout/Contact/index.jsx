import "./styles/contact.css";

const Contact = () => {
  
  const handleForm = (e) => {
    e.preventDefault();
    window.alert("Thanks your message!")
  }

  return (
    <section id="contact" className="contact container-fluid d-flex flex-column gap-4">
      <header className="container d-flex justify-content-center align-items-center">
        <h2>Contact Us</h2>
      </header>
      <div className="container d-flex justify-content-center align-items-center">
        <form className="d-flex flex-column align-items-center justify-content-center gap-3 p-4" onSubmit={(e)=>handleForm(e)}>
          <label htmlFor="name"> <input type="text" name="name" id="name" placeholder="Name" required/> </label>
          <label htmlFor="email"> <input type="email" name="email" id="email" placeholder="Email" required/> </label>
          <textarea name="message" id="message" placeholder="Type your message here..." required></textarea>
          <button type="submit" className="btn form-submit-btn">Send message</button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
