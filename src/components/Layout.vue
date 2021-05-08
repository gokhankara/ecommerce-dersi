<template>
    <b-container>
        <Header />
        <slot></slot>
        <Footer />
    </b-container>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    components:{
        Header,
        Footer
    }
}
</script>