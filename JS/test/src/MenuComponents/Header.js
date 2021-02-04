import React from 'react'
import styles from './Header.css'
import Menu from './Menu'

function Header(){
    const style = {
        header : {
            width : '90%',
            margin : '0 auto',
            backgroundColor: '#808080',
            minHeight: '100px',

            marginTop: '100px',
            borderRadius: '5px',

            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
        }
    }

    return (
        <div style={style.header}>
            <span className='logo'>
                Лого
            </span>
            <Menu/>
        </div>
    );
}

export default Header;