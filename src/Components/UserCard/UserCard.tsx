import React from 'react'
import { IUserCard } from './UserCardContainer'

const UserCard: React.FC<IUserCard> = ({user}) => {

    return (
        <div className="card Medium w260">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={user.picURL} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{user.userName}<i className="material-icons right">more_vert</i></span>
                <p><a href="#">Likes: {user.likes}</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Title: {user.title}<i className="material-icons right">close</i></span>
                <p>Description: {user.description}</p>
            </div>
        </div>
    )
}

export default UserCard
