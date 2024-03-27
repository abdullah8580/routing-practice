import Link from "next/link";

export default function Name() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href={"/"}>Go Home</Link>
            </li>
            <li>
              <Link href={"/name"}>Name</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Johar Town, Lahore!</h1>
      </div>
    </div>
  );
}
