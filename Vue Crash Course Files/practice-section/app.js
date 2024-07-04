const vm = Vue.createApp({  // vm stands for vue module. The word module describe the data we have in our app. vue describe the html we have in our app.
    data() {
      return {
        firstName: 'Dave',
        lastName: 'Joe',
        url: 'https://google.com',
        raw_url: '<a href="https://google.com" target="_blank">Google</a>',
        age: 20
      }
    },
    methods: {
      fullName() {
        return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
      increment() {
        this.age++
      }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob';
// }, 2000);
