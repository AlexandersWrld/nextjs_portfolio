import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-1">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Everyman Brand */}
        <div className="space-y-6 max-w-9xl mx-auto flex items-center justify-between">
          <div className="text-left">
          <p className="text-lg text-primary-2 max-w-2xl">Waa Gwaan, my name is</p>
          <h1 className="text-accent-1 font-freckle tracking-wider text-7xl">
            Alexander Boyd
          </h1>
          <p className="text-lg text-primary-2 max-w-2xl">but you can call me</p>
          <h2 className="text-primary-2 font-climate text-6xl">
            Your go-to Freelancer
          </h2>
          <p className="text-lg text-primary-2 max-w-2xl"> With tastes driven by fierce individualism and a proficiency in creativity, I am sure to bring my best to any creative project you throw at me. I am a front-end developer and digital designer by day and an artist by night.</p>
          <div className="flex gap-4 pt-4">
            <Link href="/projects">
            <Button variant="outline" size="lg" className="text-base bg-secondary-1 hover:opacity-70">
              View My Projects
            </Button>
            </Link>
            <Link href="/"> 
            <Button variant="outline" size="lg" className="text-base bg-secondary-2 hover:opacity-70">
              View My Designs
            </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-base bg-accent-1 hover:opacity-70">
              Connect With Me
            </Button>
            
          </div>
          </div>

        <Image
          src="/me_with_orange_blob.png"
          alt="My profile picture"
          width={400}
          height={400}
          quality={100}
          className="w-1/2 h-auto ml-auto"
        />
        </div>

    
        {/* Core Principles Section - Everyman Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          
          <Card className="border-l-4 border-l-secondary-1">
            <CardHeader>
              <CardTitle className="text-secondary-700 text-2xl">80% of What Is Seen is Remembered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                I forge bold visual stories that move audiences and burn themselves into memory. Smart brands leverage visuals to leave a mark on the minds of customers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-2">
            <CardHeader>
              <CardTitle className="text-primary-700 text-2xl">60% of Consumers are More Likely to Interact with Visual Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
              Secure your share of the clicks. Talking the talk and walking the walk is easy enough once you figure it out. Looking the part is another story. I can help with that.
              </p>
    
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-1">
            <CardHeader>
              <CardTitle className="text-accent-700 text-2xl">90% of Information Trasnmitted to The Brain is Visual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
              This is why strong, consistent visual branding is crucial for making a lasting impression and communicating your message effectively.
              </p>
      
            </CardContent>
          </Card>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-4 py-16">
          <h2 className="text-secondary-2 font-freckle tracking-wider max-w-3xl mx-auto">
            Dare to be different.
          </h2>
        </div>
      </main>
    </div>
  );
}
