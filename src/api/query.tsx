

export function get(url: string, params: Object) {
    console.log(url)
    console.log(params)
    url = '/api' + url + '?'
    Object.entries(params).forEach(entry => {
        url += entry[0] + '=' + entry[1] + '&'
    })
    
    console.log(url)
    return fetch(
        // 'https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json',
        // '/api/test/getAllOwl',
        // '/api/basic/getNodeDetail?direction=1&label=owl__Class&prop=rdfs__label&relation=rdfs__subClassOf&value=ARF5',
        url,
        {
            // mode:'no-cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    ).then(res => {
        console.log(res.status)
        return res.json()

    }).then(res => {
        return res.data
    }).catch(err => {
        console.log(err)
    });
}