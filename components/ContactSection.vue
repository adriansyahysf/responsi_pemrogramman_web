<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact-social">
        <h2>Contact Me</h2>
        <div class="social-icons">
          <a href="https://www.facebook.com/bimo2004/about/" target="_blank" class="facebook">
            <img src="assets/img/facebook.png" alt="Facebook"> Adriansyah Yusuf Bimantara
          </a>
          <a href="https://www.instagram.com/adriansyahysf/" target="_blank" class="instagram">
            <img src="assets/img/instagram.png" alt="Instagram"> @adriansyahysf
          </a>
          <a href="https://x.com/scareaper5" target="_blank" class="twitter">
            <img src="assets/img/twitter.png" alt="Twitter"> @scareaper5
          </a>
          <a href="https://github.com/adriansyahysf" target="_blank" class="github">
            <img src="assets/img/github.png" alt="GitHub"> @adriansyahysf
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact {
  padding: 50px 0;
  background-color: #282828; 
}

.contact-social {
  text-align: center;
  color: #fff;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap; 
}

.social-icons a {
  color: #fff;
  font-size: 1rem; 
  margin: 0 15px; 
  transition: color 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.social-icons a img {
  margin-right: 8px; 
  width: 30px; 
  height: 30px; 
}

.social-icons a:hover {
  color: #007bff; 
}


</style>
