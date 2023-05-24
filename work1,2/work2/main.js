
const App = {
    data() {
        return {
            activeColor: 'green',
            fontSize: 50,
            checkedName: [],
            selected: ''
        }
    },
    computed: {
        getCss() {
            return {
                'color': this.activeColor,
                'font-size': this.fontSize + "px"
            }
        }
    }
}







const app = Vue.createApp(App).mount('#app')