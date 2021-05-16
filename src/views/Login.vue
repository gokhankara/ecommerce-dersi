<template>
    <div>
        <b-alert v-for="(error, index) in $store.state.auth.errors" :key='index' >
            {{error}}
        </b-alert>
        <b-form @submit.prevent="Login" >
            <b-form-input v-model="username" />
            <b-form-input v-model="password"  type="password"/>
            <b-button type="submit"> Giris yap </b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: 'mor_2314',
            password: '83r5^_'
        }
    },
    methods:{
        async Login(){
            const { username, password} = this;

            await this.$store.dispatch('auth/LOGIN', {username, password} )
            this.$router.push('/l');
        }
    }
}
</script>