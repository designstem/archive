fetch('README.md')
    .then(data => data.text())
    .then(data => {
        document.querySelector('#app').innerHTML = marked(data, {breaks: true})
    })
