<template>
    <div id="title">
        <TitleButton type="min" />
        <TitleButton type="close" />
    </div>
</template>

<script>
    import TitleButton from '@/components/TitleButton'
    export default {
        name: 'Mytitle',
        components: {
            TitleButton
        }
    }
</script>

<style>
#title {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 0;
    background: transparent;
    box-shadow: 1px 1px 5px #00000050;
    -webkit-app-region: drag;
}
</style>