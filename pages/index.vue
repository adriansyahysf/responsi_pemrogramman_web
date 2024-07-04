<template>
  <header id="header"></header>
  <div>
    <Navbarku class="sticky-nav" />
    <div>
      <HeroSection />
    </div>
    <div>
      <HeroSection1 />
    </div>
    <div>
      <SkillsSection />
    </div>
    
    <div>
      <ProjectsSection />
    </div>
    <div>
      <ContactSection />
    </div>
    <div class="contact">
      <p>Copyright @ Adriansyah Yusuf Bimantara</p>
    </div>
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import SkillsSection from '~/components/SkillsSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import Navbarku from '~/components/Navbarku.vue'; 
import HeroSection1 from '~/components/HeroSection1.vue';

export default {
  components: {
    Navbarku,
    HeroSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    HeroSection1
  }
}
</script>

<style>
body {
  background: linear-gradient(#09203F, #537895);
}

.contact {
  padding: 50px 0;
  background-color: #282828;
}

.contact p {
  color: #F8F9FA;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 1px;
}

.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>