
const App = {
    data() {
        return {
            counter: 0,
            person: [
                {id: "id1", message: "Mike"}, 
                {id: "id2", message: "15 years old"}, 
                {id: "id3", message: "Danny"}, 
                {id: "id4", message: "25 years old"}
            ]
        }
    },
    methods: {
        say(message) {
            alert(message);
        }
    }
}


const app = Vue.createApp(App).mount('#app')


