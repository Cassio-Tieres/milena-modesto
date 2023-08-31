<template>
    <section class="sobre-mim">
        <div class="container">
            <div class="row mt-5 align-items-center">
                <div class="col-lg-6">
                    <h2>
                        Sobre mim
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisciestas, tortor nisl lobortis ipsum, et porttitor lorem ligula convallis enim. Nunc ut turpis vel orci vestibulum commodo. Vivamus vestibulum sodales ante quis gravida. Donec gravida velit sit amet hendrerit lacinia. Aliquam erat volutpat. Morbi et ex sed mauris gravida commodo. Suspendisse et arcu tempor, iaculis nunc et, cursus tortor. Etiam ligula tellus, fermentum vitae justo ac, auctor lobortis magna. Cras nec aliquam lacus. Ut eu enim viverra, fermentum nisl euismod, suscipit elit. Integer condimentum egestas efficitur.
                    </p>
                </div>
                <div class="col-lg-6">
                    <img :src="require('@/assets/imgs/img-sobre.png')" alt="Sobre mim">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'SobreVue'
    }
</script>
