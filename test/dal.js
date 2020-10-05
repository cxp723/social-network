let getImages = (page) => {
    let promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);
    return promise.then((response) => {
        return response.data;
    })
}
let createTask = (title) => {
    let promise = axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=6355&title=${title}`);
    return promise.then((response) => {
        console.log(response);
        return response.data.task.title;
    })
}
let getTasks = () => {
    let promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=6355`);
    return promise.then((response) => {
        console.log(response);
        return response.data;
    })
}