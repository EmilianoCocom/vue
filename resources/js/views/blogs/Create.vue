<template>
    
</template>

<script>
export default {
    name: "create-blog",
    data() {
        return {
            blog: {
                titulo: "",
                contenido: "",
            },
            display: false,
        }
    },
    methods: {
        async create() {
            await this.axios.post('/api/blog', this.blog)
                .then(response => {
                    this.$router.push({name: "show"})
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>