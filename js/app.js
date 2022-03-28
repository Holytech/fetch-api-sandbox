const getText =()=>{
    fetch('samp.txt')
    .then((res)=>{
        return res.text();
    })
    .then((data)=>{
        document.getElementById('output').innerHTML = data;
        document.getElementById('output').style.visibility="visible";
    })
}

const getUsers =()=>{
    fetch('user.json')
    .then((res)=> res.json())
    .then((data)=>{
        let output = '<h2 clas="mb-4">Users</h2>';
        data.forEach((user) => {
            output+= `
                <ul class="list-group mb-4">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
        document.getElementById('output').style.visibility="visible";
    })
}

const getPosts =() =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2 clas="mb-4">Posts</h2>';
        data.forEach((post) => {
            output+= `
            <div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

const addPost =(e) =>{
    e.preventDefault();

    let title = document.getElementById('postTitle').value;
    let body = document.getElementById('postBody').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}

document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);