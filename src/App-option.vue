<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: false,
      count: 1,
      message: 'egassem esrever',
      id: 15,
      tasks: ['Task1', 'Task2', 'Task3'],
      link: 'https://google.com'
    }
  },
  methods: {
    updateCount() {
      this.count += 1
    },
    toggleStatus() {
      this.status = !this.status
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>
  <div>{{ count }}</div>
  <button @click="updateCount">Increase</button>
  <div>{{ message.split('').reverse().join('') }}</div>
  <div v-text="message"></div>
  <div v-bind:id="`id-${id}`">{{ id }}</div>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" v-bind:key="index">{{ task }}</li>
  </ul>
  <a v-bind:href="link" target="_blank">Search</a>
  <button @click="toggleStatus">Change Status</button>
</template>
