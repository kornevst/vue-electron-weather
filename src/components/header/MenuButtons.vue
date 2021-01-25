<template>
<div class="title">
    <div
        class="button button__min"
        @click="click('min')"
    >
        <min-icon class="button__icon" />
    </div>
    <div
        class="button button__close"
        @click="click('close')"
    >
        <close-icon class="button__icon" />
    </div>
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

    &__icon {
        width: 25px;
        height: 25px;
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
}
</style>