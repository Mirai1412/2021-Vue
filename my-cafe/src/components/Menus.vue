<template>
    <div>
        <h1>Menus</h1>
        <ul>
            <li v-for="menu in menus" :key="menu.id">
                <a>{{menu.name}}</a>
            </li>
        </ul>
  
    <menu-item></menu-item>
      </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
export default{
  components: { MenuItem },
    name:'Menus',
    computed:{
        MenuItem,
        methods:{
            menuAddress(id){
                return '/menus/'+id
            }
        },
        data(){
            return {
                menus:[{id:1, name:"a", price:1000},
                ]
            }
        }

    }
};
</script>
