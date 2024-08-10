import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-bold tex-2xl my-4">about</h1>
      <p className="mb-4">hello! i'm shami, currently a computer science undergrad.</p>
      <div className="space-x-4 underline">
        <Link href="https://github.com/shamikhan005">
          github
        </Link>
        <Link href="https://x.com/shamikhan005">
          twitter
        </Link>
        <Link href="https://www.linkedin.com/in/shamiullah-khan-988768218/">linkedin</Link>
      </div>
    </div>
  );
}
