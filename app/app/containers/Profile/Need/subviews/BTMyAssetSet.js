import React,{PureComponent} from 'react'
import {Table, Upload, Icon, message} from 'antd';

const Dragger = Upload.Dragger;

const props = {
    name: 'file',
    multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const columns = [
    { title: 'FileName', dataIndex: 'fileName', key: 'fileName' },
    { title: 'FileSize', dataIndex: 'fileSize', key: 'fileSize' },
    { title: 'Action', dataIndex: '', key: 'x', render: () =>
            <ul>
                <a href="#">DownLoad </a>
                <a href="#">Edit </a>
                <a href="#">Delete</a>
            </ul>,
    },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    {title:'Status',dataIndex:'status',key:'status'}
];

const data = [];
for (let i = 0; i < 5; ++i) {
    data.push({
        key: i,
        fileName:"pandas.zip",
        fileSize:"123M",
        date: '2018-01-15 23:12:00',
        status:'过期'
    });
}

export default class BTMyAssetSet extends PureComponent{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                </Dragger>
                    <Table
                        className="components-table-demo-nested"

                        columns={columns}
                        dataSource={data}
                    />
            </div>
        )
    }
}



