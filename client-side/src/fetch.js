export function fetchHandler(url="", set="", method="GET"){
    fetch(`http://localhost:9292/${url}`,{
        method: method
    })
        .then((r) => r.json())
        .then(data => set(data))
}
export function updateHandler(url="", set="", method, add="",state){
        fetch(`http://localhost:9292/${url}`, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
         body: JSON.stringify(add),
        })
        .then((r) => r.json())
        .then((data) => {
            set(data)
            state(false)
        })
}