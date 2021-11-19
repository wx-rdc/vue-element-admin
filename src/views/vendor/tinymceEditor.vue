<template>
  <div class="app-container">
    <div>
      <!-- <tinymce
        class="editor"
        :value="content"
        :setting="editorSetting"
        @input="(content) => (content = content)"
      ></tinymce> -->
      <tinymce class="editor" v-model="content" :setting="editorSetting" />
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>
<script>
import Tinymce from "@/components/Tinymce";

export default {
  name: "editor-demo",
  data() {
    return {
      content: `
        Have you heard about Tiny Cloud?
        It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise.
        50,000 developers already agree.
        They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor.
        They’re also ready for some exciting updates coming soon.
      `,
      // tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
      editorSetting: {
        height: 400,
      },
    };
  },
  components: {
    Tinymce,
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.editor-content {
  margin-top: 20px;
}
</style>