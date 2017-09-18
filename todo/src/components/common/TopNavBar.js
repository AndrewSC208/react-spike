import React from 'react';
// elements:
import AppBar from 'material-ui';
import IconButton from 'material-ui';
import Dehaze from 'react-material-icons/icons/image/Dehaze';

// export default class TopNavBar extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <AppBar
//                 title={title}
//                 iconElementLeft={<IconButton onClick={this.props.onClick}><Dehaze/></IconButton>}/>
//         )
//     }
// }

const TopNavBar = ({
    title,

}) => (
    <AppBar
        title={title}
        iconElementLeft={<IconButton onClick={onClick}><Dehaze/></IconButton>}/>
)
