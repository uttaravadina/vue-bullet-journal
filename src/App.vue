<template>
  <div id="app">
    <div class="days">
      <Day v-for="day in days" :data="day" :key="day.id" />
    </div>
    <button @click="addDay()">Add Day</button>
  </div>
</template>

<script>
import Day from "./components/Day";
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  name: "App",
  components: {
    Day
  },
  computed: {
    ...mapState({
      //checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('journal', {
      days: 'journalDays'
    })
  },
  methods: mapActions('journal', ['addDay'])
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
