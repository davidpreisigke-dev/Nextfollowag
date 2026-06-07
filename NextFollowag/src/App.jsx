import { useEffect, useState } from 'react'
import heroPeople from './assets/heloisaRyanHeroPng.webp'
import founderWoman from './assets/dona-next-follow.webp'
import duoPortrait from './assets/Ryan-Heloisa.webp'
import duoPortraitAlt from './assets/Ryan-heloisa2.webp'
import logoCocoa from './assets/logo-next-follow-cocoa.png'
import logoLight from './assets/logo-next-follow-light.png'
import './App.css'

const whatsappLink =
  'https://api.whatsapp.com/send/?phone=5527997821275&text=Ol%C3%A1%2C+quero+agendar+meu+diagn%C3%B3stico+estrat%C3%A9gico&type=phone_number&app_absent=0'

const services = [
  {
    icon: 'target',
    title: 'Pare de competir por preço.',
    text: 'Quando sua marca tem posição, o valor deixa de depender da comparação.',
    detail: 'Clareza de narrativa, oferta e percepção para ser escolhida antes da conversa.',
  },
  {
    icon: 'chat',
    title: 'Sua marca precisa ser lembrada.',
    text: 'Presença consistente cria familiaridade, confiança e desejo de aproximação.',
    detail: 'Conteúdo com direção, estética e mensagem para ocupar espaço na mente do paciente.',
  },
  {
    icon: 'pencil',
    title: 'Autoridade gera confiança.',
    text: 'Uma imagem forte reduz dúvidas e aumenta a percepção de cuidado e excelência.',
    detail: 'Identidade, linguagem e direção visual alinhadas para elevar sua reputação.',
  },
  {
    icon: 'bars',
    title: 'Transforme atenção em pacientes.',
    text: 'Estratégia bonita precisa conduzir pessoas certas para a decisão certa.',
    detail: 'Campanhas, funis e análise para transformar percepção em crescimento real.',
  },
]

const cases = [
  {
    tag: 'Percepção premium',
    stat: 'Uma presença que parece maior.',
    text: 'Direção visual e narrativa para sua marca ser sentida como referência.',
    image: duoPortraitAlt,
  },
  {
    tag: 'Confiança imediata',
    stat: 'Ser lembrado antes da escolha.',
    text: 'Conteúdo e estética trabalhando juntos para criar familiaridade e desejo.',
    image: founderWoman,
  },
  {
    tag: 'Escolha natural',
    stat: 'Uma marca impossível de ignorar.',
    text: 'Posicionamento claro para atrair pacientes que reconhecem valor.',
    image: duoPortrait,
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

function ServiceIcon({ type }) {
  if (type === 'chat') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 9c10 0 18 6.5 18 14.5S34 38 24 38a23 23 0 0 1-7.4-1.2L9 39l2.4-6.7A13.5 13.5 0 0 1 6 23.5C6 15.5 14 9 24 9Z" />
        <path d="M17 24h.1M24 24h.1M31 24h.1" />
      </svg>
    )
  }

  if (type === 'pencil') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="m11 37 4.5-12.5L33 7l8 8-17.5 17.5L11 37Z" />
        <path d="m28 12 8 8M15.5 24.5l8 8" />
      </svg>
    )
  }

  if (type === 'bars') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 37V25h7v12h-7ZM21 37V17h7v20h-7ZM32 37V9h7v28h-7Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42a18 18 0 1 1 18-18" />
      <path d="M24 34a10 10 0 1 1 10-10" />
      <path d="M24 24 40 8M35 7h7v7" />
    </svg>
  )
}

function TrustIcon({ type }) {
  if (type === 'growth') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 39h36" />
        <path d="M10 39V29h7v10M22 39V21h7v18M34 39V12h7v27" />
        <path d="m9 25 10-10 8 7L41 7" />
        <path d="M34 7h7v7" />
      </svg>
    )
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 6 39 12v11c0 10-6.2 17.5-15 21-8.8-3.5-15-11-15-21V12l15-6Z" />
        <path d="m18 25 5 5 10-11" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42a18 18 0 1 1 18-18" />
      <path d="M24 34a10 10 0 1 1 10-10" />
      <path d="M24 24 40 8M35 7h7v7" />
    </svg>
  )
}

function SocialIcon({ type }) {
  if (type === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19.2 6.2 15A7.6 7.6 0 1 1 9 17.8L5 19.2Z" />
        <path d="M9.7 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.8 1.3 1.8 2.2 3.1 2.8l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.6v.5c0 .3-.2.6-.5.8-.6.4-1.5.5-2.7.1a9.2 9.2 0 0 1-5.4-5.3c-.4-1-.3-1.8 0-2.2Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 9.5V18M11 18v-4.8c0-2.2 1.3-3.8 3.4-3.8s3.1 1.4 3.1 3.8V18M6.5 6.5h.1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <path d="M9.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM16.8 7.4h.1" />
    </svg>
  )
}

function BrandMark({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#inicio" aria-label="Next Follow">
      <img
        className="brand-logo brand-logo-primary"
        src={light ? logoLight : logoCocoa}
        alt="Next Follow"
      />
      {!light && (
        <img
          className="brand-logo brand-logo-mobile"
          src={logoLight}
          alt=""
          aria-hidden="true"
        />
      )}
    </a>
  )
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const revealItems = document.querySelectorAll('.reveal')
    const tiltItems = document.querySelectorAll('[data-tilt]')
    const canUsePointerEffects = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    let spotlightFrame = 0
    let spotlightPosition = { x: 0, y: 0 }
    let tiltFrame = 0
    let latestTilt = null

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    revealItems.forEach((item) => revealObserver.observe(item))

    const handlePointerMove = (event) => {
      spotlightPosition = { x: event.clientX, y: event.clientY }

      if (spotlightFrame) {
        return
      }

      spotlightFrame = window.requestAnimationFrame(() => {
        root.style.setProperty('--spotlight-x', `${spotlightPosition.x}px`)
        root.style.setProperty('--spotlight-y', `${spotlightPosition.y}px`)
        spotlightFrame = 0
      })
    }

    const handleTiltMove = (event) => {
      latestTilt = {
        card: event.currentTarget,
        clientX: event.clientX,
        clientY: event.clientY,
      }

      if (tiltFrame) {
        return
      }

      tiltFrame = window.requestAnimationFrame(() => {
        if (!latestTilt) {
          tiltFrame = 0
          return
        }

        const { card, clientX, clientY } = latestTilt
        const rect = card.getBoundingClientRect()
        const x = (clientX - rect.left) / rect.width
        const y = (clientY - rect.top) / rect.height
        const rotateX = (0.5 - y) * 5
        const rotateY = (x - 0.5) * 6

        card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`)
        card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`)
        card.style.setProperty('--glow-x', `${(x * 100).toFixed(1)}%`)
        card.style.setProperty('--glow-y', `${(y * 100).toFixed(1)}%`)
        tiltFrame = 0
      })
    }

    const resetTilt = (event) => {
      const card = event.currentTarget
      latestTilt = null

      if (tiltFrame) {
        window.cancelAnimationFrame(tiltFrame)
        tiltFrame = 0
      }

      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
      card.style.setProperty('--glow-x', '50%')
      card.style.setProperty('--glow-y', '50%')
    }

    if (canUsePointerEffects) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
      tiltItems.forEach((item) => {
        item.addEventListener('pointermove', handleTiltMove)
        item.addEventListener('pointerleave', resetTilt)
      })
    }

    return () => {
      if (spotlightFrame) {
        window.cancelAnimationFrame(spotlightFrame)
      }

      if (tiltFrame) {
        window.cancelAnimationFrame(tiltFrame)
      }

      revealObserver.disconnect()

      if (canUsePointerEffects) {
        window.removeEventListener('pointermove', handlePointerMove)
        tiltItems.forEach((item) => {
          item.removeEventListener('pointermove', handleTiltMove)
          item.removeEventListener('pointerleave', resetTilt)
        })
      }
    }
  }, [])

  return (
    <>
      <div className="cursor-spotlight" aria-hidden="true" />
      <header className="site-header">
        <BrandMark />
        <button
          className={`mobile-menu-button${isMobileMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <span className="mobile-menu-lines" aria-hidden="true" />
        <div className={`mobile-menu-panel${isMobileMenuOpen ? ' is-open' : ''}`}>
          <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
          <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#cases" onClick={() => setIsMobileMenuOpen(false)}>Cases</a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
          <a href={whatsappLink} onClick={() => setIsMobileMenuOpen(false)}>Fale Conosco</a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <img src={heroPeople} alt="" />
          </div>
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <p className="eyebrow hero-eyebrow">AGÊNCIA DE POSICIONAMENTO DIGITAL</p>
              <h1>
                <span>Sua marca</span>
                <span>merece ser</span>
                <em>escolhida.</em>
              </h1>
              <p className="hero-text">
                Criamos sites, identidade e posicionamento para transformar empresas em marcas
                memoráveis.
              </p>
              <div className="hero-actions">
                <a className="button hero-primary" href={whatsappLink}>
                  Solicitar Diagnóstico
                  <ArrowIcon />
                </a>
                <a className="hero-secondary" href="#cases">
                  Ver Projetos
                  <ArrowIcon />
                </a>
              </div>
              <div className="hero-trust-list" aria-label="Indicadores de confiança">
                <div className="hero-trust-item">
                  <TrustIcon type="growth" />
                  <span><strong>+50</strong> Projetos Desenvolvidos</span>
                </div>
                <div className="hero-trust-item">
                  <TrustIcon type="target" />
                  <span>Sites de Alta Conversão</span>
                </div>
                <div className="hero-trust-item">
                  <TrustIcon type="shield" />
                  <span>Posicionamento Estratégico</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section" id="servicos">
          <div className="services-intro reveal">
            <p className="eyebrow">O que fazemos</p>
            <div className="services-signature" aria-label="Pilares da Next Follow">
              <span>Posicionamento</span>
              <span>Autoridade</span>
              <span>Captação</span>
              <span>Branding</span>
            </div>
          </div>

          <div className="service-strip reveal">
            {services.map((item) => (
              <article className="service-item" key={item.title} data-tilt>
                <ServiceIcon type={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="service-detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cases-section" id="cases">
          <div className="section-copy reveal">
            <p className="eyebrow">Direção de percepção</p>
            <h2>
              Marcas que são vistas, lembradas e <em>escolhidas.</em>
            </h2>
            <p>
              A estética abre a porta. A estratégia sustenta a confiança. A
              consistência faz sua marca permanecer na memória.
            </p>
            <a className="button" href="#contato">
              Conversar sobre minha marca
              <ArrowIcon />
            </a>
          </div>

          <div className="case-grid">
            {cases.map((item) => (
              <article className="case-card reveal" key={item.tag} data-tilt>
                <img src={item.image} alt="" aria-hidden="true" />
                <span className="case-hint" aria-hidden="true">Explorar</span>
                <div className="case-content">
                  <span>{item.tag}</span>
                  <strong>{item.stat}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="statement-section" id="sobre">
          <div className="statement-inner reveal">
            <h2>
              Nós não entregamos <em>apenas posts.</em>
            </h2>
            <div>
              <p>
                Entregamos método, narrativa e consistência. Entregamos
                posicionamento, direção e construção de percepção.
              </p>
              <p>
                Porque autoridade não se cria com um post viral, se constrói com
                posicionamento repetido.
              </p>
            </div>
            <img className="signature-logo" src={logoLight} alt="" aria-hidden="true" />
          </div>
        </section>

        <section className="cta-section" id="conteudo">
          <div className="cta-banner reveal" data-tilt>
            <div className="cta-copy">
              <h2 className="meaning-headline">
                Pronto para{' '}
                <span className="word-position">posicionar</span> sua marca e{' '}
                <span className="word-attract">atrair</span> os{' '}
                <span className="word-right">pacientes certos</span>?
              </h2>
              <a className="button" href={whatsappLink}>
                Vamos conversar
                <ArrowIcon />
              </a>
            </div>
            <div className="tablet-scene" aria-hidden="true">
              <div className="tablet-card">
                <BrandMark />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contato">
        <div>
          <BrandMark light />
          <div className="footer-positioning">
            <p>Marketing para profissionais da saúde</p>
            <p>Social Media • Captação • Design • Branding</p>
            <p>Conectamos sua autoridade a novos pacientes</p>
            <a href={whatsappLink}>Fale com nossa equipe</a>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/nextfollowag/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon type="instagram" />
            </a>
            <a href={whatsappLink} aria-label="WhatsApp">
              <SocialIcon type="whatsapp" />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
            </a>
          </div>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#cases">Cases</a>
          <a href="#conteudo">Conteúdo</a>
          <a href={whatsappLink}>Fale Conosco</a>
        </div>
        <div>
          <h3>Serviços</h3>
          <a href="#servicos">Parar de competir por preço</a>
          <a href="#servicos">Ser lembrado com consistência</a>
          <a href="#servicos">Construir autoridade visual</a>
          <a href="#servicos">Transformar atenção em pacientes</a>
        </div>
        <div>
          <h3>Contato</h3>
          <p>(27) 99782-1275</p>
          <p>contato@nextfollow.com.br</p>
          <p>Vitória - ES</p>
          <a className="footer-button" href={whatsappLink}>
            Fale Conosco
            <ArrowIcon />
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
