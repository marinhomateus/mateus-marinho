<template>
  <v-app>
    <v-app-bar flat height="50" app color="white">
      <v-layout align-center>
        <v-flex>
          <v-text-field
            color="grey"
            placeholder="Search"
            class="mt-7"
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
          />
        </v-flex>

        <v-btn height="45" class="mx-2 ml-4">
          <v-icon> mdi-compare-vertical </v-icon>
        </v-btn>
        <v-btn height="45" class="ml-2" dark>
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-layout>
    </v-app-bar>

    <v-navigation-drawer app expand-on-hover right>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
      items: [
        { title: "Home", icon: "mdi-home" },
        { title: "Recent", icon: "mdi-clock-time-three" },
        { title: "Following", icon: "mdi-account-group" },
      ],
      items2: [
        { title: "Messages", icon: "mdi-view-dashboard" },
        { title: "Notifications", icon: "mdi-image" },
      ],
    };
  },
};
</script>

<style></style>
