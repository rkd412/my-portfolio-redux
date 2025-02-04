import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="m-4 text-center selection:tracking-tight text-3xl lg:text-6xl">
        Hey! You&apos;re not suppose to be here. That&apos;s alright though.{" "}
        <Link href="/">Here, let&apos;s head back home</Link>.
      </h1>
    </div>
  );
}
