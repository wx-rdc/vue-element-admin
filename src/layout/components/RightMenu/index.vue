<template>
  <div class="right-menu">
    <div class="right-menu-item nx-help">
      <el-badge is-dot class="item">
        <i id="badge" class="el-icon-bell" @click="isScreenFull" />
      </el-badge>
    </div>
    <div class="right-menu-item nx-help">
      <nx-top-lock style="cursor: pointer" class="nx-help"></nx-top-lock>
    </div>
    <div class="right-menu-item nx-help">
      <el-tooltip
        content="全屏缩放"
        effect="dark"
        placement="bottom"
        fullscreen
      >
        <i id="screenfull" class="el-icon-full-screen" @click="isScreenFull" />
      </el-tooltip>
    </div>
    <div class="right-menu-item nx-help">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="avatar" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item> Home </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/images/avatar.jpg";
import nxTopLock from "@/components/nx-top-lock";
import screenfull from "screenfull";

export default {
  components: {
    nxTopLock,
  },
  data() {
    return {
      isFullscreen: false,
      avatar,
    };
  },
  methods: {
    isScreenFull() {
      const element = document.getElementById("tai-main-container");
      // 需要注意的是 如果判断!screenfull.enabled 显示的是不支持全屏的话 是因为谷歌的版本问题  判断改为 !screenfull.isEnabled  就可以了
      if (!screenfull.isEnabled) {
        // 如果不支持进入全屏，发出不支持提示
        this.$message({
          message: "您的浏览器版本过低不支持全屏显示！",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle(element);
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    },
  },
};
</script>