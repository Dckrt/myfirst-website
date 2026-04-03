export default function Home() {
  return (
    <main className="bg-gray-100">

      {/* HOME */}
      <section
        id="home"
        className="flex flex-col items-center justify-center h-screen text-center pt-20"
      >
        <h1 className="text-4xl font-bold">
          Hi, I&apos;m Deckert 👋
        </h1>

        <p className="mt-4 text-lg">
          I build web apps
        </p>

        <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
          View Projects
        </button>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="flex flex-col items-center justify-center h-screen text-center pt-20"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-md">
          I&apos;m an IT student learning React, Next.js, and building real-world projects.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center h-screen text-center pt-20"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-4">White Market App 🚀</p>
      </section>

    </main>
  );
}