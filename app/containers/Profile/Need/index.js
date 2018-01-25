import React,{PureComponent} from 'react'
import { Table, Badge, Menu, Dropdown, Icon,Upload, message, Button, Tabs, Input,Cascader  } from 'antd';
import moment from 'moment';
import './styles.less';
import BTList from '../../../components/BTList'
const TabPane = Tabs.TabPane;

import BTAssetDetail from './subviews/BTAssetDetail'
import BTUploadAsset from './subviews/BTUploadAsset'
import BTHaveBought from "./subviews/BTHaveBought"
import BTMyAssetSet from "./subviews/BTMyAssetSet"

export default class BTProfileAsset extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="assetTagPage">
                <Tabs>
                    <TabPane tab="发布需求" key="1">
                        <BTUploadAsset/>
                    </TabPane>
                    <TabPane tab="已发布需求" key="2">
                        <BTAssetDetail/>
                    </TabPane>
                    <TabPane tab="已购买需求" key="3">
                        <BTHaveBought/>
                    </TabPane>

                    <TabPane tab="我的需求库" key="4">
                        <BTMyAssetSet/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}














