import React from 'react'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { IUserCard } from './UserCardContainer'

const UserCard: React.FC<IUserCard> = ({ image, handleDeleteImage }) => {

    const userName = useTypedSelector(state => state.userData.userName)

    return (
        <div className='col s12 m6 l4 xl3 row'>
            <div className="card Small">
                <div className="card-image waves-effect waves-block waves-light px1">
                    <img className="activator" src={image.imageURL} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{image.userName}<i className="material-icons right">more_vert</i></span>
                    <div className="flexJustifi">
                        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                            <i className="material-icons mr">thumb_up</i>
                            {image.likes}
                        </div>
                        {userName == image.userName &&
                            <a className={'waves-effect waves-light btn-small #e53935 red darken-1'}
                                onClick={handleDeleteImage}
                            >
                                Detete
                            </a>
                        }
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Title: {image.title}<i className="material-icons right">close</i></span>
                    <p>Description: {image.description}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard
