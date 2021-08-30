<template>
  <h2> {{ name }} </h2>
  <div>
    <button v-on:click="name = 'Batman'">Change name</button>
    <hr />
    <button v-on:mouseover="name = 'Batman'">Change name</button>
  </div>

  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="increment(1)">Increment 1</button>
    <button v-on:click="decrement(1)">Decrement 1</button>
    <hr />
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div>

  <h2> {{ name }} </h2>
  <div>
    <button v-on:click="changeName">Change name</button>
  </div>

  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="increment(1, $event)">Increment 1</button>
    <button v-on:click="decrement(1, $event)">Decrement 1</button>
  </div>

  <h2> {{ name }} </h2>
  <h2> {{ count }} </h2>
  <div>
    <button v-on:click="changeName($event), increment(1, $event)">Change name</button>
  </div>
</template>

<script>

//17.Event Handling (part-1) - v-on:click , v-on:mouseover
//18.Event Handling (part-2) - @click , $event , Multiple event handlers

export default {
  name: "EventHandling",
  data() {
    return {
      name: 'Ironman',
      count: 0,
    };
  },
  methods: {
    increment(num , event) {
      this.count += num
      console.log(event)
    },
    decrement(num , event) {
      this.count -= num
      console.log(event)
    },
    changeName(event) {
      this.name = 'Batman'
      console.log('Event', event)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>