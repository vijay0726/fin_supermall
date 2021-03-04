import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(content, payload) {
        return new Promise((resolve, reject) => {
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
                resolve('当前的商品数量+1')
                content.commit(ADD_COUNTER, oldProduct)

            } else {
                resolve('成功加入购物车')
                payload.count = 1
                content.commit(ADD_TO_CART, payload)

            }
        })
    }
}