<template>
    <div>
        <input type="text" v-model="title"><br>
        <input type="text" v-model="content"><br>
        <input type="file" @change="selectFile" ref="file"><br>
        <button @click="addMemo">Sace</button>
    </div>
</template>
<script>
import memoApi from '../apis/memos'
    export default{
        name:'AddMemo',
        data() {
            return {
                title:'',
                content:'',
                file:''
            }
        },
        methods : {
            selectFile(){
                this.file = this.$refs.file.files[0]
            },
            addMemo(){
                const data = new FormData();
            }
        }
    }
</script>
