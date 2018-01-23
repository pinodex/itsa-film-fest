<template>
  <div>
    <Navbar></Navbar>

    <div id="home" class="hero is-fullheight main-header"></div>

    <div id="about" class="hero is-fullheight is-primary hero-cartoon-bg about-hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="hero-title title">About</h1>

          <div class="columns">
            <div class="column is-6">
              <div class="content">
                <p>ITSA Film Fest 2018 is the first film festival to be hosted by the Information Technology Students Association.</p>

                <p>It is the showcase of not just the technical skills of the Information Technology students of STI College Novaliches, but also their creativeness in story writing and story telling through the use of multimedia.</p>

                <p>The film festival will feature short films of different genre of choice of the participating students. Any Information Technology students may join the event.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mechanics" class="hero is-fullheight is-dark hero-cartoon-bg mechanics-hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="hero-title title">Mechanics</h1>

          <div class="columns">
            <div class="column ">
              <div class="content">
                <ol>
                  <li>The film festival is open to all Information Technology students of STI College Novaliches.</li>
                  <li>Entry should run only from 5 to 30 minutes (includes opening and closing credits).</li>
                  <li>Entry should be submitted in HD or SD format.</li>
                  <li>Submission of entry is on March 1, 2018. The method of delivery will be announced before the submission date.</li>
                  <li>Judges screening is on March 5, 2018. The films will be judged by different faculties from different departments.</li>
                  <li>Public screening and awarding is on March 7, 2018 at the AVR.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="join" class="hero is-fullheight is-light hero-cartoon-bg join-hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Join Now</h1>
          <p><em>Registration link will be posted later.</em></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main-header {
    background-color: #082441;
    background-image: url(/static/img/Header-Photo.png);
    background-size: cover;
    background-position: top center;
  }

  .hero-cartoon-bg {
    background-repeat: no-repeat;
    background-position: bottom right;

    &.about-hero {
      background-image: url(/static/img/Slate.png);
    }

    &.mechanics-hero {
      background-image: url(/static/img/Reel.png);
    }

    &.join-hero {
      background-image: url(/static/img/All-Characters.png);
      background-position: bottom center;
      background-size: contain;
    }
  }

  .hero-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 4rem;

    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
    color: #555;
  }
</style>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    components: { Navbar }
  }
</script>
