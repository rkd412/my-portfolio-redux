export default function Text() {
  return (
    <>
      <h1 className="lg:mt-12 mb-8 tracking-tight md:text-5xl max-w-6xl lg:text-6xl text-3xl ">
        Hi, I&apos;m Rob — a web developer focused on crafting great digital
        experiences.
      </h1>
      <p className="mb-8 leading-relaxed lg:leading-loose max-w-6xl lg:text-3xl text-xl">
        I&apos;ve always loved technology, and right now, I&apos;m helping the{" "}
        <a
          aria-label="City of Pittsburgh"
          href="https://pittsburghpa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          City of Pittsburgh
        </a>{" "}
        improve and modernize their website. Before that, I helped build
        successful e-commerce platforms at{" "}
        <a
          aria-label="Online Stores, LLC"
          href="https://www.onlinestores.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Online Stores, LLC
        </a>
        . If you&apos;re curious about my work, feel free to{" "}
        <a aria-label="my email address" href="mailto:rob@robertkdavis.com" className="underline">
          reach out via email
        </a>
        , or{" "}
        <a href="/Robert-K-Davis-Resume.pdf" download="resume" className="underline">
          download my resume
        </a>
        . You’ll also find more ways to connect in the footer below. Thanks for
        stopping by!
      </p>
    </>
  );
}
