import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-1">
      <main className="container mx-auto space-y-16 pt-20 px-4">
        {/* Hero Section - Everyman Brand */}
        <div className=" space-y-6 max-w-9xl mx-auto flex items-center justify-between">
          <div className="text-left">
          <p className="text-lg text-primary-2 max-w-2xl">Waa Gwaan, my name is</p>
          <h1 className="text-accent-1 font-freckle tracking-wider text-7xl">
            Alexander Boyd
          </h1>
          <p className="text-lg text-primary-2 max-w-2xl">but you can call me</p>
          <h2 className="text-primary-2 text-6xl">
            Your go-to Freelancer
          </h2>
          <p className="text-lg text-primary-2 max-w-2xl"> With tastes driven by fierce individualism and a proficiency in creativity, I am sure to bring my best to any creative project you throw at me. I am a front-end developer and digital designer by day and an artist by night.</p>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="lg" className="text-base bg-secondary-1 hover:opacity-70">
              My Resume
            </Button>
            <Link href="/projects"> 
            <Button variant="outline" size="lg" className="text-base bg-secondary-2 hover:opacity-70">
              View My Projects
            </Button>
            </Link>
            
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
          <Card className="border-l-4 border-l-primary-500">
            <CardHeader>
              <CardTitle className="text-primary-700">Honest Guidance</CardTitle>
              <CardDescription>Clear advice you can trust</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We believe in open, honest communication—so you always know where you stand and how to move forward.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary-500">
            <CardHeader>
              <CardTitle className="text-secondary-700">Practical Solutions</CardTitle>
              <CardDescription>Real results for real people</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                Our team focuses on what works for you—delivering solutions that are easy to understand, implement, and maintain.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent-500">
            <CardHeader>
              <CardTitle className="text-accent-700">Inclusive Support</CardTitle>
              <CardDescription>Here for everyone, every step</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-medium-contrast">
                We’re committed to making technology accessible and helpful for all—no matter your background or experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Invitation Section - Friendly Call to Action */}
        <div className="text-center space-y-8 py-16">
          <h2 className="text-gradient-brand max-w-3xl mx-auto">
            Ready to see what approachable AI can do for you?
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Let’s work together to find practical, effective solutions that fit your needs. Everyone’s welcome.
          </p>
          <Button size="lg" className="text-base bg-gradient-innovation hover:opacity-90">
            Connect With Us
          </Button>
        </div>
      </main>
    </div>
  );
}
