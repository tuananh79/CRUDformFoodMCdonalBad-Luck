import React from 'react';
import { toast } from 'react-toastify';
import './deleteC.scss';
class Delete extends React.Component {

    state = {}

    handleOnClickDl = (fd) => {
        this.props.deleteHD(fd)

    }
    handlePluss = () => {
        toast.error(`Đang cập nhập!`)
    }
    render() {
        let { foods } = this.props;
        console.log(`check props`, foods)
        return (
            <div className="btn-dl">
                {foods.map((item, index) => {
                    return (<>
                        <div className="list">
                            <div className="mon" key={item}>
                                {index + 1} - {item.mon}

                            </div>
                            <div className="pluss" key={item}>
                                <button className="cong" onClick={() => this.handlePluss()}>-</button>
                                <input type="number" value="1" />
                                <button className="tru" onClick={() => this.handlePluss()}>+</button>
                            </div>
                            <div className="gia" key={item}>
                                $ {item.gia}
                            </div>
                            <div className="title" key={item.id}>
                                <button onClick={() => this.handleOnClickDl(item)}>X</button>

                            </div>

                        </div>

                    </>)
                })

                }
                <div className="line1"></div>
            </div>
        )
    }
}
export default Delete;