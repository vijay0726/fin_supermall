import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(content, payload) {
        //payload新添加的商品
        let oldProduct = null
        for (let item of content.state.cartList) {
            if (item.iid === payload.iid) {
                oldProduct = item
            }
        }
        //或者 let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)
        //2.判断oldProduct
        if (oldProduct) {
            content.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
            content.commit(ADD_TO_CART, payload)
        }
    }
}