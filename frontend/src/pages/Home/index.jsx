import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <span className="section-label">2026 Comeback</span>
                <h1 className="hero__title">ARIRANG</h1>
                <p className="hero_korean">아리랑</p>
                <p className="hero__tagline">
                    Seven voices. One Soul. A song that transcends time and space. BTS returns with "ARIRANG," a masterpiece that weaves together the threads of their journey, culture, and artistry into a tapestry of sound and emotion. Experience the magic of BTS as they unveil their latest musical chapter, inviting you to join them on a transformative journey through the power of music and storytelling.
                </p>
                <div className="hero__buttons">
                    <Link to="/album" className="btn btn--primary">Explore Album</Link>
                    <Link to="/members" className="btn btn--secondary">Meet the Members</Link>
                </div>
            </section>
             {/* ── ABOUT ───────────────────────────────── */}
      <section className="about">

        {/* <span className="section-label">About</span> */}

        <h2 className="about__heading">
          Beyond Music.<br />A Generation.
        </h2>

        <p className="about__text">
          BTS — RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook —
          debuted on June 13, 2013 under HYBE. What began as a
          seven-member group from Seoul became a global phenomenon
          that redefined what pop music could say, feel, and mean.
          After serving their mandatory military service, all seven
          have returned — together again, for ARIRANG.
        </p>

        <p className="about__text">
          ARIRANG takes its name from Korea's most beloved folk song,
          a melody that has carried the weight of longing, resilience,
          and hope across generations. BTS reclaims it — not as
          nostalgia, but as a declaration.
        </p>

      </section>
        </main>
    )
}

export default Home