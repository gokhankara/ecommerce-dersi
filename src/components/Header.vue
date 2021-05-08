<template>
  <header>
    <b-navbar toggleable="md">
      <b-navbar-brand>Otokoc</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav  class="ml-auto">
        <b-navbar-nav>
          <b-nav-item v-for="link in navLinks" :key="link.link">
            <b-link :to="link.link" router-tag="b-nav-text">
              {{ link.title }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
         <b-nav-item v-for="link in rightLinks" :key="link.link">
            <b-link :to="link.link" router-tag="b-nav-text">
              {{ link.title }}
            </b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { link: "/l", title: "Tum  Kategoriler" },
        { link: "/l/ayakkabi", title: "Ayakkabi" },
        { link: "/l/canta", title: "Canta" },
      ],
      rightLinks: [
        { link: "/login", title: "Giris" },
        { link: "/basket", title: "Basket" },
      ],
    };
  },
};
</script>