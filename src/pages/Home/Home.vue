<template>
    <HeaderVue />
    <bannerImg alt="Banner"/>
    <SobreVue />
</template>

<script>
    import HeaderVue from '../../components/Header/Header.vue';
    import bannerImg from '../../components/Banner/Banner.vue';
    import SobreVue from '../../components/Sobre/Sobre.vue';
    export default {
        name: 'HomePage',
        components: {
            HeaderVue,
            bannerImg,
            SobreVue
        }
    }
</script>