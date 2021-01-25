<template>
<div class="title">
    <button
        class="button button__min"
        @click="click('min')"
    >
        <min-icon class="button__icon" />
    </button>
    <button
        class="button button__close"
        @click="click('close')"
    >
        <close-icon class="button__icon" />
    </button>
</div>
</template>

<script>
    import { ipcRenderer } from "electron"

    import CloseIcon from '@/components/icons/CloseIcon'
    import MinIcon from '@/components/icons/MinIcon'

    export default {
        name: 'MenuButtons',
        components: {
            MinIcon,
            CloseIcon
        },
        methods: {
            click(type) {
                console.log('click ' + type)
                ipcRenderer.send(type);
            }
        }
    }
</script>

<style scoped lang="scss">
.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-self: flex-end;

    width: 100%;
    height: 30px;
    position: absolute;
    top: 0;
    background: transparent;
    box-shadow: 1px 1px 5px #00000050;
    -webkit-app-region: drag;
}

.button {
    width: 30px;
    height: 30px;
    -webkit-app-region: no-drag;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;

    &__icon {
        width: 15px;
        height: 15px;
        fill: #fff;
    }

    &__min {
        margin-left: auto;
        padding: 3px;
    }

    &__close {
        padding: 3px;
    }

    &:hover {
        .button__icon {
            fill: #dbdbdb;
        }
    }

    &:active {
        background: transparent;
        border: none;
    }
}
</style>