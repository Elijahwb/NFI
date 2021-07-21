<template>
<div class="loader-wrapper">
    <div class="loader">Loading...</div>
</div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>


<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,.3);
  /*-webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(2px);*/
  z-index: 20;
}
.loader {
  font-size: 8px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 7em;
  height: 7em;
  border-radius: 50%;
  background: #1446f8;
  background: -moz-linear-gradient(left, #1446f8 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #1446f8 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #1446f8 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #1446f8 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #1446f8 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.2s infinite linear;
  animation: load3 1.2s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #1446f8;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.loader:after {
  background: #f5f5f5;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>