import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-primary-1 flex flex-col items-center justify-center px-4">
      <main className="max-w-8xl w-5/6 space-y-10 py-20">
        <h1 className="text-accent-1 text-7xl font-freckle tracking-wider">My Projects</h1>
        <h2 className="text-primary-2">Project 1 - My First Website</h2>
        <p className="text-xl text-primary-2">This was my very first website. I made it for practice, and modelled it after my freelance graphic design. It was the very first site I ever built made with nothing but HTML, CSS and Boostrap.</p>
        <iframe src="https://alexanderswrld.github.io/WebProject-AdisaMedia/" 
        style={{ width: '100%', height: '70vh', border: 'none' }} 
        title="Data Vizualization Project"/>
        <h2 className="text-primary-2">Project 2 - Student Senate Campaign Website</h2>
        <p className="text-xl text-primary-2">This was a campaign website I did as a commission for a friend of mine who &#40;successfully&#41; ran for student senate president at NJIT.</p>
        <iframe src="https://marinaforpresident.github.io/campaign/" 
        style={{ width: '100%', height: '70vh', border: 'none' }} 
        title="Marina Samuel Campaign Site"/>
        <br></br>
        <h2 className="text-primary-2">Project 3 - Data Vizualization Project</h2>
        <p className="text-xl text-primary-2">This was a data study project I did for my Advanced Web Development class. It was my first time working with React.</p>
        <iframe src="https://datavisualization-is-219.vercel.app/" 
        style={{ width: '100%', height: '70vh', border: 'none' }} 
        title="Data Vizualization Project"/>
        <h2 className="text-primary-2">Project 4 - Node.js Chatroom</h2>
        <iframe src="https://sockets-io.vercel.app/" 
        style={{ width: '100%', height: '70vh', border: 'none' }} 
        title="Chatroom"/>



        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
