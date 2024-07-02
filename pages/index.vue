<script>
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';

export default {
  components: {
    HeroSection,
    AboutSection, 
    ProjectsSection,
    ContactSection
  }
}
</script>

<template>
  <div>
    <HeroSection />
  </div>
  <div>
    <AboutSection />
  </div>
  <div>
    <ProjectsSection />
  </div>
  <div>
    <ContactSection />
  </div>
</template>