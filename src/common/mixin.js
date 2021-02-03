/*
import { debounce } from './utils'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let refresh = debounce(this.$refs.scroll.refresh, 200);
        //监听全局事件
        this.itemImgListener = () => {
            refresh();
        };
        this.$bus.$on("itemImgLoad", this.itemImgListener);
        console.log("我是混入中的内容")
    },
}
*/
