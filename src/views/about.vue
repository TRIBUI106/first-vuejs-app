<template>
  <div class="max-w-6xl mx-auto px-4 py-10 text-base-content">
    <h1 class="text-6xl font-bold mb-6 text-center text-primary">About Me</h1>

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

    <!-- Project Section -->
    <!-- Project Section -->
    <section class="mb-20">
      <h2 class="text-3xl font-bold text-secondary mb-12 text-center">
        Featured Projects
      </h2>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <ProjectCard
          title="G-RentX (Application)"
          :img="grentxApp"
          description="Cross-platform game account rental desktop app built with Java Swing & MariaDB. Features auto payment, QR login, user role management & real-time tracking."
          techs="Java Swing, MariaDB, QR Code, REST API"
          :links="{
            download:
              'https://yeume-enterprise.edu.vn/assets/G-RentX-1.0.6.exe',
          }"
        />

        <ProjectCard
          title="G-RentX (Website)"
          :img="grentxWeb"
          description="Companion site for G-RentX app, using PHP with shared MariaDB backend. Offers QR login, web preview & transaction monitoring."
          techs="PHP, MariaDB, QR Code"
          :links="{
            live: 'https://yeume-enterprise.edu.vn/G-rentX/',
          }"
        />

        <ProjectCard
          title="TToil Service"
          :img="ttoil"
          description="Web system for managing lubricant services. Products are categorized and services well structured with clean UI."
          techs="HTML, JavaScript, Tailwind CSS"
          :links="{
            live: 'https://ttoil-service.com/',
          }"
        />

        <ProjectCard
          title="Motorbike Cleaner"
          :img="mtb"
          description="Simple responsive website for motorcycle cleaning service. Built to support offline use and easy service booking."
          techs="HTML, CSS, JavaScript"
          :links="{
            live: 'https://motorbike-cleaner.com/',
          }"
        />

        <ProjectCard
          title="Inventory Management System"
          :img="im"
          description="App for inventory management – import/export goods, manage suppliers, generate receipts, and export to Excel."
          techs="Java Swing, JDBC, Excel"
          :links="{
            live: 'https://www.youtube.com/watch?v=pMI24s2Bl9k',
          }"
        />

        <ProjectCard
          title="HR Management System"
          :img="hrm"
          description="My first Java app – full CRUD for employee management using Java Swing and MariaDB."
          techs="Java Swing, JDBC, MariaDB"
          :links="{
            source: 'https://github.com/TRIBUI106/Data-Management-Java-Swing',
          }"
        />

        <ProjectCard
          title="Basic Purchase Order (Flower Shop)"
          :img="po"
          description="Login, register & shopping cart with localStorage. Focused on better UI/UX than classmates."
          techs="HTML, CSS, JavaScript, localStorage"
          :links="{
            source:
              'https://github.com/TRIBUI106/WEB1043-All-Labs-Assignment/tree/main/AssignmentGD2%20-%20WEB1043',
          }"
        />
      </div>
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
import ProjectCard from "@/components/ProjectCard.vue";
import grentxApp from "@/assets/img/grentx-app.png";
import grentxWeb from "@/assets/img/grentx-web.png";
import hrm from "@/assets/img/erp-hrm.png";
import im from "@/assets/img/erp-im.png";
import po from "@/assets/img/erp-po.png";
import ttoil from "@/assets/img/ttoil-service.png";
import mtb from "@/assets/img/motorbikecleaner.png";
</script>
