<!-- basic functionality similar to a to-do-list: items can be added using an input-field.
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
      /><!-- TODO Webpage currently refreshes when enter is clicked, only when in form. BAD-->
      <b-button type="button" v-on:click="additem()"> +</b-button>
    </form>

    <ul>
      <div class="item"
                v-for="(item, index) in shoplist"
          :key="index">
      
         <li class="shlist"
         v-bind:class="[isActive ? 'done' : 'undone'] ">
           <b-button
              class="trashbtn"
              type="button"
              v-on:click="toggleClass()"
              >✔️
            </b-button>
            {{ item }}
          </li>
      </div>
    </ul>

    <b-button type="button" v-on:click="clearlist()"
      >Clear entire list
    </b-button>
  </div>
</template>


<!--------------------------------------SCRIPT-------------------------------------->
<script>
"use strict";
//////////// todo menge der zutaten ggf mit store speichern VUEX -> ggf wie einkaufskorb auf website
export default {
  name: "Shoppinglist",
  data: function () {
    return {
      shoplist: [],
      input: "",
      isActive: false,
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
    },
    toggleClass: function() {
      this.isActive =!this.isActive;
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

.shlist {
list-style: none;
}

.done {
  text-decoration: line-through;
}

.undone {
  text-decoration: none;
}
</style>