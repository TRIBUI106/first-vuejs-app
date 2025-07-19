<template>
  <div class="max-w-4xl mx-auto px-4 py-10 text-base-content">
    <h1 class="text-4xl font-bold mb-6 text-center text-primary">About Me</h1>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">Who I Am</h2>
      <p class="leading-relaxed">
        Hi! My name is <strong>Bui Duc Tri</strong>. I'm a backend-focused developer based in Vietnam. I specialize in building desktop and web applications using Java (especially <strong>Swing</strong> and <strong>Spring Boot</strong>). Recently, I've also been learning <strong>Vue 3</strong> and <strong>Vite</strong> to expand my frontend skills.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">My Main Skills</h2>
      <ul class="list-disc list-inside leading-loose">
        <li><strong>Languages:</strong> Java, JavaScript, PHP, SQL</li>
        <li><strong>Backend:</strong> Spring Boot, RESTful APIs, Stored Procedures</li>
        <li><strong>Frontend:</strong> Vue 3, Tailwind CSS, DaisyUI (still learning)</li>
        <li><strong>Desktop:</strong> Java Swing UI development</li>
        <li><strong>Databases:</strong> MySQL, MariaDB, PostgreSQL, SQL Server, Redis</li>
        <li><strong>DevOps:</strong> Docker, Vercel, SSH, Cpanel</li>
        <li><strong>System:</strong> Linux (Debian), OpenMediaVault, file servers, local networks</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-2 text-secondary">Featured Projects</h2>
      <ul class="list-disc list-inside leading-loose">
        <li><strong>G-RentX:</strong> Java Swing app for game account rental with QR login, discount codes, payment system (Momo, bank, thesieutoc).</li>
        <li><strong>QR Code Login System:</strong> Java app + PHP website using real-time QR code login (auto expire after 120s).</li>
        <li><strong>Discord Bots:</strong> Ticket system, pricing management via JSON, automatic roles, and payment via thesieutoc.</li>
        <li><strong>Warehouse Management:</strong> Smart inventory tracking with SQL triggers, procedures, and multi-type products (Liqui, Motul, etc.).</li>
        <li><strong>TToil-Service:</strong> Web system for managing vehicle oil services and filtering by product type.</li>
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
        >yeume-enterprise.edu.vn</a>
      </p>
    </section>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
