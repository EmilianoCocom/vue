<template>
    <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header"><h4>Editar Blog</h4></div>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">

                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Título</label>
                                    <input type="text" class="form-control" v-model="blog.titulo">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea class="form-control" id="floatingTextarea2" v-model="blog.contenido" style="height: 100px"></textarea>
                                    <label for="floatingTextarea2">Contenido</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "edit-blog",
    data() {
        return {
            blog: {
                titulo: "",
                contenido: "",
            }
        }
    },
    mounted() {
        this.showBlog()
    },
    methods: {
        async showBlog() {
            this.axios.get(`/api/blog/${this.$route.params.id}`)
                .then(response => {
                    const {titulo, contenido} = response.data
                    this.blog.titulo = titulo,
                    this.blog.contenido = contenido
                })
                .catch(err => console.log(err))
        },
        async update() {
            this.axios.put(`/api/blog/${this.$route.params.id}`, this.blog)
                .then(response => {
                    this.$router.push({
                        name: "show"
                    })
                })
                .catch(err => console.log(err))
        }
    }
}
</script>