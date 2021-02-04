import React from 'react'

function MenuItem({element}){
    const style = {
        element : {
            margin:'0 5px'
        }
    }

    return (
        <li className="Lobster" style={style.element}>{element.nameElem}</li>
    );
}

export default MenuItem