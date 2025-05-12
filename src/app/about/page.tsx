import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen bg-primary-1">
      <main className="container mx-auto space-y-16 px-4">
        <div className="space-y-6 max-w-9xl mx-auto flex items-center bg-primary-1 justify-between pt-12">
        <Image
          src="/alex_cutout_black_and_white.png"
          alt="My profile picture"
          width={400}
          height={400}
          quality={100}
          className="w-1/2 h-auto ml-auto"
        />  
        <div className="text-right">
        <h1 className="text-accent-1 font-freckle tracking-wider text-center">Meet The Man with The Method</h1>
        <p className="text-lg text-primary-2 text-center max-w-2xl"> I got my start as a graphic designer. I was fresh out of highschool back in Jamaica, with little idea about what I wanted to do next.
          I always had a love for art and I used to make lot of prints on my &#40;totally not pirated&#41; copy of photoshop.</p>
          <p className="text-lg text-primary-2 text-center max-w-2xl">
          One day I designed an advert my family was looking to run in our local newspaper and the paper company was so impressed that they called back and offered me a full-time design role.
          </p>
          <h3 className="text-secondary-2 text-center max-w-2xl">
          The rest is history.
        </h3>
        </div>
        </div>
        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
    
  );
}
