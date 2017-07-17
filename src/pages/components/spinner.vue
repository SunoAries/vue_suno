<template>
  <div>
    <div id="suno-loader">
      <div class="suno-grid-pulse">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>
    #suno-loader {
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      flex-direction: column;
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 25%;
      max-width: 100%;
      height: 940px;
      margin: 0 auto;
      background: #eaeaea;
      align-items: center;
      justify-content: center;
      font-size: 56px;
      color: #1cdbb5;
    }
    @-webkit-keyframes suno-grid-pulse {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1); }

      50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        opacity: 0.7; }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1; } }

    @keyframes suno-grid-pulse {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1); }

      50% {
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        opacity: 0.7; }

      100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1; } }
    .suno-grid-pulse {
      top: -130px;
      position: relative;
      width: 120px;}
    .suno-grid-pulse div:nth-child(1) {
      -webkit-animation-delay: -0.06s;
      animation-delay: -0.06s;
      -webkit-animation-duration: 1.28s;
      animation-duration: 1.28s; }
    .suno-grid-pulse div:nth-child(2) {
      -webkit-animation-delay: 0.25s;
      animation-delay: 0.25s;
      -webkit-animation-duration: 1.28s;
      animation-duration: 1.28s; }
    .suno-grid-pulse div:nth-child(3) {
      -webkit-animation-delay: 0.45s;
      animation-delay: 0.45s;
      -webkit-animation-duration: 1.28s;
      animation-duration: 1.28s; }
    .suno-grid-pulse div:nth-child(4) {
      -webkit-animation-delay: 0.48s;
      animation-delay: 0.48s;
      -webkit-animation-duration: 1.42s;
      animation-duration: 1.42s; }
    .suno-grid-pulse div:nth-child(5) {
      -webkit-animation-delay: 0.31s;
      animation-delay: 0.31s;
      -webkit-animation-duration: 1.45s;
      animation-duration: 1.45s; }
    .suno-grid-pulse div:nth-child(6) {
      -webkit-animation-delay: 0.03s;
      animation-delay: 0.03s;
      -webkit-animation-duration: 1.18s;
      animation-duration: 1.18s; }
    .suno-grid-pulse div:nth-child(7) {
      -webkit-animation-delay: 0.46s;
      animation-delay: 0.46s;
      -webkit-animation-duration: 0.87s;
      animation-duration: 0.87s; }
    .suno-grid-pulse div:nth-child(8) {
      -webkit-animation-delay: 0.78s;
      animation-delay: 0.78s;
      -webkit-animation-duration: 1.45s;
      animation-duration: 1.45s; }
    .suno-grid-pulse div:nth-child(9) {
      -webkit-animation-delay: 0.45s;
      animation-delay: 0.45s;
      -webkit-animation-duration: 1.06s;
      animation-duration: 1.06s; }
    .suno-grid-pulse div {
      background-color: #1cdbb5;
      width: 25px;
      height: 25px;
      margin: 5px;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      display: inline-block;
      float: left;
      -webkit-animation-name: suno-grid-pulse;
      animation-name: suno-grid-pulse;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-delay: 0;
      animation-delay: 0; }


</style>
