<template>
  <div></div>
</template>

<script>
import memoApi from '../apis/memos'
  export default {
    name: 'Home',
    data() {
      return {
        memos:[],
      };
    },
    mounted(){
      memoApi.getMemos()
      .then(res=>{
        this.memos = res.data
      })
      .catch(()=>{
      })
    }
  }

</script>

