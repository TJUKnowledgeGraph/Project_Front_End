import React from 'react';
import G6 from '@antv/g6';

const color_set = ["#dd6b66",
    "#759aa0",
    "#e69d87",
    "#8dc1a9",
    "#ea7e53",
    "#eedd78",
    "#73a373",
    "#73b9bc",
    "#7289ab",
    "#91ca8c",
    "#f49f42"
]

function changeStyle(data: any) {
    const nodes = data.nodes;
    nodes.forEach((node: any) => {

        if (!node.style) {
            node.style = {};
        }
        node.style = {
            fill: color_set[node.id % color_set.length],
            stroke: '',
        };
    });
}

interface Props {
    data: {
        nodes: {
            id: string,
            label: string
        }[],
        edges: {
            source: string,
            target: string,
            label: string,
        }[],
    }
}

interface State {
}

class Graph extends React.Component<Props, State> {
    ref: any = React.createRef()
    graph: any = null		// 给 graph 设置一个any类型 解决 new G6.Graph 时赋值问题

    componentDidMount(){
        this.graph = new G6.Graph({
            container: this.ref.current, // 指定挂载容器
            width: 1500,
            height: 600,
            modes: {
                default: ['drag-node', 'node-activate'],
            },
            layout: {
                type: 'force',
                center: [700, 300],
                preventOverlap: true,
                linkDistance: 180,
            },

            defaultNode: {
                size: 35,
                style: {
                    lineWidth: 2,
                    fill: '',
                    stroke: '',
                },
                label: 'node-label',
                labelCfg: {
                    position: 'top',
                    style: {
                        fill: '#000',
                    },
                }

            },
            defaultEdge: {
                size: 2,
                color: '#aaa',
                label: 'node-label',
                labelCfg: {
                    style: {
                        fill: '#000',
                        stroke: '',
                    },
                },
            }
        });
        changeStyle(this.props.data)
        this.graph.data(this.props.data);
        this.graph.render();
    }
    render() {
        return (
            <div ref={this.ref}>
            </div>
        );
    }

}


export default Graph;