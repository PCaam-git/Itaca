<script>
        // Función para manejar el carrusel
        function setupCarousel() {
          const slides = document.querySelectorAll('.carousel-item');
          const dots = document.querySelectorAll('.carousel-nav-btn');
          const prev = document.querySelector('.carousel-prev');
          const next = document.querySelector('.carousel-next');
          let currentSlide = 0;
          const slideCount = slides.length;
          
          // Cambiar slide
          function goToSlide(n) {
            // Remover clase active de todos los slides
            slides.forEach(slide => {
              slide.classList.remove('active');
            });
            
            // Remover clase active de todos los dots
            dots.forEach(dot => {
              dot.classList.remove('active');
            });
            
            // Actualizar el slide actual
            currentSlide = (n + slideCount) % slideCount;
            
            // Activar el slide actual y su dot correspondiente
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
          }
          
          // Evento para el botón anterior
          if (prev) {
            prev.addEventListener('click', () => {
              goToSlide(currentSlide - 1);
            });
          }
          
          // Evento para el botón siguiente
          if (next) {
            next.addEventListener('click', () => {
              goToSlide(currentSlide + 1);
            });
          }
          
          // Eventos para los dots de navegación
          dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
              goToSlide(index);
            });
          });
          
          // Cambio automático de slides
          setInterval(() => {
            goToSlide(currentSlide + 1);
          }, 5000);
        }

        // Función para el menú móvil
        function setupMobileMenu() {
          const mobileToggle = document.querySelector('.mobile-menu-toggle');
          const mainNav = document.querySelector('.main-nav');
          
          if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', () => {
              mainNav.classList.toggle('show');
            });
          }
        }

        // Inicializar cuando el DOM esté cargado
        document.addEventListener('DOMContentLoaded', () => {
          setupCarousel();
          setupMobileMenu();
          
          // Mostrar el sidebar al hacer hover
          const sidebarSections = document.querySelectorAll('.sidebar-section');
          
          sidebarSections.forEach(section => {
            const menu = section.querySelector('ul');
            
            section.addEventListener('mouseenter', () => {
              if (menu) menu.style.display = 'block';
            });
            
            section.addEventListener('mouseleave', () => {
              if (menu) menu.style.display = 'none';
            });
          });
        });
    </script>        /* Footer */
        footer {
            background-color: var(--footer-<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Itaca - Explora el Mundo</title>
    <style>
        /* Variables CSS */
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #e74c3c;
            --text-color: #333;
            --background-color: #f8f9fa;
            --footer-color: #1a2530;
            --white: #ffffff;
            --light-gray: #e9ecef;
            --medium-gray: #6c757d;
            --dark-gray: #343a40;
        }

        /* Estilos generales */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            color: var(--text-color);
            background-color: var(--background-color);
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul {
            list-style: none;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: var(--secondary-color);
            color: var(--white);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn:hover {
            background-color: #e67e22;
            transform: translateY(-2px);
        }

        /* Header y navegación */
        header {
            background-color: var(--white);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }

        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 28px;
            font-weight: 300;
            color: var(--primary-color);
            letter-spacing: 3px;
        }

        .logo img {
            height: 40px;
        }

        .main-nav ul {
            display: flex;
        }

        .main-nav li {
            margin-left: 40px;
            position: relative;
        }

        .main-nav a {
            color: var(--text-color);
            font-weight: 400;
            transition: color 0.3s ease;
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .main-nav a:hover {
            color: var(--secondary-color);
        }
        
        /* Dropdown menus */
        .main-nav li {
            position: relative;
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: var(--white);
            min-width: 200px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 100;
        }
        
        .main-nav li:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-menu li {
            margin: 0;
        }
        
        .dropdown-menu a {
            display: block;
            padding: 12px 15px;
            color: var(--text-color);
            font-size: 14px;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .dropdown-menu a:hover {
            background-color: #f5f5f5;
        }

        .mobile-menu-toggle {
            display: none;
            font-size: 24px;
            cursor: pointer;
        }

        /* Carrusel de imágenes */
        .carousel {
            margin-top: 80px;
            position: relative;
            height: 700px;
            overflow: hidden;
        }

        .carousel-item {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1.5s ease;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .carousel-item.active {
            opacity: 1;
        }

        .carousel-caption {
            text-align: center;
            color: var(--white);
            background-color: rgba(0, 0, 0, 0.3);
            padding: 30px 40px;
            border-radius: 0;
            max-width: 600px;
        }

        .carousel-caption h2 {
            font-size: 40px;
            margin-bottom: 15px;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .carousel-caption p {
            font-size: 18px;
            margin-bottom: 25px;
        }

        .carousel-nav {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
        }

        .carousel-nav-btn {
            width: 12px;
            height: 12px;
            background-color: var(--white);
            border-radius: 50%;
            margin: 0 8px;
            cursor: pointer;
        }

        .carousel-nav-btn.active {
            background-color: var(--secondary-color);
        }

        .carousel-prev, .carousel-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 30px;
            color: var(--white);
            background-color: rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10;
        }

        .carousel-prev {
            left: 20px;
        }

        .carousel-next {
            right: 20px;
        }

        /* Layout principal */
        .main-layout {
            display: flex;
            margin-top: 30px;
            gap: 20px;
        }

        /* Sidebar */
        .sidebar {
            width: 280px;
            background-color: var(--white);
            border-radius: 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            padding: 30px;
        }

        .sidebar-section {
            margin-bottom: 40px;
        }

        .sidebar-section h3 {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--light-gray);
            font-weight: 300;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 16px;
        }

        .sidebar-section ul {
            display: none;
        }
        
        .sidebar-section:hover ul {
            display: block;
        }

        .sidebar-section ul li {
            margin-bottom: 15px;
        }

        .sidebar-section ul li a {
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            padding: 8px 0;
            font-size: 15px;
            color: var(--medium-gray);
        }

        .sidebar-section ul li a:hover {
            color: var(--secondary-color);
            padding-left: 5px;
        }

        /* Contenido principal */
        .main-content {
            flex: 1;
        }

        .section-title {
            font-size: 32px;
            color: var(--primary-color);
            margin-bottom: 30px;
            position: relative;
            padding-bottom: 15px;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 2px;
            background-color: var(--secondary-color);
        }

        /* Tarjetas de destinos */
        .destinations-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .destination-card {
            background-color: var(--white);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .destination-card:hover {
            transform: translateY(-5px);
        }

        .destination-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .destination-card-content {
            padding: 20px;
        }

        .destination-card h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: var(--primary-color);
        }

        .destination-card p {
            margin-bottom: 15px;
            color: var(--medium-gray);
        }

        .price {
            font-size: 18px;
            font-weight: bold;
            color: var(--secondary-color);
            margin-bottom: 15px;
            display: block;
        }

        /* Travel Types */
        .travel-types {
            margin-bottom: 60px;
        }

        .travel-types-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .travel-type-item {
            background-color: var(--white);
            border-radius: 0;
            text-align: center;
            padding: 40px 30px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }
        
        .travel-type-item::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 0;
            background-color: var(--secondary-color);
            transition: width 0.4s ease;
        }

        .travel-type-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .travel-type-item:hover::before {
            width: 100%;
        }

        .travel-type-item i {
            font-size: 50px;
            margin-bottom: 20px;
            color: var(--secondary-color);
            display: block;
        }

        .travel-type-item h3 {
            margin-bottom: 15px;
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 1px;
        }
        
        .travel-type-item p {
            color: var(--medium-gray);
            line-height: 1.6;
        }

        /* Galería */
        .gallery {
            margin-bottom: 60px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
        }

        .gallery-item {
            position: relative;
            height: 250px;
            overflow: hidden;
            border-radius: 0;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
            transform: scale(1.05);
        }

        .gallery-item-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        
        .gallery-item-overlay p {
            font-size: 18px;
            font-weight: 300;
            letter-spacing: 1px;
            transform: translateY(20px);
            transition: transform 0.4s ease;
        }

        .gallery-item:hover .gallery-item-overlay {
            opacity: 1;
        }
        
        .gallery-item:hover .gallery-item-overlay p {
            transform: translateY(0);
        }

        /* Formulario de contacto */
        .contact-form {
            background-color: var(--white);
            border-radius: 0;
            padding: 40px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
            margin-bottom: 60px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 400;
            color: var(--dark-gray);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid var(--light-gray);
            border-radius: 0;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
        }

        /* Footer */
        footer {
            background-color: var(--footer-color);
            color: var(--white);
            padding: 60px 0 30px;
        }

        .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-section h3 {
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 15px;
            font-weight: 300;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            font-size: 16px;
        }

        .footer-section h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 1px;
            background-color: var(--secondary-color);
        }

        .footer-section ul li {
            margin-bottom: 12px;
        }

        .footer-section ul li a {
            font-size: 15px;
            opacity: 0.7;
            transition: all 0.3s ease;
        }

        .footer-section ul li a:hover {
            color: var(--secondary-color);
            opacity: 1;
            padding-left: 5px;
        }

        .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-icons a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            transition: all 0.3s ease;
            font-size: 14px;
        }

        .social-icons a:hover {
            background-color: var(--secondary-color);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            margin-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: 1px;
        }

        /* Responsividad */
        @media (max-width: 1024px) {
            .carousel {
                height: 500px;
            }
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                align-items: flex-start;
            }

            .main-nav {
                width: 100%;
                margin-top: 15px;
            }

            .main-nav ul {
                flex-direction: column;
            }

            .main-nav li {
                margin-left: 0;
                margin-bottom: 10px;
            }

            .mobile-menu-toggle {
                display: block;
                position: absolute;
                top: 15px;
                right: 15px;
            }

            .main-nav {
                display: none;
            }

            .main-nav.show {
                display: block;
            }

            .carousel {
                height: 400px;
                margin-top: 120px;
            }

            .carousel-caption h2 {
                font-size: 28px;
            }

            .main-layout {
                flex-direction: column;
            }

            .sidebar {
                width: 100%;
                margin-bottom: 20px;
            }

            .destinations-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
        }

        @media (max-width: 480px) {
            .carousel {
                height: 300px;
            }

            .carousel-caption h2 {
                font-size: 22px;
            }

            .section-title {
                font-size: 24px;
            }

            .destinations-grid, .travel-types-grid, .gallery-grid {
                grid-template-columns: 1fr;
            }

            .footer-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header con navegación -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <a href="#">
                    <img src="/api/placeholder/200/60" alt="Logo Itaca">
                </a>
            </div>
            <div class="mobile-menu-toggle">☰</div>
            <nav class="main-nav">
                <ul>
                    <li>
                        <a href="#">Destinos</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Kenia</a></li>
                            <li><a href="#">Petra</a></li>
                            <li><a href="#">Kioto</a></li>
                            <li><a href="#">Marrakech</a></li>
                            <li><a href="#">Islandia</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Tipos de Viajes</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Relax</a></li>
                            <li><a href="#">Aventura</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Sorpréndeme</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Carrusel de imágenes -->
    <section class="carousel">
        <div class="carousel-item active" style="background-image: url('/api/placeholder/1920/1080')">
            <div class="carousel-caption">
                <h2>Descubre el mundo que imaginas</h2>
                <p>Explora destinos que te inspirarán y cambiarán tu forma de ver el mundo</p>
                <a href="#" class="btn">Descubrir viajes</a>
            </div>
        </div>
        <div class="carousel-item" style="background-image: url('/api/placeholder/1920/1080')">
            <div class="carousel-caption">
                <h2>Experiencias únicas</h2>
                <p>Vive momentos inolvidables en destinos que dejarán huella en tu memoria</p>
                <a href="#" class="btn">Explorar experiencias</a>
            </div>
        </div>
        <div class="carousel-item" style="background-image: url('/api/placeholder/1920/1080')">
            <div class="carousel-caption">
                <h2>Viajes personalizados</h2>
                <p>Tu viaje, a tu medida. Creamos experiencias que se adaptan a tus deseos</p>
                <a href="#" class="btn">Personalizar viaje</a>
            </div>
        </div>
        <div class="carousel-prev">&#10094;</div>
        <div class="carousel-next">&#10095;</div>
        <div class="carousel-nav">
            <div class="carousel-nav-btn active"></div>
            <div class="carousel-nav-btn"></div>
            <div class="carousel-nav-btn"></div>
        </div>
    </section>

    <div class="container">
        <div class="main-layout">
            <!-- Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-section">
                    <h3>Los más buscados</h3>
                    <ul>
                        <li><a href="#">Kenia</a></li>
                        <li><a href="#">Petra</a></li>
                        <li><a href="#">Kioto</a></li>
                        <li><a href="#">Marrakech</a></li>
                        <li><a href="#">Islandia</a></li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h3>Ofertas</h3>
                    <ul>
                        <li><a href="#">Aventura en Islandia: 15% dto</a></li>
                        <li><a href="#">Relax en Marrakech: spa incluido</a></li>
                        <li><a href="#">Kioto en primavera: oferta especial</a></li>
                        <li><a href="#">Última hora: Safari en Kenia</a></li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Reservas</a></li>
                        <li><a href="#">Cancelaciones</a></li>
                        <li><a href="#">COVID-19</a></li>
                        <li><a href="#">Preguntas frecuentes</a></li>
                    </ul>
                </div>
                <div class="sidebar-section">
                    <h3>Información de interés</h3>
                    <ul>
                        <li><a href="#">Requisitos de viaje</a></li>
                        <li><a href="#">Seguros</a></li>
                        <li><a href="#">Guías de destino</a></li>
                    </ul>
                </div>
            </aside>

            <!-- Contenido principal -->
            <main class="main-content">
                <!-- Sección de destinos -->
                <section class="destinations">
                    <h2 class="section-title">Destinos populares</h2>
                    <div class="destinations-grid">
                        <div class="destination-card">
                            <img src="/api/placeholder/400/300" alt="Kenia">
                            <div class="destination-card-content">
                                <h3>Kenia</h3>
                                <p>Safari, paisajes y vida salvaje en estado puro</p>
                                <a href="#" class="btn">Ver detalles</a>
                            </div>
                        </div>
                        <div class="destination-card">
                            <img src="/api/placeholder/400/300" alt="Petra">
                            <div class="destination-card-content">
                                <h3>Petra</h3>
                                <p>La ciudad perdida en Jordania, una maravilla arqueológica</p>
                                <a href="#" class="btn">Ver detalles</a>
                            </div>
                        </div>
                        <div class="destination-card">
                            <img src="/api/placeholder/400/300" alt="Kioto">
                            <div class="destination-card-content">
                                <h3>Kioto</h3>
                                <p>El corazón cultural de Japón con sus templos y jardines</p>
                                <a href="#" class="btn">Ver detalles</a>
                            </div>
                        </div>
                        <div class="destination-card">
                            <img src="/api/placeholder/400/300" alt="Marrakech">
                            <div class="destination-card-content">
                                <h3>Marrakech</h3>
                                <p>La ciudad roja de Marruecos, un festín para los sentidos</p>
                                <a href="#" class="btn">Ver detalles</a>
                            </div>
                        </div>
                        <div class="destination-card">
                            <img src="/api/placeholder/400/300" alt="Islandia">
                            <div class="destination-card-content">
                                <h3>Islandia</h3>
                                <p>Paisajes volcánicos, auroras boreales y naturaleza extrema</p>
                                <a href="#" class="btn">Ver detalles</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Sección de tipos de viaje -->
                <section class="travel-types">
                    <h2 class="section-title">Tipos de viajes</h2>
                    <div class="travel-types-grid">
                        <div class="travel-type-item">
                            <i>🌴</i>
                            <h3>Relax</h3>
                            <p>Desconecta en los mejores destinos para relajarte</p>
                        </div>
                        <div class="travel-type-item">
                            <i>🏔️</i>
                            <h3>Aventura</h3>
                            <p>Experiencias llenas de adrenalina y descubrimiento</p>
                        </div>
                    </div>
                </section>

                <!-- Galería de imágenes -->
                <section class="gallery">
                    <h2 class="section-title">Galería de inspiración</h2>
                    <div class="gallery-grid">
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 1">
                            <div class="gallery-item-overlay">
                                <p>Santorini, Grecia</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 2">
                            <div class="gallery-item-overlay">
                                <p>Kioto, Japón</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 3">
                            <div class="gallery-item-overlay">
                                <p>Machu Picchu, Perú</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 4">
                            <div class="gallery-item-overlay">
                                <p>Safari, Kenia</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 5">
                            <div class="gallery-item-overlay">
                                <p>Nueva York, EEUU</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 6">
                            <div class="gallery-item-overlay">
                                <p>Bora Bora, Polinesia</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 7">
                            <div class="gallery-item-overlay">
                                <p>Gran Barrera, Australia</p>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="/api/placeholder/400/300" alt="Galería 8">
                            <div class="gallery-item-overlay">
                                <p>Venecia, Italia</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Formulario de contacto -->
                <section class="contact">
                    <h2 class="section-title">Contacta con nosotros</h2>
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Nombre completo</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Teléfono</label>
                            <input type="tel" id="phone">
                        </div>
                        <div class="form-group">
                            <label for="destination">Destino de interés</label>
                            <select id="destination">
                                <option value="">Selecciona un destino</option>
                                <option value="europa">Europa</option>
                                <option value="asia">Asia</option>
                                <option value="africa">África</option>
                                <option value="norteamerica">Norteamérica</option>
                                <option value="sudamerica">Sudamérica</option>
                                <option value="oceania">Oceanía</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="travel-type">Tipo de viaje</label>
                            <select id="travel-type">
                                <option value="">Selecciona una opción</option>
                                <option value="solo">Viajo solo</option>
                                <option value="grupo">Quiero unirme a un grupo</option>
                                <option value="compania">Viajo en compañía</option>
                            </select>
                        </div>
                        <button type="submit" class="btn">Enviar mensaje</button>
                    </form>
                </section>
            </main>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>Itaca</h3>
                    <p>Experiencias únicas y viajes personalizados para los exploradores más exigentes.</p>
                    <div class="social-icons">
                        <a href="#"><span>FB</span></a>
                        <a href="#"><span>IG</span></a>
                        <a href="#"><span>TW</span></a>
                        <a href="#"><span>YT</span></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Destinos</h3>
                    <ul>
                        <li><a href="#">Kenia</a></li>
                        <li><a href="#">Petra</a></li>
                        <li><a href="#">Kioto</a></li>
                        <li><a href="#">Marrakech</a></li>
                        <li><a href="#">Islandia</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li><a href="#">+34 900 123 456</a></li>
                        <li><a href="#">info@itaca.com</a></li>
                        <li><a href="#">Calle Viajeros 28, Madrid</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Información legal</h3>
                    <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Política de cookies</a></li>
                        <li><a href="#">Condiciones generales</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                &copy; 2025 Itaca Travel. Todos los derechos reservados.
            </div>
        </div>
    </footer>