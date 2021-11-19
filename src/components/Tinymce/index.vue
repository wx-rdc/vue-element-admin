 <template>
  <div>
    <tiny-editor
      :id="tinymceId"
      :init="tinymceInit"
      :key="tinymceFlag"
      :value="value"
      @input="updateVal()"
    ></tiny-editor>
  </div>
</template>

 <script>
import tinymce from "tinymce";
import TinyEditor from "@tinymce/tinymce-vue";

export default {
  name: "TinymceEditor",
  components: {
    TinyEditor,
  },
  props: ["value"],
  data() {
    return {
      tinymceFlag: 1,
      tinymceInit: {},
      tinymceId: this.id || "vue-tinymce-" + +new Date(),
    };
  },
  methods: {
    updateVal() {
      this.$emit("input", tinymce.get(this.tinymceId).getContent());
    },
    // 插入图片至编辑器
    insertImage(res, file) {
      let src = ""; // 图片存储地址
      tinymce.execCommand("mceInsertContent", false, `<img src=${src}>`);
    },
  },
  created() {
    const that = this;
    this.tinymceInit = {
      // skin_url: "/tinymce/skins/ui/oxide",
      language_url: "/tinymce/langs/zh_CN.js",
      language: "zh_CN",
      height: document.body.offsetHeight - 300,
      browser_spellcheck: true, // 拼写检查
      branding: false, // 去水印
      // elementpath: false,  //禁用编辑器底部的状态栏
      statusbar: false, // 隐藏编辑器底部的状态栏
      paste_data_images: true, // 允许粘贴图像
      menubar: false, // 隐藏最上方menu
      plugins: "advlist table lists paste preview fullscreen",
      toolbar:
        "fontselect fontsizeselect forecolor backcolor bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | imageUpload quicklink h2 h3 blockquote table numlist bullist preview fullscreen",
      /**
       * 下面方法是为tinymce添加自定义插入图片按钮
       * 借助iview的Upload组件,将图片先上传到存储云上，再将图片的存储地址放入编辑器内容
       */
      setup: (editor) => {
        editor.ui.registry.addButton("imageUpload", {
          // text: '插入图片',
          tooltip: "插入图片",
          icon: "image",
          onAction: () => {
            let upload = that.$refs.imageUpload;
            upload.handleClick();
          },
        });
      },
    };
  },
  activated() {
    this.tinymceFlag++;
  },
};
</script>
