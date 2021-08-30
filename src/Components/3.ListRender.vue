<template>
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie"> {{ movie }} </h3>
  </div>

  <h2 v-for="value in myInfo" :key="value"> {{ value }} </h2>
  <h2 v-for="(value, key) in myInfo" :key="value"> {{ key }} {{ value }} </h2>

    <template v-for="name in names" :key="name">
        <h2> {{ name }} </h2>
        <hr />
    </template>

</template>

<script>

//13.List Rendering

export default {
  name: "ListRender",
  data() {
    return {
        names: ['Ajith', 'Vijay', 'Surya'],
        fullNames: [
            { first: 'Bruce', last: 'Wayne' },
            { first: 'Clark', last: 'Kent' },
            { first: 'Princess', last: 'Diana' },
        ],
        actors: [
            {
                name: 'Christian Bale',
                movies: ['Batman', 'The Prestige'],
            },
            {
                name: 'Di Caprio',
                movies: ['Titanic', 'Inception'],
            },
        ],
        myInfo: {
            name: 'Ashwin',
            channel: 'AM Studios',
            album: 'Unnaale Uyirvaazhkiren',
        },
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