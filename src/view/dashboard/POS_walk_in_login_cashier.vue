<template>
  <div class="positsion background-png m-0">
    <div id="clock">{{ currentTime }}</div>
    <div class="text">pm</div>
    <div>
    <div class="iformatsia">
      <img src="public/assets/images/Profile pict.png" alt="profile-img" class="img-1">
      </div>
    <div class="positsion-info">
      <h5 class="title">Coca Cofeetalk</h5>
      <p class="sub-title">Logged in as,BEAN KEAN</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: ''
    }
  },
  mounted() {
    this.updateClock();
    setInterval(this.updateClock, 1000);
  },
  methods: {
    updateClock() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      var timeString = hours + ':' + minutes;
      this.currentTime = timeString;
    }
  }
}
</script>

<style scoped>
#clock {
  color: white;
  margin-top: 12%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 160px;
  font-weight: 275;
  line-height: 160px;
  display: inline-block;
}
.text {
  color: white;
  display: inline-block;
  text-align: center;
  font-size: 70px;
  margin-left: 15px;
}
.positsion {
  text-align: center;
}

.background-png {
  background-image: url(public/assets/images/Background.absent.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.iformatsia {
    width: 80px;
    height: 80px;
    gap: 0px;
    border: 4px;
    opacity: 0px;
    text-align: center;
    position: relative;
    text-align: center;
    margin-top: 12rem;
    margin-left: 37rem;
}
.title {
  color: #ffffff;
  display: inline-block;
  margin-left: 30px;
  font-size: 30px;
  margin-top: -3rem;
}

.sub-title {
  color: #ffffff;
  margin-left: 20px;
}

.positsion-info {
  text-align: center;
}

.img-1 {
  margin-top: 4rem;
}
</style>
