import React, {Component} from 'react'

import ViewContainer from '../../common/ViewContainer'
import Btn from '../../../component/Btn'

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
                <Btn style={[{backgroundColor: 'red'}]} disabled={this.state.disableRight} onPress={this.disableRight.bind(this)}>
                    Right
                </Btn>
                <Btn>
                    Done
                </Btn>
            </ViewContainer>
        )
    }
}
