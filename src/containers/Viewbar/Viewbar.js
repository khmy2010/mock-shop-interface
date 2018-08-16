import React, { Component } from 'react';

import './Viewbar.css';
import GridIcon from '../../components/ViewIcons/Grid';
import ListIcon from '../../components/ViewIcons/List';

class ViewBar extends Component {
    state = {
        gridView: true,
        listView: false
    };

    handleViewChange = view => {
        if (view === 'gridview' && !this.state.gridView) {
            this.setState({
                gridView: true,
                listView: false
            });
            return;
        }

        if (view === 'listview' && !this.state.listView) {
            this.setState({
                gridView: false,
                listView: true
            });
            return;
        }
    };

    render() {
        return (
            <div className="viewbar">
                <div className="viewbar-icons">
                    <GridIcon
                        active={this.state.gridView}
                        clicked={() => this.handleViewChange('gridview')}
                    />
                    <ListIcon
                        active={this.state.listView}
                        clicked={() => this.handleViewChange('listview')}
                    />
                </div>
                <div className="viewbar-actions">
                    <button>
                        Compare (0) <span className="icon-bold">&gt;</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default ViewBar;
