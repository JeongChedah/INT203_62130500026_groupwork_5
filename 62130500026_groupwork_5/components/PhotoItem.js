app.component('photo-item', {
    props: ['cartoon'],
    template:
    /*html*/
        `
            <p class="font-semibold text-lg text-green-700">{{cartoon.title}}</p>
            <img v-bind:src="cartoon.image " class=" transform hover:scale-100 " :alt="cartoon.title" @click="$emit('show-pic')">
            <p class="text-base">{{cartoon.detail}}</p>
            <div class="absolute flex justify-center">
                <div class="flex flex-row justify-start space-x-1">
                    <p>
                        <button @click="toggleLike(cartoon.id)">
                            <span class="material-icons" v-show="!cartoon.like">favorite_border</span>
                        </button>
                        <button @click="toggleLike(cartoon.id)">
                            <span class="material-icons" style="color: red" v-show="cartoon.like">favorite</span>
                        </button>
                    </p>
                </div>
            </div>

    `,
    data() {
        return {
            img: '',
            showimg: false
        }
    },
    methods: {
        toggleLike(id) {
            this.$emit('toggle-like', id)
        },
        showPic(id) {
            let pic = this.img
            this.$emit('show-pic', id, pic)
            pic = ''
        }
    }
})