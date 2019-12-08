var data = new FormData();
data.append('name', 'cedric');
data.append('time', 3000);
data.append('password', 'cece')
data.append('difficulty', 13)

fetch('test.php', {
    method: 'post',
    body: data
}).then(e => {
    console.log(e)
})