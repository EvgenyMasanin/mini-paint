import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { getCurrentUserDrawings } from '../../Redux/UserData/userDataActions'
import { UserDataType } from '../Types/Types'
import UserCardContainer from '../UserCard/UserCardContainer'

const Profile = () => {

    const dispatch = useDispatch()
    const images = useTypedSelector(state => state.userData.images)

    useEffect(() => {
        dispatch(getCurrentUserDrawings())
    }, [])

    return (
        <div className="row flexGrow">
            <div className="col s12" ><h3>My drawings</h3></div>
            <div className="col s12 overflowY" style={{maxHeight: 480}}>

                {images.map(image => (
                    <UserCardContainer key={image.id} image={image} />
                ))}
            </div>

        </div>
    )
}

export default Profile
