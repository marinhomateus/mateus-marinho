<template class="app">
  <div>
    <section>
      <v-parallax style="height: 100vh">
        <v-row align="center" justify="center">
          <v-col cols="6" class="pa-1 font-weight-bold py-16">
            <h1 class="" style="font-size: 3rem">
              Hi, 🤝
              <br />
              I am <strong>Mateus Marinho</strong>
            </h1>
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
                color="#6b705c"
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
        gradient="to bottom, #181818, #404040"
      >
        <h4 class="text-center white--text" style="font-size: 2.4rem">
          About me
        </h4>
        <br />
        <br />
        <v-divider></v-divider>
        <v-row align="center" justify="center">
          <v-col cols="auto" md="6" class="font-weight-bold py-16">
            <v-card
              class="text-center pa-6 rounded-lg"
              color="#e1e0e0c9"
              elevation="6"
            >
              <v-card-subtitle class="">
                <v-icon color="#6a66a3" size="40">mdi-map-marker-radius</v-icon>
              </v-card-subtitle>
              <h2 class="font-weight-regular">
                I am a problem solver
                <br />
                based on São Paulo, Brazil
                <br />
                who likes to have a good chat
                <br />
                and spend my time evolving
                <br />
                and improving myself.
              </h2>
              <v-btn
                large
                elevation="5"
                color="#6a66a3"
                class="white--text mt-12 px-10 py-5"
                href="#contact"
              >
                <v-icon left>mdi-text-to-speech</v-icon>
                contact me
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="auto" md="6" class="font-weight-bold">
            <v-card
              class="text-center pa-6 rounded-lg"
              color="#e1e0e0c9"
              elevation="6"
            >
              <v-card-subtitle class="">
                <v-icon color="#6a66a3" size="40">mdi-graph</v-icon>
              </v-card-subtitle>
              <v-row>
                <v-col
                  v-for="n in stack"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-img
                    :src="n"
                    :lazy-src="n"
                    aspect-ratio="1"
                    class="transparent"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <section class="projects" id="projects">
      <v-img
        class="pa-10"
        src="https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg"
        height="900"
        gradient="to bottom, #404040, #616161"
      >
        <v-row align="center" justify="center">
          <v-col class="">
            <h4 class="text-center white--text" style="font-size: 2.4rem">
              Projects
            </h4>
            <br />
            <v-divider></v-divider>
            <br />

            <v-card
              elevation="15"
              max-width="900"
              color="#e1e0e0c9"
              class="mx-auto rounded-lg"
            >
              <v-card-subtitle align="center" justify="center" class="py-5">
                <v-icon color="#6a66a3" size="40"
                  >mdi-application-brackets</v-icon
                >
              </v-card-subtitle>
              <v-carousel
                :continuous="true"
                :cycle="cycle"
                :show-arrows="false"
                hide-delimiter-background
                delimiter-icon="mdi-minus"
                height="500"
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :href="slide.to"
                >
                  <v-sheet :color="colors[i]" height="100%" tile>
                    <v-row class="fill-height" align="center" justify="center">
                      <div style="font-size: 1.8rem">{{ slide.name }}</div>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
              <v-list color="#e1e0e0c9" two-line>
                <v-list-item href="https://github.com/marinhomateus">
                  <v-list-item-avatar>
                    <v-img src="https://github.com/marinhomateus.png"> </v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Mateus Marinho</v-list-item-title>
                    <v-list-item-subtitle>Author</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </section>
    <section class="contact" id="contact">
      <v-img
        class="pa-10"
        gradient="to bottom, #616161, #757575"
        height="800"
        src="https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      >
        <h4 class="text-center white--text" style="font-size: 2.4rem">
          Contact
        </h4>
        <br />
        <br />
        <v-divider></v-divider>
        <v-row align="center" justify="center">
          <v-col cols="auto" md="6" class="font-weight-bold py-16">
            <v-card
              class="text-center pa-6 rounded-lg"
              color="#e1e0e0c9"
              elevation="6"
            >
              <v-card-subtitle class="">
                <v-icon color="#6a66a3" size="40">mdi-account-box</v-icon>
              </v-card-subtitle>
              <h2 class="font-weight-regular" style="font-size: 1.8rem">
                You can contact me <br />from my social networks:
              </h2>
              <v-row class="my-7" align="center" justify="center">
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
                  color="#6b705c"
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
              <h2 class="font-weight-regular" style="font-size: 1.8rem">
                Or by sending me an email:
              </h2>
              <v-btn
                large
                elevation="5"
                color="#6a66a3"
                class="white--text mt-12 px-10 py-5"
                href="mailto:code.marinho@gmail.com?subject=Contact&body=Hello!"
              >
                <v-icon left>mdi-mail</v-icon>
                mail me
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-img>
    </section>
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  data() {
    return {
      alignments: ["start", "center", "end"],
      stack: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      ],
      colors: [
        "#3d5a80",
        "#6b705c",
        "#f4a261",
        "#907f9f",
        "#D3AB9E",
        "#689689",
      ],
      cycle: true,
      slides: [
        { name: "React Orkut", to: "https://github.com/marinhomateus/orkut" },
        {
          name: "Vue Todo List",
          to: "https://github.com/marinhomateus/todo_list",
        },
        {
          name: "Discord Bot",
          to: "https://github.com/marinhomateus/botdiscord",
        },
        {
          name: "Vue Exchange",
          to: "https://github.com/marinhomateus/conversor",
        },
        {
          name: "Memory Game",
          to: "https://github.com/marinhomateus/jogodamemoria",
        },
        {
          name: "My page",
          to: "https://github.com/marinhomateus/mateus-marinho",
        },
      ],
    };
  },
  components: {
    ParticlesBg,
  },
};
</script>

<style>
.about {
  font-family: "Roboto Mono", Courier, monospace;
}
</style>
