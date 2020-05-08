import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: ['vue.js', 'React.js', 'Angular.js', 'Node.js'],
    },
    mutations: {
        updateTodoList(state, {index, editContent}) {
            state.todoList[index] = editContent;
        },
    },
    actions: {},
});
