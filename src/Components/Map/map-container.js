import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { getMaps } from './../../Common/data-transport'
import { Container, Row, Col } from 'react-bootstrap'
import  CreateMapComponent  from './create-map-component'

import * as actionTypes from './../../Store/action-types'

class MapContainer extends Component {

   

    
    componentDidMount() {

        this.props.onInitializeMapList(44);
      

    }

   

    render() {

      

        return (
        <Container>
            <Row>
                <Col>
                <h1>this is the map list page</h1>
                </Col>

            </Row>
            <Row>
                <Col>  { this.props.mapList.message}</Col>
                <Col>
                    <CreateMapComponent handleSubmit={ this.props.onCreateMap} />
                </Col>
            </Row>
      
              
            
        
        
        </Container>)
    }

}



const mapStateToProps = state => {
    return {
        mapList: state.mapList
    }
}



const mapDispatchToProps = dispatch => {
    return {
                onCreateMap: ( map ) => dispatch( { type: actionTypes.CREATE_MAP_ASYNC, mapObject: map } ),
                onInitializeMapList: ( ) => dispatch( { type: actionTypes.GET_MAPS_ASYNC, memberId: 44 })

    }

}

export default connect( mapStateToProps, mapDispatchToProps)( MapContainer )

