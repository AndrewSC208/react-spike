import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore';
// Pages:
import TodoPage from './TodoPage';
import RedditPage from './RedditPage';
// Components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dehaze from 'react-material-icons/icons/image/Dehaze';
import Apps from 'react-material-icons/icons/navigation/apps';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import {Card,
        CardHeader,
        CardMedia} from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';


const store = configureStore();

const containerStyles = {
    padding: '25px'
};

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Toolbar>
                                <ToolbarGroup firstChild={true}>
                                    <IconButton
                                        touch={true}>
                                        <Dehaze onClick={this.handleToggle}/>
                                    </IconButton>
                                </ToolbarGroup>

                                <ToolbarGroup>
                                    <ToolbarTitle text="Andrew Mei..." />
                                    <div>
                                        <Avatar src="https://avatars0.githubusercontent.com/u/5072917?v=4&s=460" />
                                    </div>

                                    <ToolbarSeparator />
                                    <IconMenu iconButtonElement={<IconButton touch={true}><Apps /></IconButton>}>
                                        <MenuItem>
                                            <Link to="/">Todo</Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Link to="/reddit">Reddit</Link>
                                        </MenuItem>
                                    </IconMenu>

                                </ToolbarGroup>
                            </Toolbar>

                            <Drawer open={this.state.open}>
                                <Card>
                                    <CardHeader
                                        title="Andrew Meiling"
                                        subtitle="Red Team"
                                    />

                                    <CardMedia>
                                        <img src="https://avatars0.githubusercontent.com/u/5072917?v=4&s=460" alt="" />
                                    </CardMedia>
                                </Card>
                                <List>
                                    <ListItem onClick={this.handleToggle} primaryText="Inbox" leftIcon={<ContentInbox />} />
                                    <ListItem onClick={this.handleToggle} primaryText="Starred" leftIcon={<ActionGrade />} />
                                    <ListItem onClick={this.handleToggle} primaryText="Sent mail" leftIcon={<ContentSend />} />
                                    <ListItem onClick={this.handleToggle} primaryText="Drafts" leftIcon={<ContentDrafts />} />
                                    <ListItem onClick={this.handleToggle} primaryText="Inbox" leftIcon={<ContentInbox />} />
                                </List>
                                <Divider/>
                            </Drawer>

                            <div style={containerStyles}>
                                <Route exact path="/" component={TodoPage}/>
                                <Route path="/reddit" component={RedditPage}/>
                            </div>
                        </div>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        )
    }
};

