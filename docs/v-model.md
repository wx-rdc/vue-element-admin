### 自定义组件的v-model

自定义组件要处理`value`值和`input`事件
```javascript
      :value="value"
      @input="updateVal()"
```
对于一般的原生控件，可以使用`$event.target.value`获取变化后的值，但对于复杂控件，可能需要调用控件自身提供的api来获取变化后的值，例如对于`Tinymce`控件，获取值的api如下
```javascript
    updateVal() {
      this.$emit("input", tinymce.get(this.tinymceId).getContent());
    },
```

```javascript
<template>
  <div class="app-container">
    <div>
      <tinymce class="editor" v-model="content" :setting="editorSetting" />
    </div>
    <div class="editor-content" v-html="content"></div>
  </div>
</template>
<script>
import Vue from "vue";
import Tinymce from "@/components/Tinymce";

export default {
  name: "editor-demo",
  data: function () {
    return {
      content: `
        Have you heard about Tiny Cloud? 
        It’s the first step in our journey to help you deliver great content creation experiences, 
        no matter your level of expertise. 50,000 developers already agree. 
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
```