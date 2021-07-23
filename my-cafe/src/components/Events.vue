<template>
    <div id="app">
        <h1>Evemts</h1>
        <h2>{{event_title}}</h2>
        <h2>{{searched_event}}</h2>
    </div>
</template>
<script>
    export default {
        name: 'Evemts',
        props: [
            'event_id', 'query_id'
        ],
        computed: {
            event_title() {
                if (this.event_id == '1') {
                    return '1+1!'
                } else if (this.event_id == '2') {
                    return 'Free cookies'
                } else 
                    return ''
            
        },
        searched_event() {
            if (this.query_id) {
                return '2+1'
            } else 
                return '1'
        }

    }

};
</script>