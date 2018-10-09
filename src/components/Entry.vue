<template>
  <div class="entry">
    <div class="type">{{ data.type }}:</div>
    <input class="text" type="text" v-model="text" @keyup.enter="$emit('new-entry')" />
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "Entry",
  props: [
    'data'
  ],
  computed: {
    text: {
      get () {
        return this.data.text
      },
      set (value) {
        this.updateEntry({
          ...this.data,
          text: value
        })
      }
    }
  },
  methods: mapActions('entries', ['updateEntry']),
  mounted() {
    var input = this.$el.querySelector('input.text'); // I'm text inside the component.
    input.focus();
    input.select();
  }
}
</script>
<style scoped>
.entry {
  display: flex;
  flex-flow: row;
}
.entry .type {
  color: black;
  padding-right: 10px;
}
.entry .text {
  border: 0 solid #fff;
  outline: 0;
}
</style>