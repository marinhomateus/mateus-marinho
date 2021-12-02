<template>
  <v-app>
    <v-app-bar flat height="50" app color="white">
      <v-layout align-center>
        <v-icon src="@assets/logo.png"> </v-icon>
        <v-flex>
          Mateus Marinho
        </v-flex>
        <v-menu v-if="more.length" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item v-for="item in more" :key="item" to="#">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
    </v-app-bar>

    <v-main>
      <home-page />
    </v-main>
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
    };
  },
};
</script>

<style></style>
