Vue.component('modal', {
    template:
    `
    <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
        <p>ashahs asg ahsg ajhsg ahsga jhags ahjgs ajhga sjhags ajhg ashjags kjhg asjhagsasgajh ajgsh ajhsg </p>
    </div>
  </div>
  <button class="modal-close" @click="$emit('close')"></button>
</div>
    `
});
new Vue ({
    el: '#root',

    data: {
        showModal: false
    }
});
