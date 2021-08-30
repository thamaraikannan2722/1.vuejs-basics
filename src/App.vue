<!-- Comment -->

<template>
  <div>{{ hi }} {{ name }}</div>
  <div v-text="greet"></div>
  <div v-html="channel"></div>
  <div v-html="hack"></div>
  <h2 v-bind:id="headingId">Heading</h2>
  <button v-bind:disabled="isDisabled">Bind</button> <br />
  <button v-bind:enabled="isEnabled">Bind</button>
  <h2 class="underline">Underline</h2>
  <h2 class="underline" v-bind:class="status">Status</h2>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 v-bind:class="isSold ? 'sold' : 'new'">Soldout Movie</h2>
  <h2 v-bind:class="['new', 'promoted', 'underline']">Newly Promoted Movie</h2>
  <h2 v-bind:class="[isPromoted && 'promoted', isSold ? 'sold' : 'new']">
    Array conditional movie
  </h2>
  <h2
    v-bind:class="{
      promoted: isPromoted,
      new: !isSold,
      sold: isSold,
    }"
  >
    Object conditional movie
  </h2>

  <h2
    v-bind:style="{
      color: highlightColor,
      'font-size': headerSize + 'px',
    }"
  >
    Inline Style
  </h2>

  <h2 v-bind:style="headerStyleObject">Style Object</h2>

  <div v-bind:style="[bStyleObject, styleObject1]">Success Style</div>

  <div v-bind:style="[bStyleObject, dangerStyleObject]">Danger Style</div>

  <ConditionalRender />
  <ListRender />
  <ListKeys />
  <ConditionalList />
  <Methods />
  <EventHandling />
  <FormHandling />
  <Modifiers />
  <BonusDirectives />
  <ComputedProperties />
  <CPVsMethods />
  <Watchers />
  <Components />
</template>

<script>

import ConditionalRender from '../src/Components/2.ConditionalRender';
import ListRender from '../src/Components/3.ListRender';
import ListKeys from '../src/Components/4.List_and_Keys';
import ConditionalList from '../src/Components/5.Conditional_List_Render';
import Methods from '../src/Components/6.Methods';
import EventHandling from '../src/Components/7.Event_Handling';
import FormHandling from '../src/Components/8.Form_Handling';
import Modifiers from '../src/Components/9.Modifiers';
import BonusDirectives from '../src/Components/10.Bonus_Directives';
import ComputedProperties from '../src/Components/11.Computed_Properties';
import CPVsMethods from '../src/Components/12.Computed_Properties_Vs_Methods';
import Watchers from '../src/Components/13.Watchers';
import Components from '../src/Components/14.Components';

//5.Binding Text
//6.Binding HTML
//7.Binding to Attributes
//8.Binding Classes
//9.Binding Styles

export default {
  name: "App",
  components: {
    ConditionalRender,
    ListRender,
    ListKeys,
    ConditionalList,
    Methods,
    EventHandling,
    FormHandling,
    Modifiers,
    BonusDirectives,
    ComputedProperties,
    CPVsMethods,
    Watchers,
    Components,
  },
  data() {
    return {
      hi: "Hello,", //5.
      name: "Ironman",
      greet: "Welcome",
      channel: "<b>AM Studios Offical</b>", //6.
      hack: `<a href="#" onclick="alert('You have been hacked!')">Win a Prize!<a/>`,
      headingId: "heading", //7.
      isDisabled: true,
      isEnabled: true,
      status: "success", //8.
      isPromoted: true,
      isSold: true,
      highlightColor: "orange", //9.
      headerSize: 50,
      headerStyleObject: {
        color: "blue",
        fontSize: "50px",
        padding: "20px",
      },
      bStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      styleObject1: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
        padding: "20px",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold {
  color: red;
}
</style>