<template>
  <div>
      <app-header></app-header>
      <section>
        <aside>
          <app-aside></app-aside>
        </aside>
        <main>
          <router-view></router-view>
        </main>
      </section>
  </div>
</template>

<script>
import Header from './header/Header.vue';
import Aside from './aside/Aside.vue';

export default {
  components: {
    appHeader: Header,
    appAside: Aside
  }
}
</script>

<style class="scss" scoped>
  section {
    width: 100%;
    display: flex;
    min-height: 100vh;
  }

  aside {
    width: 25%;
    min-height: 100%
  }

  main {
    width: 50%;
    min-height: 100%;
    padding: 15px;
  }
</style>
