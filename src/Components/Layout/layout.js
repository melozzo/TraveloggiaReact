import React,{Component} from 'react';
import { Route } from 'react-router-dom';
import { Site } from './../Site/site';
import { Photo } from './../Photo/photo';
import { Map } from './../Map/map';

export class Layout extends Component {


    render() {
    return (

        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
{/*  burger button  */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/Map">Map<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Site">Info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Photo">Photos</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                    </ul>
                
                </div>
                </nav>
                <div className="container-fluid">
                     <Route path="/Photo" component={Photo}></Route>
                     <Route path="/Site" component={Site}></Route>
                     <Route path="/Map" component={Map}></Route>
                </div>
        </div>
    )
    }

}

