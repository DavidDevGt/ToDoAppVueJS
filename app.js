const app = Vue.createApp({
    data() {
        return {
            tareas: this.obtenerTareas(),
            nuevaTarea: ''
        }
    },
    watch: {
        tareas: {
            handler(tareas) {
                this.guardarTareas(tareas);
            },
            deep: true
        }
    },
    methods: {
        obtenerTareas() {
            let tareas = [];
            try {
                tareas = JSON.parse(localStorage.getItem('tareas')) || [];
            } catch (error) {
                console.error("Error al leer las tareas", error);
            }
            return tareas;
        },
        guardarTareas(tareas) {
            try {
                localStorage.setItem('tareas', JSON.stringify(tareas));
            } catch (error) {
                console.error("Error al guardar tareas", error);
            }
        },
        agregarTarea() {
            if (this.nuevaTarea) {
                this.tareas.push({ texto: this.nuevaTarea, completada: false });
                this.nuevaTarea = '';
            }
        },
        eliminarTarea(indice) {
            this.tareas.splice(indice, 1);
        }
    }
});

app.mount('#app');