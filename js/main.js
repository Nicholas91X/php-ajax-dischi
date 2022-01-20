const app = new Vue ({
    el: "#app",
    data: {
        dischi: []
    },
    created() {
        axios.get("http://localhost:8888/php-ajax-dischi/index.php").then( (response) => {
            this.dischi = response.data;
        });
    }
});