### 页面强制刷新

**应用场景**

多Tab页面的应用，使用`keep-alive`来对页面进行缓存，此时用户需要强制刷新当前Tab页面，同时要保证其它Tab页面不受影响，仍然保存原来的Cache状态。

**解决方案**

原来的`keep-alive`使用了一个`cachedViews`数组来保存需要缓存的页面组件，因此需要首先将当前页面从这个数组中删除，然后还需要增加一个state属性用来控制`router-view`的显示，从而实现当前Tab页面的刷新。

**示例代码**

首先看state文件，增加了`isRouterAlive`属性，并增加了三个方法来实现对`cachedViews`和`isRouterAlive`的修改。

```javascript
const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: [],
    isRouterAlive: true
  },
  mutations: {
    SET_ROUTER_ALIVE: (state, val) => {
      state.isRouterAlive = val
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.some(v => v.name === view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    DEL_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.indexOf(view.name) < 0) return
      state.cachedViews.splice(state.cachedViews.indexOf(view.name), 1)
    },
    ...
  }
}
```

然后在`Layout.vue`中使用`isRouterAlive`属性来控制`router-view`的显示。

```html
<keep-alive :include="cachedViews">
    <router-view v-if="isRouterAlive"></router-view>
</keep-alive>
```

最后在`TagsView`文件中实现刷新当前Tag的方法。

```javascript
refreshSelectedTag(view) {
    this.$store.dispatch("delCachedView", view).then(() => {
    this.$store.dispatch("setRouterAlive", false).then(() => {
        this.$nextTick(function () {
        this.$store.dispatch("setRouterAlive", true).then(() => {
            this.$store.dispatch("addCachedView", this.$route);
        });
        });
    });
    });
},
```

**注意：** `addCachedView`中使用的参数是`this.$route`对象，而不是`view`对象，是因为`view`对象中没有包含`meta`属性，而对于当前Tab页面来说，这两个对象是一致的。