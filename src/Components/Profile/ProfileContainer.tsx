import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { getCurrentUserDrawings } from '../../Redux/UserData/userDataActions'
import Profile from './Profile'
import UserCardContainer from '../UserCard/UserCardContainer'

const ProfileContainer = () => {

    const dispatch = useDispatch()
    const images = useTypedSelector(state => state.userData.images)

    useEffect(() => {
        dispatch(getCurrentUserDrawings())
    }, [])

    return (
        <Profile >
            {images.length === 0 ? <h4 className='center'>You haven't drawn anything yet.</h4> : images.map(image => (
                <UserCardContainer key={image.id} image={image} />
            ))}
        </Profile>
    )
}

export default ProfileContainer
