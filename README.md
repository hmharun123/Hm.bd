<body onload="preloader()">
  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Google Search -->
  <div class="search-bar">
    <form action="https://www.google.com/search" method="GET" target="_blank">
      <input type="text" name="q" placeholder="Search Google...">
      <button type="submit">Search</button>
    </form>
  </div>

  <!-- Three Dot Menu -->
  <div class="three-dot-menu" onclick="toggleMenu()">
    <div></div><div></div><div></div>
  </div>
  <nav id="mainMenu" class="menu">
    <a href="#hero">Home</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#gallery">Gallery</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#faq">FAQ</a>
    <a href="#order">Order</a>
    <a href="#contact">Contact</a>
  </nav>

  <!-- Hero Section -->
  <section id="hero">
    <h1>Hello, I'm <span class="typed-text"></span></h1>
    <p>Welcome to my official site.</p>
    <a href="#portfolio" class="btn">View Portfolio</a>
    <a href="cv.pdf" download class="btn">Download CV</a>
  </section>

  <!-- Portfolio -->
  <section id="portfolio">
    <h2>My Projects</h2>
    <div class="portfolio-grid">
      <div class="portfolio-item"><img src="data.jpg" alt="Data Entry"><p>Data Entry</p></div>
      <div class="portfolio-item"><img src="SAMPLE.jpeg" alt="Design"><p>Graphics Design</p></div>
      <div class="portfolio-item"><img src="312.jpg" alt="Web"><p>Web Design</p></div>
    </div>
  </section>

  <!-- Testimonials -->
  <section id="testimonials">
    <h2>What Clients Say</h2>
    <div class="testimonial-slider">
      <div class="testimonial">"Great service!" - John</div>
      <div class="testimonial">"Very creative work!" - Sarah</div>
      <div class="testimonial">"Highly recommended!" - Alex</div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq">
    <h2>Frequently Asked Questions</h2>
    <details><summary>What services do you offer?</summary><p>Graphics, Web, Marketing</p></details>
    <details><summary>How can I order?</summary><p>Use the Order Now form below.</p></details>
    <details><summary>Do you offer support?</summary><p>Yes, 24/7 email support is available.</p></details>
  </section>

  <!-- Animated Counter -->
  <section id="counter">
    <h2>Our Achievements</h2>
    <div class="counter-container">
      <div><span class="count" data-target="500">0</span><p>Projects</p></div>
      <div><span class="count" data-target="300">0</span><p>Clients</p></div>
      <div><span class="count" data-target="5">0</span><p>Years</p></div>
    </div>
  </section>

  <!-- Embedded TikTok & YouTube -->
  <section id="videos">
    <h2>My Videos</h2>
    <div class="video-container">
      <iframe src="https://www.tiktok.com/embed/1234567890" frameborder="0" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>

  <!-- Order Now Form -->
  <section id="order">
    <h2>Order Now</h2>
    <form action="https://docs.google.com/forms/d/e/your-google-form-id/formResponse" method="POST" target="_blank">
      <input type="text" name="entry.123456" placeholder="Your Name" required>
      <input type="email" name="entry.654321" placeholder="Your Email" required>
      <textarea name="entry.112233" placeholder="Your Order Details" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>

  <!-- Gallery Link -->
  <section id="gallery">
    <h2>My Gallery</h2>
    <a href="gallery.html" class="btn">Visit Full Gallery</a>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
    <p>Phone: +8801234567890</p>
    <p>Address: Manikganj, Bangladesh</p>
  </section>

  <!-- Certificates -->
  <section id="certificates">
    <h2>Certificates</h2>
    <img src="file_00000000875861f990b4e5fffbcbb32e.png" alt="Certificate">
  </section>

  <!-- Social Media Buttons -->
  <section id="social">
    <h2>Follow Me</h2>
    <div class="social-links">
      <a href="https://facebook.com" class="facebook">Facebook</a>
      <a href="https://tiktok.com" class="tiktok">TikTok</a>
      <a href="https://youtube.com" class="youtube">YouTube</a>
    </div>
  </section>

  <!-- Back to Top Button -->
  <button id="backToTop" onclick="scrollToTop()">↑</button>

  <!-- Live Chat Widget -->
  <script type="text/javascript">
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/YOUR_TAWKTO_ID/1abcdefgh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  </script>

  <!-- JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
  <script>
    // Preloader
    function preloader() {
      document.getElementById("preloader").style.display = "none";
    }

    // Typing effect
    new Typed(".typed-text", {
      strings: ["Manikganjer Boro Mia", "Funny Creator", "Service Provider"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    // Toggle menu
    function toggleMenu() {
      document.getElementById("mainMenu").classList.toggle("show");
    }

    // Back to top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Counter animation
    const counters = document.querySelectorAll('.count');
    const speed = 200;
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  </script>
</body>
