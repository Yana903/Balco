import React from 'react';
import '../../App.css';
import classesCart from './Cart.module.css';
import LocalMall from "@material-ui/icons/LocalMall";
import Button from '@material-ui/core/Button';

const Cart = () => {
    return (
        <div className={classesCart.cardCart}>
            <div className={classesCart.cartBox}>
                <LocalMall style={{ fontSize: 50, marginLeft: "-5px" }}/>
                <div className={classesCart.cart}>
                    <p className={classesCart.cardTitle}>
                        Корзина
                    </p>
                    <div className={classesCart.num}>
                        <p>Товаров:</p><span>0</span>
                    </div>
                </div>
            </div>
            <Button variant="outlined" color="primary" fullWidth="true">
                Перейти
            </Button>
        </div>
    )
}

export default Cart;