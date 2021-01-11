<template>
    <div
        class="titlebtn"
        v-bind:style="style"
        v-on:click="click"/>
</template>

<script>
    const { ipcRenderer } = require('electron')

    const style = {
        min: {
            background: '#45fc92',
            right: '30px'
        },
        close: {
            background: '#fc4578',
            right: '0px'
        }
    }

    export default {
        name: 'Titlebtn',
        props: ['type'],
        computed: {
            style() {
                return style[this.type];
            }
        },
        methods: {
            click() {
                ipcRenderer.send(this.type);
            }
        }
    }
</script>

<style>
.titlebtn {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-app-region: no-drag;
}
</style>