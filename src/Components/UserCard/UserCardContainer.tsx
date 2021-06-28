import React from 'react'
import UserCard from './UserCard'
import { UserDataType } from '../Types/Types'

export interface IUserCard {
    user: UserDataType
}

const UserCardContainer: React.FC<IUserCard> = props => {

    return (
        <UserCard user={props.user} />
    )
}
export default UserCardContainer
