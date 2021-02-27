app.component('photo-view', {
    props: ['img'],
    template:
    /*html*/
        ` 
            <button @click="closeImg">
              <span class="material-icons  top-0 right-0 h-16 w-16 text-xl text-white">
                close
              </span>
            </button>
            <div class="md:py-40">
                <img v-bind:src="img" class="item-center" width="400" height="600">
            </div>`,
    data() {
        return {

        }
    },
    methods: {
        closeImg() {
            this.$emit('close-img')
        }
    }
})