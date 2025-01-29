import Zara from "./zara";

export default function Main() {
  return (
    <main className="min-h-screen">
      <Zara />
      <p>
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
        that has several successful sites. Feel free to check out my{" "}
        <a aria-label="Project Section" href="/projects">
          projects
        </a>{" "}
        page or send me an email at{" "}
        <a aria-label="my email address" href="mailto:rob@robertkdavis.com">
          rob@robertkdavis.com
        </a>
        . Download my{" "}
        <a
          target="_blank"
          download=""
          href="/static/media/Robert-Davis-Resume.539d8b5f.pdf"
        >
          resume
        </a>{" "}
        as well. Thank you for your interest!
      </p>
    </main>
  );
}
