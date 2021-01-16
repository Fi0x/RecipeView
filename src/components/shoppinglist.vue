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
      
         <li class="shlist">
           <b-button
              class="shoppingitem"
              type="button"
              v-on:click.prevent="toggleClass (item, $event.target)"
              >✔️            {{ item }}
            </b-button>

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
    toggleClass(item, target) {
      let list = target.classList
      if (list.contains('strikethrough')) {
        list.remove('strikethrough');
      }
      else {
        list.add('strikethrough');
      }
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

.shoppingitem {
  padding: 0px;
  background-color: #f3d9a4;
  border-color: #f3d9a4;
  color: #2c3e50;
}

.shoppingitem:hover {
  background-color: #d4ad39;
  border-color: #d4ad39;
}

.shoppingitem:focus {
  background-color: #f3d0a4;
  border-color: #f3d0a4;
}

.shlist {
list-style: none;
}

.strikethrough {
  text-decoration: line-through;
}

</style>