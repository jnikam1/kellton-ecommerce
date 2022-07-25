import './menu-item.style.scss'

function MenuItem({section}){
    return(
        <div className='menu-item'>
            <div className='background-image large' style={{backgroundImage:`url(${section.imageUrl})`}}/>
            <div className='content'>
                <h1 className='title'>
                    {section.title.toUpperCase()}
                </h1>
                <span className='subtitle'>
                    SHOP NOW
                </span>
            </div>

        </div>
    )
}

export default MenuItem;
