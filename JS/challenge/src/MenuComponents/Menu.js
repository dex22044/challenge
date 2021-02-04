import React from 'react'
import MenuItem from './MenuItem';

export default function(){
    let elements = [
        {id:0,nameElem:'Основной'},
        {id:1,nameElem:'Дополнительно'},
        {id:2,nameElem:'О нас'},
        {id:3,nameElem:'Доки'}
    ]

    const style = {
        menuStyle: {
            listStyleType:'none',
            display: 'flex',
            flexDirection:'row',
            marginRight: '20px',
            color: 'white',
            fontSize:'1.5em'
        }
    }

    return (
        <ul style={style.menuStyle}>
            {
                elements.map(elem => {
                    return <MenuItem element={elem}/>
                })
            }
        </ul>
    );
}