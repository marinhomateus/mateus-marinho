<template>
  <v-app>
    <v-app-bar flat height="45" inverted-scroll app dark color="transparent">
      <v-layout align-center>
        <v-flex class="ml-10">
          Mateus Marinho
        </v-flex>
        <v-menu v-if="more.length" transition="slide-y-transition" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item v-for="item in items" :key="item">
              <v-btn plain :href="item.to">{{ item.name }}</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-app-bar>

    <v-main>
      <home-page />
    </v-main>

    <v-footer dark color="#2F3437">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} | Made by
        <a href="" class="orange--text">Mateus Marinho</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import HomePage from "@/pages/HomePage";
export default {
  components: {
    HomePage,
  },
  data() {
    return {
      more: ["About", "Projects", "Contact"],
      items: [
        { name: "About", to: "#about" },
        { name: "Projects", to: "#projects" },
        { name: "Contact", to: "#contact" },
      ],
    };
  },
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2f3437;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a9acaf;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
