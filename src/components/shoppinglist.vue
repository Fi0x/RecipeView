<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>Your shopping list</h2>
    <form onsubmit="return false;">
      <label for="listinput">Create a new entry:</label>
      <div>
        <input
            type="text"
            v-model="input"
            id="listinput"
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
        <li class="shlist">
          <b-button
              class="shoppingitem"
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
      if (list.contains("strikethrough")) list.remove("strikethrough");
      else list.add("strikethrough");
    }
  }
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
  padding: 0;
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
