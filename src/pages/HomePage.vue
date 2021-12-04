<template>
  <div>
    <section>
      <v-parallax style="height: 100vh">
        <v-row align="center" justify="center">
          <v-col cols="6" class="pa-1 font-weight-bold py-16">
            <h2 class="display-3">
              Hi, 🤝
              <br />
              I am <strong>Mateus Marinho</strong>
            </h2>
            <br />
            <v-subheader dark
              >💻 A technology enthusiast and lover. 👾</v-subheader
            >
            <br />
            <v-row class="mt-16">
              <v-chip
                class="px-4 ma-3"
                href="https://www.linkedin.com/in/mateus-marinho-5969231b9/"
                dark
                color="#3d5a80"
              >
                <v-icon size="20">mdi-linkedin</v-icon>
              </v-chip>
              <v-chip
                class="px-4 ma-3"
                href="https://github.com/marinhomateus"
                dark
                color="#6a66a3"
              >
                <v-icon size="20">mdi-github</v-icon>
              </v-chip>
              <v-chip
                class="px-4 ma-3"
                href="https://twitter.com/maetusx"
                dark
                color="#f4a261"
              >
                <v-icon size="20">mdi-twitter</v-icon>
              </v-chip>
            </v-row>
            <particles-bg type="lines" :bg="true" />
          </v-col>
        </v-row>
      </v-parallax>
    </section>
    <section class="about" id="about">
      <v-img
        class="pa-10"
        src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
        height="400"
        gradient="to bottom, #181818, #404040"
      >
        <h4 class="display-2 text-center white--text">About me</h4>
        <br />
        <v-row>
          <v-col cols="12" md="8">
            <v-card
              class="text-center pa-6 rounded-lg"
              color="#e1e0e0c9"
              elevation="6"
            >
              <v-card-subtitle class="">
                <v-icon size="40">mdi-map-marker-radius-outline</v-icon>
              </v-card-subtitle>
              <h2 class="display-1 font-weight-regular">
                Evolving in some...
              </h2>
              <v-btn
                large
                elevation="5"
                color="#f4a261"
                class="white--text mt-10 px-10 py-5"
                >Download Resume
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-6 rounded-lg" color="#e1e0e0c9" elevation="6">
              <div class="py-1" v-for="(item, index) in items" :key="index">
                <label>{{ item.title }}</label>
                <v-progress-linear
                  :color="item.color"
                  height="10"
                  :value="item.value"
                ></v-progress-linear>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <section class="projects" id="projects">
      <v-img
        class="pa-10"
        src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
        height="400"
        gradient="to bottom, #404040, #616161"
        style="height: 80vh"
      >
        <v-row align="center" justify="center">
          <v-col class="">
            <h4 class="display-2 text-center white--text">Projects</h4>
            <br />
            <v-divider></v-divider>
            <v-slide-group class="pa-4" active-class="success" show-arrows>
              <v-slide-item v-for="(slider, index) in sliders" :key="index">
                <v-card height="250" width="250" class="mx-2">
                  <img height="100%" width="100%" :src="slider" alt="" />
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <section class="contact" id="contact">
      <v-img
        class="pa-10"
        gradient="to bottom, #616161, #757575"
        src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
        <v-container>
          <h4 class="display-2 text-center white--text">Contact</h4>
          <br />
          <v-divider></v-divider>
          <br />
          <h4 class="display-1 text-center white--text">
            You can contact me by one of my social links or sending an Email.
          </h4>
          <v-row>
            <v-col cols="12" md="8">
              <v-card color="transparent" flat>
                <v-card-title>DROP A LINE</v-card-title>
                <v-form>
                  <v-text-field label="Your Name" />
                  <v-text-field label="Email" />
                  <v-text-field label="Subject" />
                  <v-textarea label="Message" />
                  <v-btn large color="green" class="white--text"
                    >Send Message</v-btn
                  >
                </v-form>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card color="transparent" flat>
                <v-card-title>CONTACT ME</v-card-title>
                <v-card-text>
                  4657 Franklin Avenue, ARCH CAPE <br />
                  +361-883-3218 <br />
                  hello@jac-co.com <br />
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    large
                    elevation="5"
                    color="pink"
                    class="white--text mt-10 px-10 py-5"
                    >Download Resume
                    <v-icon>mdi-download</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  data() {
    return {
      sliders: [
        "https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800.png",
        "https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png",
        "https://data.whicdn.com/images/350420216/original.jpg?t=1605047796",
        "https://1zylgb20pxi7mw2sdr8i4a14-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/projectleft.jpg",
        "https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300",
        "https://cdn.dribbble.com/users/2399102/screenshots/15522177/media/346d890482d929610d316938e7d48629.png?compress=1&resize=400x300",
      ],
    };
  },
  components: {
    ParticlesBg,
  },
};
</script>
