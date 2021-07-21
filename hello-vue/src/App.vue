<template>
    <div id="app">
        <ProductPage></ProductPage>
    </div>
</template>
<script>
    import ProductPage from './components/ProductPage.vue'
    export default {name: 'App', components: {
            ProductPage
        }}
</script>
<style>
    @import './assets/images/styles.css';
</style>