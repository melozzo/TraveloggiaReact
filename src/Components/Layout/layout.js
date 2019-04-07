import React,{Component, Fragment} from 'react';
import { Container } from 'react-bootstrap'
import { Route } from 'react-router-dom';
import Navigation from './../Nav/nav'
import  Site  from './../Site/site';
import { Photo } from './../Photo/photo';
import { Map } from './../Map/map';

export class Layout extends Component {


    render() {
    return (
        <Fragment>
                <Container fluid="true">
                    <Navigation />
                </Container>
        
                <Container fluid="true">
                     <Route path="/Photo" component={Photo}></Route>
                     <Route path="/Site" component={Site}></Route>
                     <Route path="/Map" component={Map}></Route>
                </Container>
        </Fragment> 
    )
    }

}

