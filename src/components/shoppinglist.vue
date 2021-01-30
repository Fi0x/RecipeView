<!------------------------------TEMPLATE-------------------------------------->
<template>
  <div>
    <h2>Your shopping list</h2>
    <form onsubmit="return false;"> <!--stops page from reloading on enter press-->
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
          {{ item }}
          <b-button class="trashButton"
                    type="button"
                    v-on:click="clearItem(index)">
            🗑️
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
  beforeMount()
  {
    this.loadCookie();
  },
  methods: {
    addItem()
    {
      if (this.input.length > 0)
      {
        this.shopList.push(this.input);
        this.input = "";
        let arrayString = this.shopList.toString();
        this.$cookies.set("listCookie", arrayString, "3d");
      } else
      {
        alert("You can't submit an empty string to your shopping list");
      }
    },
    clearItem(index)
    {
      this.shopList.splice(index, 1);
      let arrayString = this.shopList.toString();
      this.$cookies.set("listCookie", arrayString, "3d");
    },
    clearList()
    {
      this.shopList = [];
      let arrayString = this.shopList.toString();
      this.$cookies.set("listCookie", arrayString, "3d");
    },
    loadCookie()
    {
      if (this.$cookies.get("listCookie") == null) console.log("You don't have any shopping list items saved");
      else this.shopList = this.$cookies.get("listCookie").split(",");
    }
  }
};
</script>
<!---------------------------------------STYLE---------------------------------------->
<style scoped>
#listInput {
  margin-left: 10px;
  width: 60%;
}

.item {
  text-align: left;
}

.shoppingList {
  list-style: none;
}

.trashButton {
  background-color: #f3d9a4;
  border-color: #f3d9a4;
}
</style>
