import "../styling/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <section>
        <p>
          Mila Hayes is an acclaimed graphic designer known for her clean,
          minimalist aesthetic. Founded in 2018, her studio has become a beacon
          for design innovation and simplicity, attracting a global clientele.
        </p>
        <p>
          Based in Miami, Mila works with a diverse range of clients, providing
          services that span across branding, web design, and digital content
          creation. Her approach is strategic yet personal, ensuring that each
          project not only meets but exceeds expectations with a focus on
          timeless elegance and functionality.
        </p>
        <p>
          Mila&apos;s design philosophy centers on the belief that good design
          transcends mere aesthetics, acting as a crucial tool for communicating
          ideas and building brand identity. Her work is characterized by a
          dedication to craft and a commitment to impactful storytelling through
          visual expression.
        </p>
        <p>
          You can contact us <a href="/contact">here</a>.
        </p>
      </section>
      <span className="logo-about">MH</span>
    </div>
  );
}

export default AboutPage;
