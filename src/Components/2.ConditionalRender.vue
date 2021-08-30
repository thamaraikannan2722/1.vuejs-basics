<template>
  <h2 v-if="num == 0">The number is Zero</h2>
  <h2 v-else-if="num > 0">The number is Positive</h2>
  <h2 v-else-if="num < 0">The number is Negative</h2>
  <h2 v-else>Not a number</h2>

  <template v-if="display">
    <h2>Hello,</h2>
    <h2>World!</h2>
    <h2>Im the Best!</h2>
  </template>

  <h2 v-show="showElement">Using a v-show</h2>
  <h2 v-if="showElement">Using a v-if</h2>
</template>

<script>

//11.Conditional Rendering 1
//12.Conditional Rendering 2

export default {
  name: "ConditionalRender",
  data() {
    return {
      num: "hi",
      display: true,
      showElement: true,
    };
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
