<template>
  <div>
    <pre>
        {{ JSON.stringify(formValues.name) }}
        {{ JSON.stringify(formValues.age) }}
    </pre>
  </div>

  <form @submit.prevent="submitForm">
    <div>
      <label for="name1">Name</label>
      <input type="text" id="name1" v-model.trim.lazy="formValues.name" />
    </div>

    <div>
      <label for="age">Age</label>
      <input
        @keyup="submitForm"
        type="number"
        id="age"
        v-model.number="formValues.age"
      />
    </div>

    <!--<div>
      <button>Submit</button>
    </div> -->
  </form>
</template>

<script>
//21.Modifiers - .trim , .lazy , .number, .prevent , @keyup = ""

export default {
  name: "Modifiers",
  data() {
    return {
      formValues: {
        name: "",
        age: null,
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log("Form values", this.formValues);
    },
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
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
input[type="number"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
