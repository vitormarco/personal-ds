const Home = () => (
  <main>
    <section>
      <h1>Hello World</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 text-white text-center">
        {Array.from(Array(18)).map(i => (
          <div className="p-16 rounded-lg shadow-lg bg-fuchsia-500">{i}</div>
        ))}
      </div>
    </section>
  </main>
)

export default Home
