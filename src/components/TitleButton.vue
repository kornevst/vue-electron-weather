<template>
    <div
        class="titlebtn"
        :style="style"
        @click="click"/>
</template>

<script>
    import { ipcRenderer } from "electron"

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
                console.log('Click')
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