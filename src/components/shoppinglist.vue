<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>Your shopping list</h2>
    <form onsubmit="return false;">
      <label for="listInput">Create a new entry:</label>
      <div>
        <input
            type="text"
            v-model="input"
            id="listInput"
            placeholder="Bananas, Pork, ..."
            v-on:keyup.enter="addItem()" />
        <b-button type="button"
                  v-on:click="addItem()">
          +
        </b-button>
      </div>
    </form>
    <ul>
      <div class="item"
           v-for="(item, index) in shopList"
           :key="index">
        <li class="shoppingList">
          <b-button
              class="shoppingItem"
              type="button"
              v-on:click.prevent="toggleClass(item, $event.target)">
            ✔️ {{ item }}
          </b-button>
        </li>
      </div>
    </ul>
    <b-button type="button"
              v-on:click="clearList()">
      Clear entire list
    </b-button>
  </div>
</template>
<!--------------------------------------SCRIPT-------------------------------------->
<script>
"use strict";
export default {
  name: "Shoppinglist",
  data: function ()
  {
    return {
      shopList: [],
      input: ""
    };
  },
  methods: {
    addItem()
    {
      this.shopList.push(this.input);
      this.input = "";
    },
    clearList()
    {
      this.shopList = [];
    },
    toggleClass(item, target)
    {
      let list = target.classList;
      if (list.contains("strikeThrough")) list.remove("strikeThrough");
      else list.add("strikeThrough");
    }
  }
};
</script>
<!---------------------------------------STYLE---------------------------------------->
<style scoped>
#listInput {
  margin-left: 10px;
}

.item {
  text-align: left;
}

.shoppingItem {
  padding: 0;
  background-color: #f3d9a4;
  border-color: #f3d9a4;
  color: #2c3e50;
}

.shoppingItem:hover {
  color: #2c3e50;
}

.shoppingItem:focus {
  color: #2c3e50;
}

.shoppingList {
  list-style: none;
}

.strikeThrough {
  text-decoration: line-through;
}
</style>
