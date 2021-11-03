import React from "react";
import './HoaDon.scss'
import AddHD from "./AddHD";
import Delete from "./Delete";
import { toast } from "react-toastify";

class HoaDon extends React.Component {
    state = {
        foods: [{ id: ['a'], mon: ['pizza'], gia: 20 },
        { id: ['b'], mon: ['hamburger'], gia: 40 },
        { id: ['c'], mon: ['snack'], gia: 10 },
        ]
    }

    addHD = (fd) => {
        this.setState({
            // foods: this.state.foods.push(fd)
            foods: [...this.state.foods, fd]
        })
        toast.success(`Thêm thành công!`)
    }
    deleteHD = (fd) => {
        let currentDl = this.state.foods;
        currentDl = currentDl.filter(item => item.id !== fd.id);
        this.setState({
            foods: currentDl
        })
        toast.success(`Xóa thành công~`)
    }

    // toTal = (foods) => {

    //     let totalGia = foods.reduce((sum, food) => {
    //         return sum + food.gia;
    //     }, 0)
    // }
    handleOnClickCheckOut = () => {
        alert(`Bạn đã đặt thành công!`,
            this.state
        )
    }
    render() {
        let total = 0;
        let SHIPPING = 2;
        let { foods } = this.state;
        return (
            <>


                <div className="form">
                    <div className="head">

                    </div>
                    <div className="bba">
                        <div className="logo">
                        </div>
                    </div>
                    <div className="title">
                        <label>Your oder from McDonald's</label>
                    </div>


                    <Delete foods={this.state.foods}
                        deleteHD={this.deleteHD} />
                    <AddHD addHD={this.addHD} />

                    <div className="order-total">

                        <p>Subtotal<span className="money">
                            $ {this.state.foods.reduce((total, item) => {

                                return (
                                    total + item.gia
                                )

                            }, 0)}
                        </span></p>

                        <p>Shipping<span className="money">  $ {SHIPPING}</span></p>
                        <p>Total<span className="money">  $ {this.state.foods.reduce((total, item) => {

                            return (
                                total + item.gia
                            )

                        }, 2)} </span></p>

                    </div>

                    <button class="checkout" type="button" onClick={(event) => this.handleOnClickCheckOut(event)}>CHECKOUT</button>

                </div>
            </>
        )
    }
}
export default HoaDon;