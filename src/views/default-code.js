// src/views/default-code.js
const code =
    `<template>
    <div>
        <input v-model="message">
        {{ message }}
        <button @click='click'>click</button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        },
            methods:{
                click(){
                    console.log('ok')
                }
            }
    }
</script>`;

export default code;