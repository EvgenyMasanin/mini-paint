import React from 'react'
import UserCard from './UserCard'
import { IUserDrawing } from '../../Redux/UserDrawings/userDrawingsActions'
import { useDispatch } from 'react-redux'
import { deleteImage } from '../../Redux/UserData/userDataActions'

export interface IUserCard {
    image: IUserDrawing,
    handleDeleteImage?: () => void
}

const UserCardContainer: React.FC<IUserCard> = props => {
    const dispatch = useDispatch()

    const handleDeleteImage = () => {
        dispatch(deleteImage(props.image.id))
    }

    return (
        <UserCard image={props.image} handleDeleteImage={handleDeleteImage}/>
    )
}
export default UserCardContainer
