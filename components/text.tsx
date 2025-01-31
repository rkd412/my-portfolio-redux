export default function Text() {
  return (
    <>
      <h1 className="mt-16 mb-8 text-4xl tracking-tight md:text-5xl lg:text-6xl">
        Hi, I'm Rob — a web developer passionate about crafting great digital experiences.
      </h1>
      <p className="mb-4 text-2xl leading-loose">
        I've always loved technology, and right now, I'm putting that passion to work for the{" "}
        <a
          aria-label="City of Pittsburgh"
          href="https://pittsburghpa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          City of Pittsburgh
        </a>
        . Before that, I helped build successful e-commerce platforms at{" "}
        <a
          aria-label="Online Stores, LLC"
          href="https://www.onlinestores.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Online Stores, LLC
        </a>
        .
      </p>
      <p className="mb-8 text-2xl leading-loose">
        If you're curious about my work, feel free to{" "}
        <a aria-label="my email address" href="mailto:rob@robertkdavis.com">
          reach out via email
        </a>
        , or{" "}
        <a href="/resume.pdf" download="resume">
          download my resume
        </a>
        . You’ll also find more ways to connect in the footer below. Thanks for stopping by!
      </p>
    </>
  );
}
