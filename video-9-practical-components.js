Vue.component('personal-well', {
    props: ['body'],

    data(){
        return {
            isVisable: true
        };
    },
    template: `
    <div class="well" v-show="isVisable">
    {{ body }}

    <button type="button" v-on:click="hideModel">close</button>
    </div>
    `,

    methods: {
        hideModel(){
            this.isVisable = false;
        }
    }
});




new Vue ({
    el: '#root'
});
