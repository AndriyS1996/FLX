
import React, { Component } from 'react';

export default class WidgetComponent extends Component {
    constructor(props){
        super(props);
     }
     render(){
         return(
             <div className='widget'>
                <div className='buttons'>
                    <button className='previous'><i class="material-icons">skip_previous</i></button>
                    <button className='play-pause'><i className="material-icons">play_arrow</i></button>
                    <button className='next'><i class="material-icons">skip_next</i></button>
                </div>
             </div>
         )
     }
}