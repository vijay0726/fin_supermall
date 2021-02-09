import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'
//mutations唯一的目的就是修改state中状态
//mutation中的每个方法尽可能完成的事件比较单一一点
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    }
}