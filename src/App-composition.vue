<script setup>
import { onMounted, ref } from 'vue'

const name = 'John Doe'
const status = ref(true)
const count = ref(2)
const message = 'egassem esrever'
const id = 15
const tasks = ref(['Task1', 'Task2', 'Task3'])
const link = 'https://google.com'
const newTask = ref('')

const toggleStatus = () => {
  status.value = !status.value
}

const updateCount = () => {
  count.value += 1
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    const data = await res.json()
    tasks.value = data.map((item) => item.title)
  } catch (error) {
    console.log(error)
  }
})
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
    <li v-for="(task, index) in tasks" v-bind:key="index">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <a v-bind:href="link" target="_blank">Search</a>
  <button @click="toggleStatus">Change Status</button>

  <form v-on:submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
</template>
