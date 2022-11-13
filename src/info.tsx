// 讲数据处理为适合前端显示的格式
function processGraphData(data: any) {

    let nodes = data.nodes = data.node
    let edges = data.edges = data.edge


    nodes.forEach((node: any) => {
        node.id = node.id.toString()
        if (node.rdfs__label) {
            node.label = node.rdfs__label
        } else if (node.ns1__SWO_0000425) {
            node.label = node.ns1__SWO_0000425
        } else {
            node.label = node.uri
        }
    });

    edges.forEach((edge: any) => {
        edge.source = edge.source.toString()
        edge.target = edge.target.toString()

        edge.label = edge.edgeType
    });
    console.log(data)

    return data
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
            {
                label: '获取节点网络',
                name: 'getConnection',
                url: '/basic/getConnection',
                text: '获得某种蛋白质的相互作用网络',
                paras: [
                    {
                        label: '值',
                        name: 'value',
                        required: true,
                        placeholder: 'ARF5',
                    },
                ],
                type: 'graph',
                processData: (data: any) => {
                    return processGraphData(data)
                },
            },
            {
                label: '数据统计',
                name: 'getOverview',
                url: '/basic/getOverview',
                text: '快速了解存在什么样的节点，报告每个节点的属性和关系数量，获得数据统计结果',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = data
                    let key = 1
                    dataSource.forEach((e: any) => {
                        e.key = key
                        key += 1
                    })
                    
                    const columns = [
                        {
                            title: '类型',
                            dataIndex: 'labels(n)',
                            key: 'labels(n)',
                        },
                        {
                            title: '数量',
                            dataIndex: 'SampleSize',
                            key: 'SampleSize',
                        },
                        {
                            title: '属性数量',
                            dataIndex: 'PropertyCount',
                            key: 'PropertyCount',
                        },
                        {
                            title: '最少关系数量',
                            dataIndex: 'Min_RelationshipCount',
                            key: 'Min_RelationshipCount',
                        },
                        {
                            title: '平均关系数量',
                            dataIndex: 'Avg_RelationshipCount',
                            key: 'Avg_RelationshipCount',
                        },
                        {
                            title: '最多关系数量',
                            dataIndex: 'Max_RelationshipCount',
                            key: 'Max_RelationshipCount',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
            {
                label: '源关联最高蛋白top5',
                name: 'getSourceTop5',
                url: '/basic/getSourceTop5',
                text: '对源关联关系进行匹配，返回源关联关系最多的五个节点',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = []
                    data.forEach((e: any) => {
                        let row: any = e.node
                        row.total = e.total
                        row.key = row.id
                        dataSource.push(row)
                    });
                    const columns = [
                        {
                            title: '名称',
                            dataIndex: 'rdfs__label',
                            key: 'rdfs__label',
                        },
                        {
                            title: '总数',
                            dataIndex: 'total',
                            key: 'total',
                        },
                        {
                            title: '类型',
                            dataIndex: 'label',
                            key: 'label',
                        },
                        {
                            title: 'URI',
                            dataIndex: 'uri',
                            key: 'uri',
                        },
                        {
                            title: '说明',
                            dataIndex: 'rdfs__comment',
                            key: 'rdfs__comment',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
            {
                label: '靶关联最高蛋白top5',
                name: 'getTargetTop5',
                url: '/basic/getTargetTop5',
                text: '对靶关联关系进行匹配，返回靶关联关系最多的五个节点',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = []
                    data.forEach((e: any) => {
                        let row: any = e.node
                        row.total = e.total
                        row.key = row.id
                        dataSource.push(row)
                    });
                    const columns = [
                        {
                            title: '名称',
                            dataIndex: 'rdfs__label',
                            key: 'rdfs__label',
                        },
                        {
                            title: '总数',
                            dataIndex: 'total',
                            key: 'total',
                        },
                        {
                            title: '类型',
                            dataIndex: 'label',
                            key: 'label',
                        },
                        {
                            title: 'URI',
                            dataIndex: 'uri',
                            key: 'uri',
                        },
                        {
                            title: '备注',
                            dataIndex: 'rdfs__comment',
                            key: 'rdfs__comment',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
        ]
    },
    {
        label: '高级查询',
        name: 'advanced search',
        items: [
            {
                label: '度中心算法',
                name: 'getDegreeCentrality',
                url: '/advanced/getDegreeCentrality',
                text: '对mygraph中的节点的度进行计算，返回中心度最高的五个节点',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = data
                    let key = 1
                    dataSource.forEach((e: any) => {
                        e.key = key
                        key += 1
                    })
                    
                    const columns = [
                        {
                            title: '蛋白质',
                            dataIndex: 'ProteinName',
                            key: 'ProteinName',
                        },
                        {
                            title: '数量',
                            dataIndex: 'number',
                            key: 'number',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
            {
                label: 'dfs算法',
                name: 'getDfs',
                url: '/advanced/getDfs',
                text: '使用dfs算法计算两个节点的最短路径',
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
                label: 'Dijkstra算法',
                name: 'getDijkstra',
                url: '/advanced/getDijkstra',
                text: '使用Dijkstra最短路径算法计算两个节点的最短路径',
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
                label: '快速随机投影算法',
                name: 'getFastRP',
                url: '/advanced/getFastRP',
                text: '使用fastRP对所有节点进行十六维的近似度投影，只展示5个',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = data
                    let key = 1
                    dataSource.forEach((e: any) => {
                        e.key = key
                        key += 1
                    })
                    
                    const columns = [
                        {
                            title: '蛋白质',
                            dataIndex: 'n.rdfs__label',
                            key: 'n.rdfs__label',
                        },
                        {
                            title: 'ID',
                            dataIndex: 'id(n)',
                            key: 'id(n)',
                        },
                        {
                            title: 'embedding',
                            dataIndex: 'embedding',
                            key: 'embedding',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
            {
                label: 'pagerank算法',
                name: 'getPageRank',
                url: '/advanced/getPageRank',
                text: '使用PageRank 算法对所有节点影响力排序，取前五展示',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = data
                    let key = 1
                    dataSource.forEach((e: any) => {
                        e.key = key
                        key += 1
                    })
                    
                    const columns = [
                        {
                            title: '蛋白质',
                            dataIndex: 'ProteinName',
                            key: 'ProteinName',
                        },
                        {
                            title: '影响力',
                            dataIndex: 'influence',
                            key: 'influence',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
            {
                label: '社区检测算法',
                name: 'getCommunity',
                url: '/advanced/getCommunity',
                text: '使用Louvain 算法评估节点组在图中的聚类或分区情况，随机返回五个节点以及所在的分区id',
                paras: [
                ],
                type: 'table',
                processData: (data: any) => {
                    let dataSource: any[] = data
                    let key = 1
                    dataSource.forEach((e: any) => {
                        e.key = key
                        key += 1
                    })
                    
                    const columns = [
                        {
                            title: '蛋白质',
                            dataIndex: 'rdfs_label',
                            key: 'rdfs_label',
                        },
                        {
                            title: '社区ID',
                            dataIndex: 'communityId',
                            key: 'communityId',
                        },
                    ];
                    return {
                        dataSource,
                        columns,
                    }
                },
            },
        ]
    },
]
