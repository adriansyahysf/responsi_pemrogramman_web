<template>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'>
  <section id="project" class="projects">
    <div class="container">
    <h2>My Projects</h2>
    <div class="card-deck">
      <div class="card glass" data-aos="flip-down">
        <img src="assets/img/slide1.png" class="card-img-top" alt="majalah">
        <div class="card-body">
          <p class="card-text">Project membuat majalah seputar genshin impact.</p>
        </div>
      </div>
      <div class="card glass" data-aos="flip-down" data-aos-duration="2000">
        <img src="assets/img/acheron.png" class="card-img-top" alt="web">
        <div class="card-body">
          <p class="card-text">Project membuat website laundry. (masih belum di deploy)</p>
        </div>
      </div>
      <div class="card glass" data-aos="flip-down" data-aos-duration="3000">
        <img src="assets/img/web.png" class="card-img-top" alt="">
        <div class="card-body">
          <p class="card-text">Website ini juga merupakan project.</p>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>

<style scoped>
.projects {
  padding: 50px 0; 
}

.projects h2 {
  text-align: center;
  color : #fff ;
}

.card-deck {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.card {
  flex: 0 0 auto;
  margin: 20px;
  width: 18rem;
  padding: 10px;
  background: transparent;
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
}

.glass{
  
  background: linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px solid rgba(0, 0, 0, 0.37);;

}

.container{
  margin-bottom: 250px;
  margin-top : 120px;
}

</style>
