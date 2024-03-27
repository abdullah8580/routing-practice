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
              <Link href={"/address"}>Address</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Abdullah Sarfraz is My Name!</h1>
      </div>
    </div>
  );
}
