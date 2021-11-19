<template>
  <div class="side-catalog">
    <div
      v-for="item in options"
      v-bind:key="item.docid"
      class="side-catalog__title"
      :class="item.docid === currValue ? 'side-catalog__active' : ''"
      @click="showDoc(item.docid)"
    >
      {{ item.title }}
    </div>
  </div>
</template>
<script>
export default {
  name: "SideCatalog",
  props: ["options", "value"],
  data() {
    return {
      currValue: this.value,
    };
  },
  methods: {
    showDoc(docid) {
      this.currValue = docid;
      this.$emit("input", docid);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.side-catalog {
  padding: 10px;
  display: flex;
  flex-direction: column;
  &__title {
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.3;
    padding: 6px 0px;
    &:hover {
      background-color: rgba(235, 237, 239, 0.7);
    }
  }
  &__active {
    font-weight: 700;
  }
}
</style>