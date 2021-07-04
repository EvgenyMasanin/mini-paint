import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { getCurrentUserDrawings } from '../../Redux/UserData/userDataActions'
import UserCardContainer from '../UserCard/UserCardContainer'

const Profile = () => {

    const dispatch = useDispatch()
    const images = useTypedSelector(state => state.userData.images)

    useEffect(() => {
        dispatch(getCurrentUserDrawings())
    }, [])

    return (
        <div className="row flexGrow m0">
            <div className="col s12" ><h3>My drawings</h3></div>
            <div className="col s12 overflowY" style={{ maxHeight: 480 }}>

                {images.length === 0 ? <h4 className='center'>You haven't drawn anything yet.</h4> : images.map(image => (
                    <UserCardContainer key={image.id} image={image} />
                ))}
            </div>

        </div>
    )
}

export default Profile
