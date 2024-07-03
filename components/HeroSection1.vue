<template>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'>
  <section class="hero1" id="hero1">
   <div class="container" >
    <div class="title" data-aos="zoom-in">
          <h2>About Me</h2>
        </div>
          <div class="main-body" data-aos="fade-right" data-aos-duration="2000">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="assets/img/foto_porto.jpg" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>Adriansyah Yusuf bimantara </h4>
                      <p class="text-secondary mb-1">Mahasiswa</p>
                      <p class="text-muted font-size-sm">Universitas Amikom Yogyakarta</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3 p-3">
                <a href="https://maps.app.goo.gl/vY3AXxoncaJyvQdQ7" target="_blank">
                  <img src="assets/img/map.png" width="300px" height="300" alt="map">
                </a>
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
                      bimogamerz77@gmail.com
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (+62) 993-816-9029
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
                  <div class="row">
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100 contain">
                    <div class="card-body ">
                      <h6 class="d-flex align-items-center mb-3">Project Status</h6>
                      <small>Profile'me</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Acheron Laundry Express</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Tica Laundry Express</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Login Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Majalah</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
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

.title {
  margin-bottom: 50px;
  color: #fff;
}

.card-body{
  margin-bottom: -10px;
}

.container{
  margin-top: 100px;
}

.contain {
  width: 730px;
}

</style>
