const riot = require('riot')
require('../components/sample-output.tag')
require('../components/todo.tag')
require('../styles/todo.css')


document.addEventListener('DOMContentLoaded', () => {
    riot.mount('sample-output')
    riot.mount('todo', {
        title: 'I want to behave!',
        items: [
            {title: 'Avoid excessive caffeine', done: true},
            {title: 'Hidden item', hidden: true},
            {title: 'Be less provocative'},
            {title: 'Be nice to people'}
        ]
    })
})