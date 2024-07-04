<template>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'>
  <section class="hero1" id="hero1">
   <div class="container" >
    <div class="title-4" data-aos="zoom-in">
          <h2>About Me</h2>
        </div>
        <div class="wrapper">
          <div class="main-body mt-8" data-aos="fade-right" data-aos-duration="2000">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="assets/img/foto_porto.jpg" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3 mb-3">
                      <h4>Adriansyah Yusuf bimantara </h4>
                      <p class="text-secondary mb-1">Mahasiswa</p>
                      <p class="text-muted font-size-sm">Universitas Amikom Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Adriansyah Yusuf Bimantara
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      adriansyahysf@students.amikom.ac.id
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (878) 787-8787
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (+62) 000-111-2222
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary mb-1">
                      Gondosari, Sitimulyo, Piyungan, Bantul
                    </div>
                  </div>
                  <hr>
                </div>
              </div>
             </div>
            </div>
          </div>
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
  padding: 100px 0;
}

.title-4 {
  margin-bottom: 100px;
  color: #fff;
}

.card-body{
  margin-bottom: -10px;
}

.container{
  margin-top: 100px;
}

</style>
