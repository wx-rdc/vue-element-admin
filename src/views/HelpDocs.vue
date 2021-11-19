<template>
  <div class="app-container">
    <div class="markdown-body">
      <component :is="docid" />
    </div>
    <side-catalog class="catalog" :options="catalog" v-model="docid" />
  </div>
</template>

<script>
import { commonMixin } from "@/common/mixin.js";
import SideCatalog from "@/components/SideCatalog";
import "highlight.js/styles/github.css";
import "github-markdown-css";

import docGetStart from "@/../docs/get-start.md";
import docVModel from "@/../docs/v-model.md";
import docReloadTab from "@/../docs/reload.md";

export default {
  components: {
    SideCatalog,
    docGetStart,
    docVModel,
    docReloadTab,
  },
  mixins: [commonMixin],
  data() {
    return {
      catalog: [
        {
          title: "开发起步",
          docid: "docGetStart",
        },
        {
          title: "自定义组件的v-model",
          docid: "docVModel",
        },
        {
          title: "当前Tab页面强制刷新方法",
          docid: "docReloadTab",
        },
      ],
      docid: "docGetStart",
    };
  },
  watch: {
    docid(val, oldVal) {
      this.scrollTop();
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
code {
  background: #eef1f6;
  padding: 15px 16px;
  margin-bottom: 20px;
  display: block;
  line-height: 36px;
  font-size: 15px;
  font-family: Source Sans Pro, Helvetica Neue, Arial, sans-serif;
}
.markdown-body {
  margin: 0 20px;
  width: 1024px;
}
.catalog {
  position: fixed;
  top: 150px;
  right: 50px;
}
</style>