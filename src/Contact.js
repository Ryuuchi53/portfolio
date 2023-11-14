export default function About() {
    return (
      <div className="contact">
        <header>
          <h1>Contact me</h1>
        </header>
        <main>
          <section id="contact">
            <h2>Get in touch</h2>
            <form action="/submit_form" method="post">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name"></input>
              <br></br>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email"></input>
              <br></br>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <input type="submit" value="submit"></input>
            </form>
          </section>
        </main>
      </div>
    );
}