<template>
  <div class="max-w-4xl mx-auto px-4 py-10 text-base-content">
    <h1 class="text-4xl font-bold mb-6 text-center text-primary">About Me</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">Who I Am</h2>
      <p class="leading-relaxed">
        Hi! My name is <strong>Bui Duc Tri</strong>. I'm a backend-focused
        developer based in Vietnam. I specialize in building desktop and web
        applications using Java (especially <strong>Swing</strong> and
        <strong>Spring Boot</strong>). Recently, I've also been learning
        <strong>Vue 3</strong> and <strong>Vite</strong> to expand my frontend
        skills.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">My Main Skills</h2>
      <ul class="list-disc list-inside leading-loose">
        <li><strong>Languages:</strong> Java, JavaScript, PHP, SQL</li>
        <li>
          <strong>Backend:</strong> Spring Boot, RESTful APIs, Stored Procedures
        </li>
        <li>
          <strong>Frontend:</strong> Vue 3, Tailwind CSS, DaisyUI (still
          learning)
        </li>
        <li><strong>Desktop:</strong> Java Swing UI development</li>
        <li>
          <strong>Databases:</strong> MySQL, MariaDB, PostgreSQL, SQL Server,
          Redis
        </li>
        <li><strong>DevOps:</strong> Docker, Vercel, SSH, Cpanel</li>
        <li>
          <strong>System:</strong> Linux (Debian), OpenMediaVault, file servers,
          local networks
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">
        Featured Projects
      </h2>
      <ul class="list-disc list-inside leading-loose">
        <li>
          <strong><a href="#">G-RentX (Application):</a></strong>
          A cross-platform game account rental desktop app built with
          <strong>Java Swing</strong> and <strong>MariaDB</strong>. Features
          include automated payments, QR code login, user role management, and
          real-time transaction tracking. <a href="https://yeume-enterprise.edu.vn/assets/G-RentX-1.0.6.exe">try download app ?</a>
          <br />
        </li>

        <li>
          <strong><a href="https://yeume-enterprise.edu.vn/G-rentX/">G-RentX (Website):</a></strong>
          A companion website for the G-RentX app, developed with
          <strong>PHP</strong> and connected to the same MariaDB backend. Offers
          web previews, QR integration, and transaction monitoring.
          <br />
        </li>

        <li>
          <strong><a href="https://ttoil-service.com/">TToil Service:</a></strong>
          A web system for managing lubricant services with categorized
          products, service listings, and contact support. Built with
          <strong>HTML, CSS, JavaScript</strong>, and styled for a clean
          business interface.
          <br />
        </li>

        <li>
          <strong><a href="https://motorbike-cleaner.com/">Motorbike Cleaner:</a></strong>
          A simple, responsive website for a motorcycle cleaning service.
          Designed for easy offline service integration and booking. Built with
          vanilla JS, HTML, and CSS.
          <br />
        </li>

        <li>
          <strong><a href="https://www.youtube.com/watch?v=pMI24s2Bl9k">Basic Inventory Management System:</a></strong>
          A basic inventory app built by my team <i>(LoremIpsumDolar)</i> in 2
          months. Users can import/export goods, manage suppliers, generate
          receipts, and sort/filter by price or date. Includes Excel
          import/export functionality.
          <br />
        </li>

        <li>
          <strong><a href="https://github.com/TRIBUI106/Data-Management-Java-Swing">Basic Human Resource Management System (First Project):</a></strong>
          My first personal Java project using
          <strong>Java Swing + JDBC + MariaDB</strong>. It manages employee data
          with full CRUD features and a local database.
          <br />
        </li>

        <li>
          <strong><a href="https://github.com/TRIBUI106/WEB1043-All-Labs-Assignment/tree/main/AssignmentGD2%20-%20WEB1043"> Basic Purchase Order System:</a></strong>
          A flower shop system using basic <strong>JavaScript</strong> and
          <strong>localStorage</strong> for login, registration, and shopping
          cart features. Focused on making a "more professional" UI compared to
          my teammates at the time.
          <br />
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-2 text-secondary">Contact</h2>
      <p>
        Want to collaborate or talk tech? Visit my personal site at:
        <a
          href="https://yeume-enterprise.edu.vn"
          target="_blank"
          class="text-blue-400 hover:underline"
          id="yeumeent"
          >yeume-enterprise.edu.vn</a
        >
      </p>
    </section>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
