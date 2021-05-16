<template>
  <header>
    <b-navbar toggleable="md">
      <b-navbar-brand>Otokoc {{ $store.state.count }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item>
            <b-link :to="'/l'" router-tag="b-nav-text">
              Tum Kategoriler
            </b-link>
          </b-nav-item>
          <b-nav-item v-for="c in categories" :key="c.link">
            <b-link :to="c.link" router-tag="b-nav-text">
              {{ c.title }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item v-if="!$store.getters['auth/isLoggedIn']">
            <b-link :to="'/login'" router-tag="b-nav-text"> Giris </b-link>
          </b-nav-item>
          <b-nav-item v-else>
            <b-button variant="ghost" @click="handleLogout">
              <span> Cikis </span>
            </b-button>
          </b-nav-item>

          <b-nav-item>
            <b-link :to="'/basket'" router-tag="b-nav-text">
              Sepet {{ $store.getters.getBasketCount }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapState, mapActions, createNamespacedHelpers } from "vuex";
import { FETCH_CART, FETCH_CATEGORIES} from '@/store';
import { LOGOUT } from '@/store/auth.module';

const { mapGetters: mapAuthGetters, mapActions :mapAuthActions } = createNamespacedHelpers('auth')

export default {
  data() {
    return {
      rightLinks: [
        { link: "/login", title: "Giris" },
        { link: "/basket", title: "Basket" },
      ],
    };
  },
  computed: {
    ...mapState({
      categories: (state) =>
        state.categories.map((c) => {
          return {
            link: `/l/${c}`,
            title: c,
          };
        }),
    }),
    ...mapAuthGetters({
      isLoggedIn :'isLoggedIn'
    })
  },
  methods: {
    ...mapAuthActions({
      logout: LOGOUT,
    }),
    ...mapActions({
      fetchCategories: FETCH_CATEGORIES,
      fetchCart: FETCH_CART
    }),
    handleLogout() {
      this.logout()
    },
  },
  async mounted() {
    await this.fetchCategories()
    await this.fetchCart()
  },
};
</script>