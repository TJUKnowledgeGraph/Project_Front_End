// 讲数据处理为适合前端显示的格式
function processGraphData(data: any) {

    let nodes = data.nodes = data.node
    let edges = data.edges = data.edge


    nodes.forEach((node: any) => {
        node.id = node.id.toString()
    });

    edges.forEach((edge: any) => {
        edge.source = edge.source.toString()
        edge.target = edge.target.toString()
    });

    return data
}

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

function processTableData(data: any) {
    console.log(data)
    return {
        dataSource: dataSource,
        columns: columns,
    }
}

// 查询的相关配置
export const Info: any = [
    {
        label: '基础查询',
        name: 'basic search',
        items: [
            {
                label: '获取节点详情',
                name: 'getNodeDetail',
                url: '/basic/getNodeDetail',
                text: '按属性值查找节点，返回节点，关联边和关联节点',
                paras: [
                    {
                        label: '类型',
                        name: 'label',
                        required: true,
                        placeholder: 'owl__Class',
                    },
                    {
                        label: '属性',
                        name: 'prop',
                        required: true,
                        placeholder: 'rdfs__label',
                    },
                    {
                        label: '值',
                        name: 'value',
                        required: true,
                        placeholder: 'ARF5',
                    },
                    {
                        label: '关系',
                        name: 'relation',
                        required: false,
                        placeholder: 'rdfs__subClassOf',
                    },
                    {
                        label: '方向',
                        name: 'direction',
                        required: true,
                        placeholder: '1',
                    },
                ],
                type: 'graph',
                processData: (data: any) => {
                    return processGraphData(data)
                },
            },
        ]
    },
    {
        label: '高级查询',
        name: 'advanced search',
        items: [
            {
                label: 'dfs算法',
                name: 'getDfs',
                url: '/advanced/getDfs',
                text: 'dfs算法',
                paras: [
                    {
                        label: '节点一',
                        name: 'rdfs1',
                        required: true,
                        placeholder: 'ARF5',
                    },
                    {
                        label: '节点二',
                        name: 'rdfs2',
                        required: true,
                        placeholder: 'NEK4',
                    },
                ],
                type: 'graph',
                processData: (data: any) => {
                    return processGraphData(data)
                },
            },
            {
                label: '度中心算法',
                name: 'getDegreeCentrality',
                url: '/advanced/getDegreeCentrality',
                text: '度中心算法',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    return processTableData(data)
                },
            },
        ]
    },
]
