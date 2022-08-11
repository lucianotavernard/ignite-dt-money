import favicon from './assets/favicon.svg'

export function App() {
  return (
    <main className="text-center">
      <section className="flex flex-col justify-center items-center h-screen bg-[#282c34] text-white">
        <img
          alt="logo"
          src={favicon}
          className="h-[40vmin] pointer-events-none animate-spin-slow"
        />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="text-[#646cff] hover:underline"
          target="_blank"
          href="https://vitejs.dev"
          rel="noopener noreferrer"
        >
          Learn Vite
        </a>
      </section>
    </main>
  )
}
