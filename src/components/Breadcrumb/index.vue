<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in filterList" :key="item.path">
        <span
          v-if="
            item.redirect === 'noredirect' || index == filterList.length - 1
          "
          class="no-redirect"
          >{{ generateTitle(item.meta.title) }}</span
        >
        <router-link v-else :to="item.redirect || item.path">{{
          generateTitle(item.meta.title)
        }}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from "@/utils/i18n";

export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null,
    };
  },
  computed: {
    filterList() {
      return this.levelList.filter((item) => item.meta.title);
    },
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
      const first = matched[0];
      if (first && first.meta.title !== "dashboard") {
        matched = [{ path: "/dashboard", meta: { title: "dashboard" } }].concat(
          matched
        );
      }
      this.levelList = matched;
    },
    generateTitle,
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
