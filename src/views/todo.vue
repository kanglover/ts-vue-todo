<template>
    <div class="todo-page">
        <ul>
            <todo-item
                v-for="(item, index) in list"
                :key="index"
                :index="index"
                :content="item"
                :editIndex="editIndex"
                @on-edit="handleEdit"
                @on-remove="handleRemove"
                @on-save="handleSave"
                @on-cancel="handleCancel"
            ></todo-item>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item';
import { State, Mutation } from 'vuex-class';


@Component({
    name: 'TodoPage',
    components: {
        TodoItem,
    },
})
export default class TodoPage extends Vue {
    public editIndex = -1;
    // public list = ['vue.js', 'React.js', 'Angular.js', 'Node.js'];
    @State('todoList') public list;
    @Mutation('updateTodoList') public updateList;

    public handleEdit(index) {
        this.editIndex = index;
    }

    public handleRemove(index) {
        this.list.splice(index, 1);
    }

    public handleSave({index, editContent}) {
        // 因为 editIndex 改变了导致组件重新渲染，所以可以直接修改数组
        // this.list[index] = editContent;

        // 可以不用在父组件声明 editIndex 以及 修改 editIndex 的方法，放在子组件中其实也一样
        // this.$set(this.list, index, editContent);

        this.updateList({ index, editContent });
        this.handleCancel();
    }

    public handleCancel() {
        this.editIndex = -1;
    }
}
</script>
