<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Harun's Personal Website</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
/* প্রি-লোডার */
#preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff url('https://i.gifer.com/YCZH.gif') no-repeat center;
  z-index: 9999;
}
.search-bar form {
  display: flex;
}
.search-bar input[type="text"] {
  flex: 1;
  padding: 8px;
}
.search-bar button {
  background-color: green;
  color: white;
  border: none;
  padding: 8px 12px;
}
/* থ্রি ডট মেনু */
.three-dot-menu {
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1001;
}
.three-dot-menu div {
  width: 8px;
  height: 8px;
  background: #333;
  margin: 3px;
  border-radius: 50%;
}
/* মেনু ন্যাভিগেশন */
.menu {
  position: fixed;
  top: 40px;
  right: 10px;
  background: white;
  padding: 10px;
  border: 1px solid #ddd;
  display: none;
  z-index: 999;
}
.menu.show {
  display: block;
}
.menu a {
  display: block;
  margin: 5px 0;
  color: #333;
  text-decoration: none;
}
/* হিরো সেকশন */
#hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ffecd2, #fcb69f);
  text-align: center;
}
#hero h1 {
  font-size: 2em;
}
#hero .btn {
  margin: 10px;
  padding: 10px 20px;
  background: #fd7e14;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
/* সেকশন স্টাইল */
section {
  padding: 40px 20px;
  text-align: center;
}
/* পোর্টফোলিও */
.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.portfolio-item {
  margin: 10px;
  width: 150px;
}
.portfolio-item img {
  width: 100%;
  border-radius: 8px;
}
/* টেস্টিমোনিয়াল স্লাইডার */
.testimonial-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}
.testimonial {
  min-width: 250px;
  padding: 15px;
  background: #f2f2f2;
  border-radius: 10px;
}
/* FAQ */
details summary {
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0;
}
details p {
  margin: 0 0 10px;
}
/* কাউন্টার */
.counter-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.counter-container div {
  text-align: center;
}
/* ভিডিও এমবেড */
.video-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.video-container iframe {
  width: 300px;
  height: 200px;
  border: none;
  border-radius: 10px;
}
/* গ্যালারি বাটন */
#gallery .btn {
  background: #e1306c; 
  color: white;
  padding: 10px 20px;
}
/* সার্টিফিকেট ছবি */
#certificates img {
  width: 300px;
  max-width: 90%;
  margin: 10px auto;
}
/* সোশ্যাল মিডিয়া বাটন */
.social-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.social-links a {
  padding: 10px 15px;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}
.facebook { background: #3b5998; }
.tiktok { background: #000; }
.youtube { background: #FF0000; 
}
/* ব্যাক টু টপ */
#backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #FF0000; 
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
}
/* রেস্পন্সিভ ডিজাইন */
@media (max-width: 768px) {
  .portfolio-grid, .video-container, .counter-container {
    flex-direction: column;
    align-items: center;
  }  
  .social-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  margin-top: 15px;
}
.btn-social {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  transition: background 0.3s ease;
}
/* Platform-specific colors */
.facebook { background: #3b5998; }
.youtube { background: #ff0000; }
.whatsapp { background: #25d366; }
.instagram { background: #e1306c; }
.tiktok { background: #000000; }
.fiverr { background: #1dbf73; }
}
.btn-social i {
  font-size: 20px;
}
@media (max-width: 480px) {
  .btn-social {
    font-size: 14px;
    padding: 10px 15px;
  }
 .btn-social i {
    font-size: 18px;
  }
.portfolio-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
  max-width: 500px;
}
/* Common button style */
.btn-portfolio {
  display: inline-block;
  color: white;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
  text-align: center;
}
/* Button colors */
.btn-portfolio.blue {
  background-color: #007BFF;
}
.btn-portfolio.blue:hover {
  background-color: #0056b3;
}
.btn-portfolio.green {
  background-color: #28a745;
}
.btn-portfolio.green:hover {
  background-color: #1e7e34;
}
.btn-portfolio.orange {
  background-color: #fd7e14;
}
.btn-portfolio.orange:hover {
  background-color: #e46000;
}
.btn-portfolio.red {
  background-color: #dc3545;
}
.btn-portfolio.red:hover {
  background-color: #b02a37;
}
  /* Three Dot Menu Style */
.three-dot-menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
.menu-button {
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}
.menu-content {
  display: none;
  position: absolute;
  top: 40px;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-direction: column;
  padding: 10px;
}
.menu-content a {
  text-decoration: none;
  color: #333;
  padding: 8px 12px;
  display: block;
  transition: background 0.3s;
  font-family: Arial, sans-serif;
}
.menu-content a:hover {
  background-color: #f0f0f0;
}
.menu-content.show {
  display: block;
}
</style>
<head>
<!-- Font Awesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<!-- Link to External CSS -->
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<body onload="preloader()">
  <!-- Preloader -->
  <div id="preloader"></div>

  <!-- Google Search -->
  <div class="search-bar">
    <form action="https://www.google.com/search" method="GET" target="_blank">
      <input type="text" name="q" placeholder="Search Google..."><button type="submit">Search</button>
    </form>
  </div>

   <!-- Three Dot Menu -->
<div class="three-dot-menu">
  <button class="menu-button" onclick="toggleMenu()">
    <i class="fas fa-ellipsis-v"></i>
  </button>
  <div class="menu-content" id="mainMenu">
    <a href="#hero">🏠 Home</a>
    <a href="#about">👤 Profile</a>
    <a href="#portfolio">🧩 Projects</a>
    <a href="#gallery">🖼️ Gallery</a>
    <a href="#portfolio">📁 Portfolio</a>
    <a href="#social">🌐 Social Media</a>
    <a href="#about">ℹ️ About</a>
    <a href="#settings">⚙️ Settings</a>
    <a href="#privacy">🔐 Privacy</a>
    <a href="#contact">📞 Contact</a>
    <a href="Md_Harun_Or_Rashid_CV_Image.pdf" download>⬇️ Download CV</a>
    <a href="#order">✉️ Send Message</a>
  </div>
</div>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Md. Harun Or Rashid</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<!-- Hero Section Start -->
<section class="hero-section">
  <div class="hero-content">
    <img src="file_00000000758861f884606a82c460dc7a (1).png" alt="Md. Harun Logo" class="hero-logo">
    <h1 class="hero-title">Md. Harun Or Rashid</h1>
    <p class="hero-subtitle">Professional Freelancer | Data Entry Expert</p>
    <a href="#portfolio" class="hero-btn">View Portfolio</a>
    <a href="assets/Md_Harun_Or_Rashid_CV_Image.pdf" download class="hero-btn secondary">Download CV</a>
  </div>
</section>

<!-- Hero Section End -->
<!-- Profile Photo and Name -->
    <img src="harun.jpg" alt="Harun's Photo" class="profile">
    <h1>Md. Harun Or Rashid</h1>
 
 <section id="about" style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
  <h2>About Me</h2>
  <p><strong>Name:</strong> Md. Harun or Rosid</p>
  <p><strong>Profession:</strong> Freelancer</p>
  <p><strong>Title:</strong> Data Entry, Web Research, Copy-Paste, Data Scraping, Web Scraping</p>
  <p><strong>Phone:</strong> 01648131500, 01316888404</p>
  <p><strong>Email:</strong> harunrm900@gmail.com</p>
  <p><strong>Address:</strong> Manikganj, Dhaka, Bangladesh</p>
  <p><strong>Education:</strong> SSC, Lemu Bari Binoda Sundari High School</p>
  <p><strong>Skills:</strong> Data Entry, Web Scraping, Copy Paste, Research</p>
  <p><strong>Languages:</strong> Bengali, English, Hindi</p>

  <h3>Short Introduction</h3>
  <p>
    I am Md. Harun or Rosid, a dedicated and skilled freelancer with expertise in data entry, web research, and related fields. 
    I have successfully completed a professional data entry course and have practical experience working on Fiverr and other platforms. 
    My aim is to provide accurate and timely services to clients worldwide.
  </p>
 
  <!-- Hero Section -->
  <section id="hero">
    <h1>Hello, I'm <span class="typed-text"></span></h1>
    <p>Welcome to my official site.</p>
    <a href="#portfolio" class="btn">View Portfolio</a>
    <a href="Md_Harun_Or_Rashid_CV_Image.pdf" download class="btn">Download CV</a>
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

<!-- Portfolio Section -->
<section class="section portfolio-section" style="padding: 20px; background: #fff;">
  <h2>My Portfolio</h2>
  <p>Check out some of my sample work:</p>
  <div class="portfolio-buttons">
    <a href="https://docs.google.com/spreadsheets/d/1FSV3CzDlRSDJHaumYrCcvKFcBKGedUhFU9qPDY6viW4/edit?usp=drivesdk" target="_blank" class="btn-portfolio blue">📊 Sample Data Entry</a>
    <a href="https://drive.google.com/file/d/1xA2EXAMPLE123/view" target="_blank" class="btn-portfolio green">📦 Product Listing (Excel)</a>
    <a href="https://drive.google.com/file/d/1yB3EXAMPLE456/view" target="_blank" class="btn-portfolio orange">🔍 Web Research Sample</a>
    <a href="https://drive.google.com/file/d/1zC4EXAMPLE789/view" target="_blank" class="btn-portfolio red">🧾 PDF to Excel Conversion</a>
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

<!-- Social Media Section -->
<section class="social-section" style="padding: 20px; background: #f9f9f9;">
  <h2>Follow Me on Social Media</h2>
  <div class="social-buttons">
    <a href="https://www.facebook.com/share/15Bmb2PrHi/" class="btn-social facebook" target="_blank">
      <i class="fab fa-facebook-f"></i> Facebook
    </a>
    <a href="https://youtube.com/@mdharun-n6j" class="btn-social youtube" target="_blank">
      <i class="fab fa-youtube"></i> YouTube
    </a>
    <a href="https://wa.me/8801648131500?text=Hi,%20I%20want%20to%20contact%20you" class="btn-social whatsapp" target="_blank">
      <i class="fab fa-whatsapp"></i> WhatsApp
    </a>
    <a href="https://www.instagram.com/p/DIeAfFXT_oO/" class="btn-social instagram" target="_blank">
      <i class="fab fa-instagram"></i> Instagram
    </a>
    <a href="https://www.tiktok.com/@user6071584366187" class="btn-social tiktok" target="_blank">
      <i class="fab fa-tiktok"></i> TikTok
    </a>
    <a href="https://www.fiverr.com/s/dDlW3G3" class="btn-social fiverr" target="_blank">
      <i class="fas fa-briefcase"></i> Fiverr
    </a>
  </div>
</section>

<!-- Font Awesome (for icons) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

   <!-- Embedded TikTok & YouTube -->
  <section id="videos">
    <h2>My Videos</h2>
    <div class="video-container">
      <iframe src="https://www.tiktok.com/embed/@user6071584366187/" frameborder="0" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
  </section>

  <!-- Gallery Link -->
  <section id="gallery">
    <h2>My Gallery</h2>
    <a href="gallery.html" class="btn">Visit Full Gallery</a>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:harunrm900@gmail.com">harunrm900@gmail.com</a></p>
    <p>Phone: +8801648131500</p>
    <p>Phone: +8801316888404</p>
    <p>Address: Manikganj,Dhaka,Bangladesh</p>
  </section>

  <!-- Certificates -->
  <section id="certificates">
    <h2>Certificates</h2>
    <img src="certificate.jpg" alt="Certificate">
  </section>
  
  <!-- Social Media Buttons -->
  <section id="social">
    <h2>Follow Me</h2>
    <div class="social-links">
      <a href="https://www.facebook.com/share/15Bmb2PrHi/" class="facebook">Facebook</a>
      <a href="https://www.tiktok.com/@user6071584366187" class="tiktok">TikTok</a>
      <a href="https://youtube.com/@mdharun-n6j?si=_f3V5JGv5EawjlcQ " class="youtube">YouTube</a>
    </div>
  </section>

  <section id="order" style="padding: 20px; max-width: 500px; margin: auto; font-family: Arial, sans-serif;">
  <h2 style="text-align: center;">Order Now</h2>

  <form action="https://formsubmit.co/harunrm900@gmail.com" method="POST" enctype="multipart/form-data">

    <!-- Hidden Options -->
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou.html">

    <!-- Name -->
    <label for="name">Your Name:</label>
    <input type="text" name="name" id="name" placeholder="Md Harun" required style="width: 100%; padding: 10px; margin-bottom: 10px;">

    <!-- Email -->
    <label for="email">Your Email:</label>
    <input type="email" name="email" id="email" placeholder="harunrm900@gmail.com" required style="width: 100%; padding: 10px; margin-bottom: 10px;">

    <!-- Message -->
    <label for="message">Order Details:</label>
    <textarea name="message" id="message" placeholder="Write your order details here..." required style="width: 100%; padding: 10px; height: 120px; margin-bottom: 10px;"></textarea>

    <!-- File Upload -->
    <label for="file">Attach File (optional):</label>
    <input type="file" name="attachment" id="file" accept="image/*,video/*" style="margin-bottom: 10px;">

    <!-- Submit Button -->
    <button type="submit" style="width: 100%; padding: 12px; background-color: #28a745; color: white; border: none; font-size: 16px; cursor: pointer;">Submit</button>
  </form>

  <!-- WhatsApp Button -->
  <div style="text-align: center; margin-top: 20px;">
    <a href="https://wa.me/8801648131500?text=Hello%20Md.%20Harun%2C%20I%20want%20to%20send%20a%20photo%20or%20video%20regarding%20my%20order." 
       target="_blank" 
       style="display: inline-block; background-color: #25D366; color: white; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-size: 16px;">
      <i class="fab fa-whatsapp"></i> Send via WhatsApp
    </a>
  </div>
</section>

<!-- Include FontAwesome for WhatsApp icon -->
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

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
    
  function toggleMenu() {
    document.getElementById("mainMenu").classList.toggle("show");
  }
  </script>
</body>
