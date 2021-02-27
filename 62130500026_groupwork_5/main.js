class Cartoon {
    constructor(title) {
        this.title = title;
    }
}
const app = Vue.createApp({
    data() {
        return {
            cartoons: [{
                    id: 0,
                    image: './images/senku.jpg',
                    title: 'Ishigami Senku(อิชางามิ เซ็นคู)',
                    detail: 'จอมคลั่งวิทยาศาสตร์ผู้เป็นความหวังสุดท้ายของมนุษยชาติ เซ็นคูต้องการช่วยให้ทุกคนมีชีวิตรอดและทำให้โลกกลับสู่จุดที่เคยเป็นก้วยพลังแห่งวิทยาศาสตร์',
                    like: false,
                },
                {
                    id: 1,
                    image: './images/tsukasa.jpg',
                    title: 'Shishio Tsukasa (ชิชิโอะ สึคาสะ)',
                    detail: 'นักเรียนมัธยมที่แข็งแกร่งที่สุดในญี่ปุ่น สึคาสะต้องการสร้างโลกใบใหม่ เขาต้องการช่วยเหลือแค่หนุ่มสาวที่มีจิตใจสะอาดและหยุดยั้งการฟื้นคืนอารยธรรมของเซ็นคู',
                    like: false,
                },
                {
                    id: 2,
                    image: './images/kohaku.jpg',
                    title: 'Kohaku (โคฮาคุ)',
                    detail: 'เด็กสาวที่เกิดและเติบโตในสโตนเวิลด์ โคฮาคุเป็นนักรบที่แข็งแกร่งที่สุดของหมู๋บ้านอิชิงามิ เธอชื่นชมวิถีของเซ็นคูและกลายเป็นพันธมิตรที่แข็งแกร่งของเขา',
                    like: false,
                }
            ],
            enters: false,
            searchMessages: '',
            notphoto: false,
            img: '',
            showimg: false
        }
    },
    methods: {
        toggleLike(id) {
            this.cartoons[id].like = !this.cartoons[id].like
        },
        searchTitle(title) {
            this.searchMessages = title
        },
        searchShow() {
            this.enters = !this.enters
            this.searchMessages = ''
        },
        showPic(id) {
            this.img = this.cartoons[id].image
            this.showimg = true
        },
        closeImg() {
            this.showimg = false
        }
    },
    computed: {
        LikePic() {
            return this.cartoons.filter(c => c.like).length
        },
        searchImg() {
            if (this.searchMessages) {
                if (this.cartoons.filter(cartoon => cartoon.title.toLowerCase().includes(this.searchMessages.toLowerCase())) == '') {
                    this.notphoto = true
                } else {
                    this.notphoto = false
                    return this.cartoons.filter(cartoon => cartoon.title.toLowerCase().includes(this.searchMessages.toLowerCase()))
                }
            } else {
                this.notphoto = false
                return this.cartoons
            }
        }
    }
})