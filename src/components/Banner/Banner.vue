<template>
    <section class="img-banner">
        <img :src="require('@/assets/imgs/banner.png')" :alt="alt">
    </section>
</template>

<script>
    export default {
        name: 'BannerHome',
        props: {
            alt: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style scoped>
    .img-banner img {
        width: 100%;
    }
</style>