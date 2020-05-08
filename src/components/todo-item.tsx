import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
    @Prop(String) public content!: string;
    @Prop(Number) public index!: number;
    @Prop(Number) public editIndex!: number;
    public editContent!: string;

    // 可直接声明定义，在子组件中修改
    // public editIndex: number = -1;


    // 监听下标变化，可以直接在 edit 中改变 editContent，因此可省略
/*    @Watch('editIndex')
    public editIndexChange(index) {
        if (index === this.index) {
            this.editContent = this.content;
        } else {
            this.editContent = '';
        }
    }*/

    @Emit('on-edit')
    public edit() {
        this.editContent = this.content;
        return this.index;
    }

    // 可以直接在子组件中定义 editIndex，在子组件中直接修改，不用父子传值
/*    public edit() {
        this.editIndex = this.index;
        this.editContent = this.content;
    }*/

    @Emit('on-remove')
    public remove() {
        return this.index;
    }

    @Emit('on-save')
    public save() {
        return {
            editContent: this.editContent,
            index: this.index,
        };
    }

    public cancel() {
        // event.stopPropagation();
        this.$emit('on-cancel');
    }

    protected render() {
        return (
            <li class='item-wrap'>
                {
                    this.editIndex === this.index ?
                        (
                            <div>
                                <input type='text'
                                    v-model={this.editContent}/>
                                <span on-click={this.save}>完成</span>
                                <span on-click={this.cancel}>取消</span>
                            </div>
                        ) : (
                            <div>
                                <span style='width: 200px; text-align: center; display: inline-block'>
                                    {this.content}
                                </span>
                                <span on-click={this.edit}>修改</span>
                                <span style='color: red' on-click={this.remove}>删除</span>
                            </div>
                        )
                }
            </li>
        );
    }
}
