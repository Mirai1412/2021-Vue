<template>
    <div></div>
</template>
<script>
import memoApi from '../apis/memos'

export default {
    name: 'ReadMemo',
    data(){
        return {
            memo:{}
        }
    },
    mounted(){
        memoApi.getMemo(this.$route.memoId)
        .then(res=>{
            this.memo = res.data
            console.log(this.memo)
        })
        .catch(()=>{
        })
    }
        
    
}
</script>
