app.component('photo-search', {
    template:
    /*html*/
        `
            <div>
                <input type="text" v-model="searchMessages" @input="searchTitle" placeholder="Please enter Charactor" 
                class="border ml-1 p-1 w-5/6 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm " >
                <button @click="$emit('search-show')" class="mr-1 p-1 rounded-sm focus:outline-none bg-red-500 ">cancel</button>
            </div>    
        `,
    data() {
        return {
            enters: false,
            searchMessages: '',
            notphoto: false,
        }
    },
    methods: {
        searchShow() {
            this.enters = !this.enters
            if (this.enters) {
                this.searchMessages = ''
            }
            this.$emit('search-show', this.enters)

        },
        searchTitle() {
            let clicktitle = this.searchMessages
            this.$emit('search-title', clicktitle)
            clicktitle = ''
        }
    }
})