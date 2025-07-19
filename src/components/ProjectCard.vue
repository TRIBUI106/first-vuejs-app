<template>
  <div
    class="bg-base-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    data-aos="fade-up"
  >
    <a
      :href="links.live || links.source || links.download"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="img"
        alt="Project thumbnail"
        class="w-full h-60 object-cover rounded-xl shadow-md hover:opacity-90 transition-opacity duration-300"
      />
    </a>

    <div class="p-5">
      <h3 class="text-xl font-semibold text-primary mb-2">{{ title }}</h3>
      <p class="text-base-content mb-3">{{ description }}</p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in techs.split(',')"
          :key="tech"
          class="badge badge-outline badge-sm"
        >
          {{ tech.trim() }}
        </span>
      </div>

      <div class="flex flex-wrap gap-3 text-sm">
        <a
          v-if="links.live"
          :href="links.live"
          target="_blank"
          class="btn btn-sm rounded-xl shadow-sm bg-primary text-white hover:brightness-110 transition"
        >
          🚀 See Live
        </a>
        <a
          v-if="links.download"
          :href="links.download"
          target="_blank"
          class="btn btn-sm rounded-xl shadow-sm bg-secondary text-white hover:brightness-110 transition"
        >
          ⬇️ Download
        </a>
        <a
          v-if="links.source"
          :href="links.source"
          target="_blank"
          class="btn btn-sm rounded-xl shadow-sm border border-base-content text-base-content hover:bg-base-300 transition"
        >
          💻 Source Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  techs: {
    type: String,
    required: true,
  },
  links: {
    type: Object,
    default: () => ({}),
  },
});
</script>
