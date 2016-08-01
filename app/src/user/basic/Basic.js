import React, {Component} from 'react'

import ViewContainer from '../../common/ViewContainer'
import {BtnO} from '../../../component/Btn'

export default class Basic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disableRight: false
        }
        // this.disableRight = this.disableRight.bind(this)
    }
    disableRight() {
        this.setState({disableRight: true})
    }
    render() {
        return (
            <ViewContainer>
                <BtnO style={[{backgroundColor: 'red'}]} tstyle={{color: 'white'}} disabled={this.state.disableRight} onPress={this.disableRight.bind(this)}>
                    Right
                </BtnO>
                <BtnO tstyle={{color: 'white'}}>
                    Done
                </BtnO>
            </ViewContainer>
        )
    }
}
