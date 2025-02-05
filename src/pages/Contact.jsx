export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

// console.log(formData.entries());
// formData.entries=>iterator of key value pairs from form
// Object.fromEntries(formData.entries()) converts this iterator into a JavaScript object where keys are input field names and values are the corresponding user inputs.

const formData = new FormData(event.target);
// [["username", "Alice"],
// ["email", "alice@example.com"],
// ["message", "Hello!"]]
  
    const formInputData = Object.fromEntries(formData.entries());
// {username: "Alice",
// email: "alice@example.com",
// message: "Hello!"}
      
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};