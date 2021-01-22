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
      />
      <b-button type="button" v-on:click="additem()"> +</b-button>
    </form>

    <ul>
      <div class="item" v-for="(item, index) in shoplist" :key="index">
        <li class="shlist">
          <b-button
              class="shoppingitem"
              type="button"
              v-on:click.prevent="toggleClass(item, $event.target)"
          >✔️ {{ item }}
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
//////////// TODO: menge der zutaten ggf mit store speichern VUEX -> ggf wie einkaufskorb auf website
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
      let list = target.classList;
      if (list.contains("strikethrough")) {
        list.remove("strikethrough");
      } else {
        list.add("strikethrough");
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
  color: #2c3e50;
}
.shoppingitem:focus {
  background-color: #f3d0a4;
  border-color: #f3d0a4;
  color: #2c3e50;
}
.shlist {
  list-style: none;
}
.strikethrough {
  text-decoration: line-through;
}
</style>
