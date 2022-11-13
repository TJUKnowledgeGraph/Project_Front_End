

export function get(url: string, params: Object) {
    console.log(url)
    console.log(params)
    url = '/api' + url + '?'
    Object.entries(params).forEach(entry => {
        if (entry[1] === undefined) {
            entry[1] = ''
        }
        url += entry[0] + '=' + entry[1] + '&'
    })
    
    console.log(url)
    return fetch(
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