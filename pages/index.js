import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Unhackable Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Unhackable Team 
        </h1>
        <h2>
          <a href="https://github.com/Unhackable-PolyHack2022">GitHub</a>
        </h2>

        <p className="description">
          <u>Projects</u> 
        </p>

        <div className="grid">
          <a href="https://github.com/Unhackable-PolyHack2022/CV-Chain" className="card">
            <h3>CV Chain System &rarr;</h3>
            <p>A project from PolyHack2022 Hackathon</p>
          </a>

          <a href="https://github.com/Unhackable-PolyHack2022/unhackable-website" className="card">
            <h3>Unhackable Website &rarr;</h3>
            <p>Unhackable Team Official Website which use Next.JS</p>
          </a>

        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <p className="description">
          <u>News</u> 
        </p>
        <table width={1000}>
          <tr>
            <th><h3>Class</h3></th>
            <th><h3>Content</h3></th>
            <th><h3>Time</h3></th>
          </tr>
          <br></br>
          <tr>
            <th>Award</th>
            <th>Unhackable Team win a Honorable Mentions Award in that Hackathon 🎉🎉🎉 </th>
            <th>6/5/2022</th>
          </tr>
          <br></br>
          <tr>
            <th>Hackathon</th>
            <th>Unhackable Team Joined PolyHack2022 Hackathon </th>
            <th>5/21/2022</th>
          </tr>
        </table>

        <br></br>
        <br></br>
        <br></br>

        <p className="description">
          <u>Team Members </u>
        </p>

        <div className="grid">
          <a href="https://guanlin.life/" className="card">
            <h3>Guanlin Jiang (David) &rarr;</h3>
            <p>PolyU BSc in Computing (Class of 2025)</p>
          </a>

          <a href="https://ultrafish.cn/" className="card">
            <h3>Wengyu Zhang (Mike) &rarr;</h3>
            <p>PolyU BSc in Computing (Class of 2025)</p>
          </a>

          <a href="https://github.com/David-Lmh" className="card">
            <h3>Minghao Liu (David) &rarr;</h3>
            <p>PolyU BSc in Computing (Class of 2025)</p>
          </a>

          <a href="https://github.com/ChenZiyangRocky" className="card">
            <h3>Ziyan Chen (Rocky) &rarr;</h3>
            <p>PolyU BSc in Fintech & AI (Class of 2025)</p>
          </a>
        </div>

      </main>

      <footer>
        <a
          href="https://unhackable.skyproton.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Team Unhackable
          
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
