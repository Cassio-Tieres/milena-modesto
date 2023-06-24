<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                Logo
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Início</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/sobre">Sobre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/abordagem">Abordagem</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/publico-alvo">Público-alvo</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contato">Contato</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link whatsapp-header" to="/">
                            <i class="bi bi-whatsapp me-1"></i>  79 9953-6112
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderVue'
    }
</script>

<style scoped>
    .navbar .navbar-expand-lg {
        position: absolute;
        width: 100%;
        background-color: transparent !important;
    }
    nav .container-fluid {
        margin: 0 100px;
    }
    .navbar-expand-lg .navbar-collapse {
        justify-content: center;
    }
    .navbar-expand-lg .navbar-collapse ul li a {
        margin: 0 8px;
    }
    .nav-link.whatsapp-header {
        margin-left: 20px;
        background-color: #B8CCB1;
        border-radius: 10px;
        color: #fff;
        padding: 10px 25px;
    }
    @media (max-width: 786px) {
        nav .container-fluid {
            margin: 0 0;
        }
        .navbar .navbar-expand-lg {
            position: absolute;
            width: 100%;
            background-color: #fff !important;
        }
    }
</style>