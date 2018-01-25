import React,{PureComponent} from 'react'
import Imgshow from '../bg.png'
export default class Map extends PureComponent{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <img src={require('../bg.png')} alt=""/>
        </div>
    }
}