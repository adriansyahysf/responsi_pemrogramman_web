<template>
  <section id="hero" class="hero">
    <div class="content">
      <div class="content-fill">
        <h2>Welcome to my profile</h2>
        <p>Halo, nama saya Adriansyah Yusuf Bimantara. Asal dari Yogyakarta dan saat ini sedang menempuh pendidikan di <a href="https://amikom.ac.id/" style="color: #007bff;">Universitas Amikom Yogyakarta</a>. Saya memiliki minat yang besar dalam programming dan desain. Saya senang menghabiskan waktu luang dengan belajar programming dan design.</p>
        <a href="#contact" class="contact-button">Massage me</a>
      </div>

      <div class="image-container">
        <img src="assets/img/foto_porto1.jpg" class="img-fluid" width="300px">
      </div>
    </div>
  </section>
</template>

<script>
export default {

  name: 'HeroSection'
  
}
</script>

<style scoped>
.hero {
  text-align: center;
  margin-top: -110px;
  margin-bottom: 130px;

}

.content {
  margin-top: 160px;
  text-align: left;
  margin-left: 100px;
  display: flex; 
  justify-content: space-between;
}

.content .content-fill {
  color: white;
  flex: 1; 
  margin-top: 70px;
}

.image-container {
  flex: 1; 
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  margin-right: 100px;
  margin-top: -50px;
}

.image-container img {
  border-radius: 30px;
  width: 400px; 
  height: auto;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #0056b3;
}
</style>