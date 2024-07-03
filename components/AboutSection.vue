<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  
  <section id="about" class="about">
    <div class="title" data-aos="fade-up">
    <h2>About Me</h2>
    </div>
    <div class="content" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="col-sm-6 mb-3">
          <div class="card mx-auto h-100">
            <div class="card-body" >
              <div class="About-Skills">
                <h2>My Skills</h2>
                <small>HTML</small>
                <div class="progress mb-3" style="height: 5px" data-aos="zoom-in" data-aos-duration="3000">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div data-aos="fade-down">
                <small>CSS</small>
                <div class="progress mb-3" style="height: 5px" data-aos="zoom-in" data-aos-duration="3000">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 70%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                </div data-aos="fade-down">
                <small>C++</small>
                <div class="progress mb-3" style="height: 5px" data-aos="zoom-in" data-aos-duration="3000">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                </div data-aos="fade-down">
                <small>Design</small>
                <div class="progress mb-3" style="height: 5px" data-aos="zoom-in" data-aos-duration="3000">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div data-aos="fade-down">
                <small>MySQL</small>
                <div class="progress mb-3" style="height: 5px" data-aos="zoom-in" data-aos-duration="3000">
                  <div class="progress-bar bg-primary" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="game">
      <div class="title-2" data-aos="zoom-in">
        <h2>The Games I Play</h2>
      </div>
      <div class="cards">
        <div class="card" data-aos="flip-up" data-aos-duration="2000">
          <a href="https://playvalorant.com/en-us/download/" target="_blank">
            <img src="assets/img/valorant.jpg" width="100px" height="100" alt="Valorant">
          </a>
        </div>
        <div class="card" data-aos="flip-up" data-aos-duration="3000">
          <a href="https://wutheringwaves.kurogames.com/en/" target="_blank">
            <img src="assets/img/Wuwa.png" width="100px" height="100" alt="Wuwa">
          </a>
        </div>
        <div class="card" data-aos="flip-up" data-aos-duration="2000">
          <a href="https://hsr.hoyoverse.com/ua2?lp=sr03&utm_source=SEA_google_SEA_search_UA2_Brand&hoyotrace_channel=ga_channel&gad_source=1&gclid=Cj0KCQjw7ZO0BhDYARIsAFttkCg-yGkTS_fJvCkikpavu6Qo8gv-NnbLf7WybPHZD7GUm83xe2WHXX8aAnPJEALw_wcB" target="_blank">
            <img src="assets/img/HSR.png" width="100px" height="100" alt="Wuwa">
          </a>
        </div>
        <div class="card" data-aos="flip-up" data-aos-duration="3000">
          <a href="https://osu.ppy.sh/" target="_blank">
            <img src="assets/img/osu.png" width="100px" height="100" alt="Wuwa">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  mounted() {
    // Memastikan AOS diinisialisasi setelah komponen dimuat
    this.$nextTick(() => {
      this.$AOS.refresh()
    })
  }
}
</script>

<style scoped>

.about {
  padding: 20px;
  margin-bottom: 100px;
  margin-top: 100px;
  position: relative; 
  z-index: 1; 
}

.title h2 {
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 80px;
}

.title-2{
  color: #fff;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 15px;
}

.About-Skills {
  text-align: center;
  margin-bottom: 20px;
}

.progress {
  margin-bottom: 10px;
}

.cards {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.card {
  margin: 0 10px;
  border: 3px solid #fff;
  border-radius: 5px;
}

</style>