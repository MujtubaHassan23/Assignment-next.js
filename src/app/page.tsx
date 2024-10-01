"use client"
import {useRouter} from "next/navigation"
import Link from "next/link";


export default function Home() {
  const route = useRouter();
  return (
    <div>
      <h1>WELCOME TO MY NEXT.JS WEBPAGE ...</h1>
      <ul>
        <li><Link href='/Narbar'>Navbar</Link></li>
        <li><Link href='/About'>About</Link></li>
        <li><Link href='/Contact'>Contact</Link></li>
        <li><Link href='/Footer'>Footer</Link></li>
      </ul>

      <button onClick={() => route.push('/Navbar')}>Go to Navbar page</button>
      <button onClick={() => route.push('/About')}>Go to About page</button>
      <button onClick={() => route.push('/Contact')}>Go to Contact page</button>
      <button onClick={() => route.push('/Footer')}>Go to Footer page</button>
    </div>
  );
}
