import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "FSD OCBC Batch 2!!!",
            counter: 0
        }
    }

    // changeName = () => {
    //     this.setState({
    //         name: 'FSD OCBC Materi React!!!'
    //     })
    // }

    changeName = (newName) => {
        this.setState({
            name: this.state.name + newName
        })
    }

    changeCount = type => {
        const oldCounter = this.state.counter

        // Ternary operator => periksa kondisi
        // format: [kondisi] ? [hasil jika true] : [hasil jika false]
        switch(type) {
            case 'increment':
                this.setState({
                    // format: [kondisi] ? [hasil jika true] : [hasil jika false]
                    counter: oldCounter > 10 ? 0 : oldCounter + 1
                })
                break
            case 'decrement':
                this.setState({
                    counter: oldCounter + 1
                })
                break
            default:
        }
    }

    render() {
        // <> => React Fragment: tidak perlu adanya tag <div> baru
        // pemulisan atribut pada jsx
        // "" => datanya statis (ala kadarnya)
        // {} => datanya dinamis
        return (
            <> 
            <h1>Batch {this.props.batch}</h1>
            <img src={this.props.logo} alt="logo" />

                <h2>Hallo kelas {this.state.name}</h2>
                <button onClick={() => this.changeName('FSD OCBC Batch 2 di React!!!!!')}> Ganti nama! </button>
                {/* <button onClick={this.changeName}>Ganti nama!</button> */}

                <hr />

                <h4>Let's count!</h4>

                <h5>{this.state.counter}</h5>

                <button onClick={() => this.changeCount('increment')}>Tambahkan 1</button>
                <button onClick={() => this.changeCount('decrement')}>Kurangkan 1</button>
            </>
        )
    }
}

Header.propTypes = {
    batch: PropTypes.string,
    logo: PropTypes.string
}

export default Header
