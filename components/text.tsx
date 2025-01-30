export default function Text() {
  return (
    <div className=" mt-16 mb-16">
      <h1 className="mb-8 text-4xl leading-none tracking-tight md:text-5xl lg:text-6xl">
        Welcome! My name is Rob and I am a web developer.
      </h1>
      <p className="text-2xl leading-relaxed">
        I am a lifelong tech enthusiast currently working for the{" "}
        <a
          aria-label="City of Pittsburgh"
          href="https://pittsburghpa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          City of Pittsburgh
        </a>
        . I previously worked for an{" "}
        <a
          aria-label="Online Stores, LLC"
          href="https://www.onlinestores.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          e-commerce company
        </a>{" "}
        that has several successful sites. Feel free to send me an email at{" "}
        <a aria-label="my email address" href="mailto:rob@robertkdavis.com">
          rob@robertkdavis.com
        </a>{" "}
        or{" "}
        <a href="/resume.pdf" download="resume">
          download my resume here
        </a>
        . I have a few links down below too in the footer. I appreciate you
        stopping by.
      </p>
    </div>
  );
}
