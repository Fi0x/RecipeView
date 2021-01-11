<!-- basic functionality similar to a todo-list: items can be added using an input-field. 
items can also be striked-through/ticked off and deleted by clicking on a trashcan symbol. 
interesting functionality that could be added aswell: clicking on a button under a recipe shows 
a pop up with all ingredients in form of buttons. On-click these are added to the shopping list.-->
<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>Your shopping list</h2>
    <form>
      <label for="listinput">Create a new entry:</label>
      <input
        type="text"
        v-model="input"
        id="listinput"
        placeholder="Bananas, Pork, ..."
        v-on:keyup.enter="additem()"
      /><!--Webpage currently refreshes when enter is clicked, only when in form. BAD-->
      <b-button type="button" v-on:click="additem()"> + </b-button>
    </form>

    <ul>
      <div class="item">
        <b-checkbox
          class="listitem"
          v-for="(item, index) in shoplist"
          :key="index"
        >
          <li class="strikethrough">
            {{ item }}
            <b-button
              class="trashbtn"
              type="button"
              v-on:click="clearitem(index)"
              >🗑️</b-button
            >
          </li>
        </b-checkbox>
      </div>
    </ul>

    <b-button type="button" v-on:click="clearlist()"
      >Clear entire list</b-button
    >
  </div>
</template>


<!--------------------------------------SCRIPT-------------------------------------->
<script>
"use strict";
//import test from "../helpers/test.js"//so würde der default importiert werden 
import {test} from "../helpers/shoppinglist.js";
//////////// menge der zutaten ggf mit store speichern VUEX -> ggf wie einkaufskorb auf website
export default {
  name: "Shoppinglist",
  data: function () {
    return {
      shoplist: [],
      input: "",
    };
  },
  methods: {
    additem() {
      this.shoplist.push(this.input);
      this.input = "";
    },
    clearlist() {
      this.shoplist = [];
    },
    clearitem(index) {
      this.shoplist.splice(index, 1);
      test();
    },
  },
};
</script>
<!---------------------------------------STYLE---------------------------------------->
<style scoped>
#listinput {
  margin-left: 10px;
}
.item {
  text-align: left;
}
.trashbtn {
  padding: 0px;
  background-color: #f3d9a4;
  border-color: #f3d9a4;
}
.trashbtn:hover {
  background-color: lightcoral;
  border-color: lightcoral;
}
b-checkbox:checked + li.strikethrough {
  text-decoration: line-through;
}
</style>