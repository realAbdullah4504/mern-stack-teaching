import React from 'react'

const ReactElements = () => {
    const reactElement = React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'React Element'),
        React.createElement('p', null, 'This is a react element')
    )
    return (
        <div>
            {reactElement}
        </div>
    )
}

export default ReactElements
