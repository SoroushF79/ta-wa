// Displays the json data

import React, {Component} from 'react';
import getData from './data';

class DataList extends Component{

    render() {
        var data = getData;
        var labels = [];
        var steps = [];

        function displayData(bulletin){
            labels = [];
            steps = [];
            for(let field in bulletin){
                if (typeof bulletin[field] === 'string'){
                    labels.push(bulletin[field]);
                }
                else{
                    for(let step in bulletin[field]){
                        console.log(typeof bulletin[field][step]);
                    }
                }
            }
            console.log(labels);
        }

        const w = Object.keys(data).map(function(bulletin, index){
            return(<button onClick={()=> displayData(data[bulletin])}>{bulletin}</button>);
        })

        return(
            <div>
                <ul>
                    {w}       
                </ul>
            </div>
        );
    }
}

export default DataList