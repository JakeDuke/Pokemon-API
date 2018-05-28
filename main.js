var vue = new Vue({
    el: '#app',
    data: {
        name: '',
        picUrl: '',
        type: '',
        pockid: 1
    },

    methods: {

        getpock: function (id) {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => {

                    console.log(response.data.name);
                    vue.name = response.data.name;
                    vue.type = response.data.types[1]['type']['name'];
                    vue.picUrl = response.data.sprites["front_shiny"];

                })
                .catch(error => {
                    console.log('Error', error);
                });
        },
        choosepock: function(newValue) {
            vue.picUrl = vue.getpock(newValue)
        }
    }
});

vue.getpock(vue.pockid); 