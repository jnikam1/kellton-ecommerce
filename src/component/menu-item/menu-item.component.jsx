import './menu-item.style.scss'
import {withRouter} from 'react-router-dom'


function MenuItem({title,imageUrl,linkUrl,history,match}){
    return(
        <div className='menu-item' onClick={()=>history.push(`/shop/${linkUrl}`)}>
            <div className='background-image large' style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>
                    {title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    SHOP NOW
                </span>
            </div>

        </div>
    )
}

export default withRouter(MenuItem);
