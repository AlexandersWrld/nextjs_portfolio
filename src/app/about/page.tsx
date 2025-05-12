import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-primary-1 flex flex-col items-center justify-center px-4">
      <main className="space-y-16 px-4">
        <div className="w-full flex items-center justify-end h-[60vh] bg-outlaw">
        <div className="text-right mr-32">
        <h1 className="text-primary-2 text-8xl font-freckle tracking-wider text-center">Meet The Man with The Method</h1>
        </div>
        </div>
        
        <div className="text-left ml-12 mr-12 space-y-8 leading-12">
        <p className="text-xl text-primary-2 max-w-8xl"> I got my start as a graphic designer. I was fresh out of highschool back in Jamaica, with little idea about what I wanted to do next.
          I always had a love for art and I used to make lot of prints on my &#40;totally not pirated&#41; copy of photoshop. One day I designed an advert my family was looking to run in our local newspaper and the paper company 
          was so impressed that they called back and offered me a full-time design role. Once my design career started it was only a matter of time before I found my way to frontend, as all designers eventually do.</p>
          <p className="text-xl text-primary-2 max-w-8xl">
          I am familiar with popular frontend frameworks like Next.js, Node.js and React. I also have advanced proficiency in Adobe Photoshop, Illustrator and After Effects.
          </p>
        
        </div>
       <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
    
  );
}
