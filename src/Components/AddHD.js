import React from "react";

class AddHD extends React.Component {
    state = {
        foods: this.props
    }
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);

    }
    getKey() {
        return this.keyCount++;
    }
    handleClickAdd = () => {
        this.props.addHD({
            id: this.getKey(),
            mon: ['Pizza', 'hamburger', 'chicken'][Math.floor(Math.random() * 3)],
            gia: [20, 30, 50, 200][Math.floor(Math.random() * 4)]
        })

    }
    render() {

        return (
            <div className="btn-add">
                <button onClick={() => this.handleClickAdd()}>ADD FOOD</button>
            </div>
        )
    }
}

export default AddHD;