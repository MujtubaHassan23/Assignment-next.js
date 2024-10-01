import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>WELCOME TO MY About WEBPAGE ...</h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/Narbar'>Navbar</Link></li>
        <li><Link href='/Contact'>Contact</Link></li>
        <li><Link href='/Footer'>Footer</Link></li>
      </ul>
    </div>
  );
}