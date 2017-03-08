Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',

    data(){
        return {
            tasks: [
                {task: 'Go to the store', complete: true},
                {task: 'Go to the bank', complete: true},
                {task: 'Go to the mountain', complete: true},

            ]
        };
    }
});
