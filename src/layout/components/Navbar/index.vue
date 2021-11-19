<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger
      class="hamburger-container"
      :toggleClick="toggleSideBar"
      :isActive="isCollapse"
    ></hamburger>
    <breadcrumb></breadcrumb>
    <right-menu></right-menu>
  </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import RightMenu from "../RightMenu";

export default {
  components: {
    Breadcrumb,
    Hamburger,
    RightMenu,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .right-menu {
    float: right;
    height: 100%;
    margin-right: 10px;
    .nx-help {
      display: inline-block;
      vertical-align: top;
    }
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
}
</style>