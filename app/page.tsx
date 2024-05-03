import Image from "next/image";
import { Suspense } from "react";
import TestServerComponent from "./components/test-server-component";
import TestClientComponent from "./components/test-client-component";
import Link from "next/link";
import TestClientComponentTwo from "./components/test-client-component-two";

export default function Home({ params, searchParams }: {params: any;
  searchParams: QueryParams;}) {
  console.log("Render HomePage");

  return (
    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <TestServerComponent text={searchParams["text"]} />
        </Suspense>
        <TestClientComponent/>
        <TestClientComponentTwo />

        <div style={{display: 'flex'}}>
            <Link style={{marginRight: '16px', padding: '12px', border: '1px solid black'}} href="/?text=test">
                Add
            </Link>
            <Link style={{marginRight: '16px', padding: '12px', border: '1px solid black'}} href="/">
                Remove
            </Link>
        </div>
    </main>
  );
}
