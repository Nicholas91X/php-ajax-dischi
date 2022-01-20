const app = new Vue ({
    el: "#app",
    data: {
        dischi: [],
        dischi2: [],
        genre: ""
    },
    created() {
        axios.get("http://localhost:8888/php-ajax-dischi/index.php").then( (response) => {
            this.dischi = response.data;
        });
    },
    methods: {
        selectByGenre() {
            axios.get("http://localhost:8888/php-ajax-dischi/index.php").then( () => {
                this.dischi2 = [];
                this.dischi.forEach(element => {
                    if (element.genre == this.genre) 
                    this.dischi2.push(element);
                });
            });
        }
    }
});