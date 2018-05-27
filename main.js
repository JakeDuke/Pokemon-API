var vue = new Vue({
    el: '#app',
    data: {
        name: '',
        picUrl: '',
        pockid: 1
    },

    // watch: {
    //     pockid: function (newValue, oldValue) {
    //         // console.log("OldValue: " + oldValue + " ;NewValue: " + newValue);
    //         if (newValue != undefined || newValue != "") {
    //             vue.picUrl = vue.getpock(newValue)
    //         }
    //     }
    // },


    methods: {

        getpock: function (id) {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => {
                    // console.log(response.data.forms[0].name);
                    // console.log(response.data.sprites[front_default]);
                    console.log(response.data.name);


                    vue.name = response.data.name;
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