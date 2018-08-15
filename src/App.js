import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './root.css';

import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <div className="wrapper">
                        <Header />
                        <Layout>
                            <Breadcrumb />
                        </Layout>
                    </div>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
