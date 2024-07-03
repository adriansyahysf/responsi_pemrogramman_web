<template>
  <section id="home" class="navbarku">
    <div class="navbar">
      <div class="navbar-left">
        <span>Profile'me</span>
      </div>
      <div class="navbar-right">
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Navbarku',
}


</script>

<style scoped>
.navbarku {
  text-align: center;
  padding: 100px 0;
}

.navbar {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin-top: -100px;
  transition: background-color 0.3s;
  background-color: #09203F ;
}

.navbar.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}

.navbar-left {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-right: 850px;
}

.navbar-right {
  display: flex;
}

.navbar-right ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-right ul li {
  padding: 14px 20px;
}

.navbar-right ul li a {
  text-decoration: none;
  color: white;
  display: block;
  transition: color 0.3s;
}

.navbar-right ul li a:hover {
  color: aqua;
}

.content {
  margin-top: 160px;
  text-align: left;
  margin-left: 100px;
  display: flex; 
  justify-content: space-between;
}

header {
  margin-top : 80px;
}
</style>