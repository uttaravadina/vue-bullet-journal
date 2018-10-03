<template>
  <div class="day">
    <header>
      <input type="text" v-model="text" />
    </header>
    <div class="entries">
      <Entry v-for="(entry, index) in entries(data.id)" v-bind:data="entry" :key="index" @new-entry="addEntry" />
    </div>
    <div class="actions">
      <button @click="addEntry({dayId: data.id, type: 'task'})">Add Task</button>
      <button @click="addEntry({dayId: data.id, type: 'event'})">Add Event</button>
      <button @click="addEntry({dayId: data.id, type: 'note'})">Add Note</button>
    </div>
  </div>
</template>

<script>
import Entry from './Entry';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Day",
  components: {
    Entry
  },
  props: ['data'],
  computed: {
    text: {
      get () {
        return this.data.text
      },
      set (value) {
        this.updateDay({
          ...this.data,
          text: value
        })
      }
    },
    ...mapGetters('entries', {
      entries: 'dayEntries'
    })
  },
  methods: {
    ...mapActions('entries', ['addEntry']),
    ...mapActions('journal', ['updateDay'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.day {
  display: flex;
  flex-flow: column;
}
.day header {
  flex: 100%;
  display: flex;
  flex-flow: column;
  border-bottom: 2px solid green;
  margin-bottom: 10px;
}
.day header input {
  border: 0 solid #fff;
  outline: 0;
  font-weight: bold;
}
.day .entries {
}
</style>
