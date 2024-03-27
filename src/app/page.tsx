import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href={"/name"}>Name</Link>
            </li>
            <li>
              <Link href={"/address"}>Address</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>This is the Home Page of my practice website! </h1>
      </div>
    </div>
  );
}
