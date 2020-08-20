<script>
  import company from '../static-content.js';
</script>

 <div class="hero-image">
  <div class="hero-text center-vh center">
    <h1 class="sans-font">{company.heroHeader}</h1>
    <p class="mb2">{company.heroSubheader}</p>
  </div>
</div>

<style>
  .hero-image {
    background-color: #01a8fa;
    background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/images/hero.jpg");

    min-height: 100vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 0;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 45%;
    left: 66%;
    transform: translate(-50%, -50%);
    color: white;
  }

  h1 {
    font-size: 2em;
    color: white;
  }

  p {
    color: white;
    line-height: 1.2em;
    font-size: 1.2em;
  }
</style>
