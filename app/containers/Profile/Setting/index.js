import React,{PureComponent} from 'react'
import { Tabs, Input, Ico,Button,Select } from 'antd';
const TabPane = Tabs.TabPane;
import "../styles.less"

function callback(key) {
    console.log(key)
}

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class BTAccount extends PureComponent{
    constructor(props){
        super(props)

        // this.state = {
        //     address:''
        // }
    }

    render(){
        return(
                <Tabs defaultActiveKey="1" onChange={callback} className="TabsStyle" >
                    <TabPane tab="个人资料" key="1" style={{width:"100%"}}>
                        <div className="personalInformation">
                            <div>
                                <span>UserName:</span>
                                <Input defaultValue="Jack" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>realName:</span>
                                <span>Tom</span>
                            </div>
                            <div className="accountType">
                                <span>accountType:</span>
                                    <Select defaultValue="provider" onChange={handleChange}>
                                        <Option value="demandSide">Demand side</Option>
                                        <Option value="provider">Provider</Option>
                                        <Option value="both">both</Option>
                                    </Select>
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>phoneNumber:</span>
                                <Input defaultValue="13761234905" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>mailBox:</span>
                                <Input defaultValue="cnyuanjia@gmail.com" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>address:</span>
                                <Input defaultValue="" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div className="submit" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Button className="modifyButton">submit</Button>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="公司资料" key="2">
                        <div className="enterpriseInformation">
                            <div>
                                <span>UserName:</span>
                                <Input defaultValue="Jack" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>enterpriseName:</span>
                                <span>enterpriseName</span>
                            </div>
                            <div>
                                <span>accountType:</span>
                                <Select defaultValue="provider" onChange={handleChange}>
                                    <Option value="demandSide">Demand side</Option>
                                    <Option value="provider">Provider</Option>
                                    <Option value="both">both</Option>
                                </Select>
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>enterprisePhoneNumber:</span>
                                <Input defaultValue="888-888-888" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div >
                                <span>enterpriseMailBox:</span>
                                <Input defaultValue="cn@gmail.com" />
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>enterpriseAddress:</span>
                                {<Input defaultValue="google" /*onChange={(e)=>this.setState({address:e.target.value})}*/ />}
                                <Button className="modifyButton">modify</Button>
                            </div>
                            <div>
                                <span>组织机构代码:</span>
                                <span>000</span>
                            </div>
                            <div className="submit" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Button>submit</Button>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
        )
    }
}




