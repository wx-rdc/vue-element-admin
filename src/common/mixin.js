export const commonMixin = {
    data() {
        return {
            _pageName: '',
            _scrollTop: 0,
        }
    },
    created() {
        this._pageName = this.$route.path
        this._scrollTop = 0
    },
    activated() {
        this._pageName = this.$route.path
        document.querySelector(".app-main").scrollTo(0, this._scrollTop);
    },
    deactivated() {
        this._scrollTop = document.querySelector(".app-main").scrollTop
    },
    methods: {
        scrollTop() {
            document.querySelector(".app-main").scrollTo(0, 0)
        }
    }
}