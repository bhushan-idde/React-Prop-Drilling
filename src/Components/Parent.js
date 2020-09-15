import React, { Component } from 'react';
import Child from './Child';
import ParentImage from '../Images/Amitabh-Bachchan.webp';

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ParentText: 'Hide Parent Image',
            ChildText: 'Hide Child Image',
            GrandChildText: 'Hide Grand Child Image',
            showChildImage: true,
            showParentImage: true,
            showGrandChildImage: true
        };
    }

    childTextClick = () => {
        if (this.state.showChildImage) {
            this.setState({
                showChildImage: false
            });
            this.setState({
                ChildText: 'Show Child Image'
            });
        }
        if (!this.state.showChildImage) {
            this.setState({
                showChildImage: true
            });
            this.setState({
                ChildText: 'Hide Child Image'
            });
        }
    }

    grandChildTextClick = () => {
        if (this.state.showGrandChildImage) {
            this.setState({
                showGrandChildImage: false
            });
            this.setState({
                GrandChildText: 'Show Grand Child Image'
            });
        }
        if (!this.state.showGrandChildImage) {
            this.setState({
                showGrandChildImage: true
            });
            this.setState({
                GrandChildText: 'Hide Grand Child Image'
            });
        }
    }

    parentTextClick = () => {
        if (this.state.showParentImage) {
            this.setState({
                showParentImage: false
            });
            this.setState({
                ParentText: 'Show Parent Image'
            });
        }
        if (!this.state.showParentImage) {
            this.setState({
                showParentImage: true
            });
            this.setState({
                ParentText: 'Hide Parent Image'
            });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="p-2 jumbotron jumbotron-fluid">
                        <div className="container text-center">
                            <h1 className="display-6">Props Drilling</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card card-size text-center">
                                <div className="card-header h5">
                                    Parent
                                </div>
                                <div className="card-body">
                                    {
                                        this.state.showParentImage ?
                                            <img id="parentImage" className="card-img mb-2" img src={ParentImage}></img>
                                            : null
                                    }
                                    <button onClick={() => this.childTextClick()} className="btn btn-secondary card-size mb-2" >
                                        {this.state.ChildText}
                                    </button>
                                    <button onClick={() => this.grandChildTextClick()} className="btn btn-secondary card-size mb-2" >{this.state.GrandChildText}</button>
                                </div>
                            </div>
                        </div>
                        <Child
                            ParentText={this.state.ParentText}
                            ChildText={this.state.ChildText}
                            GrandChildText={this.state.GrandChildText}
                            showChildImage={this.state.showChildImage}
                            showParentImage={this.state.showParentImage}
                            showGrandChildImage={this.state.showGrandChildImage}
                            childTextClick={() => this.childTextClick()}
                            grandChildTextClick={() => this.grandChildTextClick()}
                            parentTextClick={() => this.parentTextClick()}
                        >
                        </Child>
                    </div>
                </div>
            </div>
        )
    }
}
