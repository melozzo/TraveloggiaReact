import React, { Component } from 'react';
import { getMaps } from './../../Common/data-transport'


export class Map extends Component {

    state = {
        mapList: {message: 'dont be null'}
    }

    componentDidMount() {
        getMaps(44)
        .then( result => {
            this.setState({ mapList: result.data })
        })
      

    }


    render() {

      

        return (
        <div className="container-fluid">
        <h1>this is the map list page</h1>
                { this.state.mapList.message}
            
        
        
        </div>)
    }

}

