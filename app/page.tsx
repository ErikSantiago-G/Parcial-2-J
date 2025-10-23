"use client"

export default function PortfolioPage() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#acerca-de">
            <i className="bi bi-code-slash me-2"></i>
            Juan Manuel Pelaez
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#acerca-de">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#estudios">
                  Estudios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experiencia">
                  Experiencia
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#intereses">
                  Intereses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <section id="acerca-de" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1761170392962-39RtK18DyQPQ1GgfD0KloYOtNjY6pT.jpg"
                alt="Juan Manuel Pelaez Tamayo"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: "250px", width: "100%" }}
              />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <h1 className="display-4 fw-bold mb-3">Juan Manuel Pelaez Tamayo</h1>
              <p className="lead text-muted mb-4">Estudiante de Ingeniería Informática | 19 años</p>
              <p className="mb-4">
                Apasionado por la tecnología y el desarrollo de software, con experiencia en administración y un fuerte
                interés en el emprendimiento. Busco constantemente aprender nuevas tecnologías y aplicar mis
                conocimientos en proyectos innovadores.
              </p>
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-telephone-fill text-primary fs-4 me-3"></i>
                    <div>
                      <small className="text-muted d-block">Teléfono</small>
                      <a href="tel:3116636519" className="text-decoration-none">
                        3116636519
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill text-primary fs-4 me-3"></i>
                    <div>
                      <small className="text-muted d-block">Email</small>
                      <a href="mailto:jpelaez735@gmail.com" className="text-decoration-none">
                        jpelaez735@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-github text-primary fs-4 me-3"></i>
                    <div>
                      <small className="text-muted d-block">GitHub</small>
                      <a
                        href="https://github.com/xJelaex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        @xJelaex
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="estudios" className="py-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-center">
            <i className="bi bi-mortarboard-fill text-primary me-2"></i>
            Estudios
          </h2>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-laptop fs-4"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title fw-bold mb-1">Ingeniería Informática</h5>
                      <p className="text-muted mb-2">Corporación Universitaria La Sallista</p>
                      <span className="badge bg-success">Actualmente Estudiando</span>
                    </div>
                  </div>
                  <p className="card-text">
                    Formación integral en desarrollo de software, bases de datos, algoritmos y estructuras de datos.
                    Enfoque en soluciones tecnológicas innovadoras y metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-secondary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-book fs-4"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="card-title fw-bold mb-1">Educación Secundaria</h5>
                      <p className="text-muted mb-2">Bachillerato Completo</p>
                      <span className="badge bg-primary">Completado</span>
                    </div>
                  </div>
                  <p className="card-text">
                    Formación académica básica con énfasis en ciencias y matemáticas, desarrollando habilidades
                    fundamentales para la educación superior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-center">
            <i className="bi bi-briefcase-fill text-primary me-2"></i>
            Experiencia
          </h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-shop fs-3"></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                        <div>
                          <h4 className="fw-bold mb-1">Administrador</h4>
                          <h6 className="text-primary mb-2">Apolo13 Heladería</h6>
                        </div>
                        <span className="badge bg-info text-dark">4 meses</span>
                      </div>
                      <ul className="mb-0">
                        <li className="mb-2">
                          Gestión operativa del establecimiento y coordinación del equipo de trabajo
                        </li>
                        <li className="mb-2">Control de inventario y administración de recursos</li>
                        <li className="mb-2">Atención al cliente y resolución de problemas</li>
                        <li>Desarrollo de habilidades de liderazgo y gestión empresarial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-center">
            <i className="bi bi-code-square text-primary me-2"></i>
            Habilidades Técnicas
          </h2>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <div
                    className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-filetype-py text-warning" style={{ fontSize: "2.5rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Python</h5>
                  <p className="text-muted small mb-3">Conocimiento Funcional</p>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">Básico-Intermedio</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <div
                    className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-filetype-html text-danger" style={{ fontSize: "2.5rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">HTML</h5>
                  <p className="text-muted small mb-3">Conocimiento Funcional</p>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">Básico-Intermedio</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-filetype-java text-primary" style={{ fontSize: "2.5rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">Java</h5>
                  <p className="text-muted small mb-3">Conocimiento Introductorio</p>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">Fundamentos</small>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-database-fill text-success" style={{ fontSize: "2.5rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold">SQL</h5>
                  <p className="text-muted small mb-3">Conocimiento Introductorio</p>
                  <div className="progress" style={{ height: "8px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow={35}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">Fundamentos</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="intereses" className="py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4 text-center">
            <i className="bi bi-lightbulb-fill text-primary me-2"></i>
            Áreas de Interés
          </h2>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-code-slash text-primary" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Desarrollo de Software</h5>
                  <p className="card-text text-muted">
                    Creación de aplicaciones innovadoras y soluciones tecnológicas. Interés en metodologías ágiles y
                    mejores prácticas de programación.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-rocket-takeoff text-success" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Emprendimiento</h5>
                  <p className="card-text text-muted">
                    Desarrollo de ideas de negocio y proyectos propios. Pasión por la innovación y la creación de valor
                    en el mercado tecnológico.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-graph-up-arrow text-info" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Análisis de Datos</h5>
                  <p className="card-text text-muted">
                    Interpretación de datos para tomar decisiones informadas. Interés en finanzas y aplicación de
                    análisis cuantitativo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-currency-dollar text-warning" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Finanzas</h5>
                  <p className="card-text text-muted">
                    Gestión financiera y análisis de inversiones. Comprensión de mercados y estrategias de crecimiento
                    económico.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-megaphone text-danger" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Marketing Digital</h5>
                  <p className="card-text text-muted">
                    Estrategias de promoción en medios digitales. Interés en SEO, redes sociales y análisis de métricas
                    de marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 hover-card">
                <div className="card-body text-center p-4">
                  <div
                    className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className="bi bi-bar-chart-line text-secondary" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Estrategia Comercial</h5>
                  <p className="card-text text-muted">
                    Planificación y ejecución de estrategias de negocio. Desarrollo de planes comerciales y análisis de
                    mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; 2025 Juan Manuel Pelaez Tamayo. Todos los derechos reservados.</p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a
                href="https://github.com/xJelaex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a href="mailto:jpelaez735@gmail.com" className="text-white me-3">
                <i className="bi bi-envelope fs-4"></i>
              </a>
              <a href="tel:3116636519" className="text-white">
                <i className="bi bi-telephone fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}
