function ContactSection() {
  return (
    <section className="contact-section__container col-lg-4">
      <h2 className="section-title">Contact</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
