import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Tidy Room", isDone: false},
        {name: "Hoover", isDone: true},
        {name: "Take out the Recycling", isDone: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          isDone: false
        })
        this.newItem = "";
      },
      doItem: function(index){
        this.items[index].isDone = true;
      }
    }
  });
});
