<template>

    <div>
        <div class="card">
            <Toolbar class="p-mb-4">
                <template #left>
                    <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #right>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="p-mr-2 p-d-inline-block" />
                    <Button label="Export" icon="pi pi-upload" class="p-button-help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable 
                ref="dt" 
                :value="blogs"
                dataKey="id" 
                :paginator="true" 
                :rows="10" 
                :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
                :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" 
                responsiveLayout="scroll"
            >
                <template #header>
                    <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
                        <h5 class="p-mb-2 p-m-md-0 p-as-md-center">Blogs</h5>
                        <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText placeholder="Search..." />
                        </span>
                    </div>
                </template>

                <Column header="ID" headerStyle="width: 150px">
                    <template #body="slotProps">
                        {{slotProps.data.id}}
                    </template>
                </Column>

                <Column header="Título" style="min-width:16rem">
                    <template #body="slotProps">
                        {{slotProps.data.titulo}}
                    </template>
                </Column>

                <Column header="Contenido" style="min-width:16rem">
                    <template #body="slotProps">
                        {{slotProps.data.contenido}}
                    </template>
                </Column>

                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>

            </DataTable>
        </div>
    </div>

    <Dialog v-model:visible="blogDialog" :style="{width: '450px'}" header="Create new Blog" :modal="true" class="p-fluid">

        <div class="p-field">
            <label for="price">Título</label>
            <InputText id="titulo" />
        </div>

        <div class="p-field">
            <label for="contenido">Contenido</label>
            <Textarea id="contenido" required="true" rows="3" cols="20" />
        </div>
        
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
        </template>
    </Dialog>
    

</template>

<script>
    export default {
        name: "blogs",
        data() {
            return {
                blogs: [],
                blogDialog: false,
                blog: {},
            }
        },
        mounted() {
            this.showBlogs()
        },
        methods: {
            async showBlogs() {
                const {data} = await this.axios.get('/api/blog')
                console.log(data)
                this.blogs = data
            },

            deleteBlog(id) {
                if(confirm("¿confirma eliminar el registro?")){
                    this.axios.delete(`/api/blog/${id}`)
                    .then(response => {
                        this.showBlogs()
                    })
                    .catch(error => {
                        console.log()
                    })
                }
            },

            openNew() {
                this.blog = {}
                this.blogDialog = true
            }   
        }
    }
</script>