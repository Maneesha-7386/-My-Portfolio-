import React from "react";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Myntra Clone (E-commerce Website)",
      highlight: "A high-performance e-commerce platform with dynamic product listings and seamless UX.",
      description: "A professional fashion store application built with React. It features a complete shopping experience from product discovery to cart management, all powered by a robust React state architecture.",
      role: [
        "Architected scalability using React components",
        "Implemented real-time data fetching and state management",
        "Designed a pixel-perfect, mobile-first UI with custom CSS",
        "Engineered complex filtering and search functionality"
      ],
      tech: [
        "React", "HTML5", "CSS3", "Responsive Design",
        "Vite", "JavaScript", "Custom Components"
      ],
      features: [
        "Dynamic product filtering and multi-category sorting",
        "Persistent cart and wishlist functionality",
        "Responsive MegaMenu and interactive carousels",
        "Smooth page transitions and micro-interactions"
      ],
      liveLink: "https://m-y-n-t-r-a-c-l-o-n-e1e2e3s4h5a.netlify.app/",
      repoLink: "https://github.com/Maneesha-7386/myntra-clone.git",
      image: "/projects/myntra-clone.png",
      imageGradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      icon: "🛍️",
    },
    {
      id: 2,
      title: "Admin Dashboard – Enterprise Console",
      highlight: "A powerful management interface for data visualization and resource control.",
      description: "A comprehensive administrative panel designed for real-time monitoring and data management. It provides deep insights through interactive visualizations and a full suite of CRUD tools for efficient operations.",
      role: [
        "Developed custom data visualization using Recharts",
        "Built secure authentication and role-based access",
        "Implemented highly accessible administrative UI",
        "Optimized data fetching and state synchronization"
      ],
      tech: ["React", "Custom Charts", "CSS3", "Vite"],
      features: [
        "Comprehensive analytics dashboard with real-time charts",
        "Advanced user and product management (CRUD)",
        "System settings and preference customization",
        "Dark mode optimized and fully responsive layout"
      ],
      liveLink: "https://admin-dash-board-1-2-3-4.netlify.app/#/login",
      repoLink: "https://github.com/Maneesha-7386/admin-dash-board.git",
      image: "/projects/admin-dashboard.png",
      imageGradient: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
      icon: "📊",
    },
    {
      id: 3,
      title: "Personal Portfolio – Brand Identity",
      highlight: "A premium, interactive portfolio showcasing modern frontend expertise.",
      description: "A sleek and professional digital presence designed to highlight technical expertise. Featuring custom CSS animations, smooth scrolling, and a modern aesthetic for maximum impact.",
      role: [
        "Crafted a unique design language and user experience",
        "Implemented efficient ScrollSpy and navigation logic",
        "Optimized asset loading and SEO performance",
        "Engineered responsive layouts for all device sizes"
      ],
      tech: ["React", "HTML5", "CSS3 (Animations)", "Vite"],
      features: [
        "Interactive UI with smooth scroll and active link tracking",
        "Vibrant glassmorphism design and custom gradients",
        "Fully responsive and optimized for mobile performance",
        "Integrated contact system and social media links"
      ],
      liveLink: "https://portfolio-1234567.netlify.app/",
      repoLink: "https://github.com/Maneesha-7386/-My-Portfolio-.git",
      image: "/projects/personal-portfolio.png",
      imageGradient: "linear-gradient(135deg, #6a11cb, #2575fc)",
      icon: "👨‍💻",
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>
        <div className="title-underline"></div>
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="modern-project-card premium-card">
              <div className="project-image-placeholder">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-card-image" />
                ) : (
                  <span className="project-icon-overlay">{project.icon}</span>
                )}
              </div>

              <div className="card-content-wrapper">
                <div className="card-header">
                  <h3 className="project-title-large">{project.title}</h3>
                </div>
                <p className="project-highlight">{project.highlight}</p>

                <div className="card-body">
                  <p className="project-description-text">{project.description}</p>

                  <div className="project-detail-item">
                    <span className="detail-label">My Role:</span>
                    <ul className="role-list">
                      {project.role.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-features">
                    <span className="detail-label">Key Features:</span>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-tags">
                    <span className="detail-label tech-label">Technologies:</span>
                    <div className="tags-container">
                      {project.tech.map((tag, index) => (
                        <span key={index} className="tech-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn premium-live-btn"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn premium-repo-btn"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
