<template>
  <div class="app-wrapper" :class="{ hideSidebar: !isCollapse }">
    <div class="sidebar-container">
      <div class="logo">
        <img class="icon" src="@/assets/images/logo.png" alt="logo" />
        <transition name="fade-in">
          <span class="title" v-show="isCollapse">vue-admin</span>
        </transition>
      </div>
      <sidebar></sidebar>
    </div>
    <div
      id="tai-main-container"
      class="main-container"
      :class="{ hide: isCollapse }"
    >
      <!--nav-bar-->
      <navbar></navbar>
      <!--tags-->
      <tags-view></tags-view>
      <!--main-->
      <div class="app-main">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <router-view v-if="isRouterAlive"></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TagsView from "./components/TagsView";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    TagsView,
  },
  computed: {
    ...mapGetters(["sidebar", "cachedViews", "isRouterAlive"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
