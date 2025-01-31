import Link from "next/link";

export default function Custom404() {
  return (
    <h1 className="mt-24 mb-4 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
      Hey! You&apos;re not suppose to be here. That&apos;s alright though.{" "}
      <Link href="/">Here, let&apos;s head back home</Link>.
    </h1>
  );
}
