const { useEffect, useRef } = React;

// ---------- NAV ----------
function Nav() {
  return (
    <nav>
      <div className="logo">MC<span>_</span>DEV</div>
      <div className="navlinks">
        <a href="#about">Profil</a>
        <a href="#experience">Expériences</a>
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navtag">Disponible</div>
    </nav>
  );
}

// ---------- HERO ----------
function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const wrap = particlesRef.current;
    if (!wrap) return;
    const colors = ['#D4A73E', '#745990', '#F5F0FF', '#A6192E'];
    const nodes = [];
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      const size = 2 + Math.random() * 3;
      p.className = 'particle';
      p.style.width = p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = '-10px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (8 + Math.random() * 10) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      wrap.appendChild(p);
      nodes.push(p);
    }
    return () => nodes.forEach(n => n.remove());
  }, []);

  return (
    <header className="hero">
      <div className="particles" ref={particlesRef}></div>

      <div className="eyebrow">PORTFOLIO — DÉVELOPPEUR WEB</div>
      <h1 className="hero-title">
        <span className="line"><span>MATTHIEU</span></span>
        <span className="line"><span>CHAU<span className="accent">VIN</span></span></span>
      </h1>
      <p className="hero-sub">Développeur web formé au HTML, CSS et JavaScript, avec une première expérience en préparation et déploiement de postes en environnement professionnel exigeant. Rigoureux, organisé, à l'aise autant côté code que côté terrain.</p>

      <div className="hero-cta">
        <a className="btn btn-primary" href="#projects">Voir mes projets →</a>
        <a className="btn btn-ghost" href="#contact">Me contacter</a>
      </div>

      <div className="badge-tfc"><span className="cross">✛</span> Team Violette — supporter du Toulouse FC</div>

      <div className="pitch">
        <div className="pitch-line"></div>
        <div className="code-track mono">
          {'<div class="terrain"> </pitch> const but = true; <git commit -m "but !"> function marquer(){} <div class="terrain"> </pitch> const but = true; <git commit -m "but !"> function marquer(){}'}
        </div>
        <div className="trail">
          <svg preserveAspectRatio="none" viewBox="0 0 100 4"><path d="M0,2 L100,2" /></svg>
        </div>
        <svg className="ball" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="#F5F0FF" />
          <path d="M20 6 L28 12 L25 21 L15 21 L12 12 Z" fill="#0F0B14" />
          <path d="M20 6 L20 2 M28 12 L34 9 M25 21 L29 28 M15 21 L11 28 M12 12 L6 9" stroke="#0F0B14" strokeWidth="1.4" />
        </svg>
      </div>
    </header>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section id="about">
      <div className="section-head reveal-up">
        <span className="section-num mono">01</span>
        <h2 className="section-title">Profil</h2>
      </div>
      <div className="about-grid reveal-up">
        <div className="player-card">
          <div className="player-card-inner">
            <div className="player-photo">[ photo portrait<br />— cadrage carré,<br />fond uni violet nuit ]</div>
            <div className="player-name">Matthieu Chauvin</div>
            <div className="player-role mono">DÉVELOPPEUR WEB</div>
            <div className="player-stats">
              <div><span>Localisation</span><span>Mondonville (31)</span></div>
              <div><span>Formation</span><span>Aston, Paris</span></div>
              <div><span>Permis</span><span>B</span></div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>Développeur web avec une <strong>première expérience en préparation et déploiement de postes</strong> en environnement professionnel exigeant, pour des clients grands comptes. Également formé au développement web <strong>(HTML, CSS, JavaScript)</strong>, je dispose d'une bonne compréhension des outils informatiques et des besoins utilisateurs.</p>
          <p>Rigoureux et organisé, je souhaite évoluer vers un poste en <strong>support informatique</strong> où je pourrai mettre à profit mes compétences techniques et mon sens du service.</p>
          <div className="tag-row">
            <span className="tag">Dynamique</span>
            <span className="tag">Esprit d'équipe</span>
            <span className="tag">Sens de l'organisation</span>
            <span className="tag">Capacité d'adaptation</span>
            <span className="tag">À l'écoute</span>
            <span className="tag">Bon relationnel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- EXPERIENCE ----------
function Experience() {
  const timelineRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const ball = ballRef.current;
    if (!timeline || !ball) return;

    function onScroll() {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      let progress = (vh * 0.6 - rect.top) / total;
      progress = Math.max(0, Math.min(1, progress));
      ball.style.top = (progress * total) + 'px';
      ball.style.transform = 'rotate(' + (progress * 720) + 'deg)';
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience">
      <div className="section-head reveal-up">
        <span className="section-num mono">02</span>
        <h2 className="section-title">Expériences</h2>
      </div>

      <div className="timeline reveal-up" ref={timelineRef}>
        <div className="timeline-ball" ref={ballRef}>
          <svg viewBox="0 0 40 40" style={{ width: '100%', height: '100%' }}>
            <circle cx="20" cy="20" r="18" fill="#F5F0FF" />
            <path d="M20 6 L28 12 L25 21 L15 21 L12 12 Z" fill="#0F0B14" />
            <path d="M20 6 L20 2 M28 12 L34 9 M25 21 L29 28 M15 21 L11 28 M12 12 L6 9" stroke="#0F0B14" strokeWidth="1.4" />
          </svg>
        </div>

        <div className="tl-item current">
          <div className="tl-dot">⚽</div>
          <span className="tl-status">EN COURS</span>
          <div className="tl-role">Opérateur Informatique</div>
          <div className="tl-meta">ENVOI-OPS · Colomiers — depuis février 2026</div>
          <ul>
            <li>Gestion et préparation d'une centaine de postes pour des clients grands comptes (Airbus, Pierre Fabre)</li>
            <li>Déploiement et configuration de systèmes Windows</li>
            <li>Effacement sécurisé et formatage de disques durs</li>
            <li>Contrôle qualité avant expédition, dans le respect de procédures strictes et de délais courts</li>
          </ul>
        </div>

        <div className="tl-item">
          <div className="tl-dot">◐</div>
          <div className="tl-role">Développeur Web — Alternance</div>
          <div className="tl-meta">ADAM TECH · Paris — 2022 à 2024</div>
          <ul>
            <li>Pilotage d'une équipe de 5 personnes</li>
            <li>Présentation de projets aux clients selon le cahier des charges</li>
            <li>Création de sites, d'applications web et de bases de données (MySQL)</li>
            <li>Intégration front-end (HTML/CSS) et bases de JavaScript</li>
          </ul>
        </div>

        <div className="tl-sub">
          <div className="tl-sub-title mono">Expériences complémentaires</div>
          <div className="tl-mini"><b>Plaquiste</b><span>Placobat, Cornebarrieu · 2018–2020</span></div>
          <div className="tl-mini"><b>Peintre en bâtiment</b><span>Boldini, Cornebarrieu · 2015–2018</span></div>
          <div className="tl-mini"><b>Cuisine & restauration</b><span>Dima, Blagnac · 2014–2015</span></div>
        </div>
      </div>
    </section>
  );
}

// ---------- PROJECTS ----------
function Projects() {
  return (
    <section id="projects">
      <div className="section-head reveal-up">
        <span className="section-num mono">03</span>
        <h2 className="section-title">Projets</h2>
      </div>
      <div className="reveal-up">
        <div className="match-card">
          <div className="match-card-top">
            <span>PROJET PERSONNEL</span>
            <span className="match-status">EN LIGNE</span>
          </div>
          <div className="match-card-body">
            <h3>Liste-Matelo</h3>
            <p>Application web partagée entre deux personnes, accessible depuis leurs téléphones sans compte ni installation — juste un lien.</p>
            <ul className="feat-list">
              <li>Gérer des tâches ménagères : ajouter, cocher, supprimer</li>
              <li>Gérer une liste de courses commune</li>
              <li>Badge « Fait ! » quand une tâche est validée</li>
              <li>Barre de progression en temps réel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SKILLS ----------
function Skills() {
  return (
    <section id="skills">
      <div className="section-head reveal-up">
        <span className="section-num mono">04</span>
        <h2 className="section-title">Compétences</h2>
      </div>
      <div className="skills-grid reveal-up">
        <div className="skill-card">
          <div className="skill-eyebrow">Front-end</div>
          <div className="skill-title">Interfaces</div>
          <ul className="skill-list"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li></ul>
        </div>
        <div className="skill-card">
          <div className="skill-eyebrow">Back-end</div>
          <div className="skill-title">Données</div>
          <ul className="skill-list"><li>SQL</li><li>MySQL</li></ul>
        </div>
        <div className="skill-card">
          <div className="skill-eyebrow">Systèmes</div>
          <div className="skill-title">Postes</div>
          <ul className="skill-list"><li>Windows</li><li>Déploiement</li><li>Formatage</li></ul>
        </div>
        <div className="skill-card">
          <div className="skill-eyebrow">Outils</div>
          <div className="skill-title">Workflow</div>
          <ul className="skill-list"><li>VS Code</li><li>VirtualBox</li><li>Pack Office</li></ul>
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT + FOOTER ----------
function Contact() {
  return (
    <section id="contact">
      <div className="contact reveal-up">
        <div className="badge-tfc" style={{ margin: '0 auto 24px' }}>⚽ Foot · Jeux vidéo · Montage vidéo</div>
        <h2>On se fait une passe ?</h2>
        <p>Disponible pour un poste en support informatique ou développement web. Réponse rapide, garantie.</p>
        <a className="btn btn-primary" href="mailto:matthieu.chauvin.31@gmail.com">Coup d'envoi — m'écrire</a>
        <div className="contact-links">
          <span>07 75 75 56 23</span>
          <span>matthieu.chauvin.31@gmail.com</span>
          <span>Mondonville, 31</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>© Matthieu Chauvin — <span className="cross-divider">✛</span> Développeur Web</span>
      <span>Toulouse, France</span>
    </footer>
  );
}

// ---------- APP ----------
function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
