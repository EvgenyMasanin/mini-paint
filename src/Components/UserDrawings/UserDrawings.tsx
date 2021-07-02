import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { getUserDrawings } from '../../Redux/UserDrawings/userDrawingsActions'
import UserCardContainer from '../UserCard/UserCardContainer'
import { useCollection } from "react-firebase-hooks/firestore";
import { fireStore } from "../../Firebase/fireBase"
import { getCurrentUserDrawings } from '../../Redux/UserData/userDataActions'
import { useState } from 'react'
import { SearchFormRedux } from './SearchForm'

const UserDrawings = () => {

    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    let images = useTypedSelector(state => state.userDrawings.images)
    const [imagesToDisplay, setImagesToDisplay] = useState([] as typeof images)
    useEffect(() => {
        dispatch(getUserDrawings())
        dispatch(getCurrentUserDrawings())
    }, [])

    useEffect(() => {
        setImagesToDisplay(images)
    }, [images])

    useEffect(() => {
        if (!filter) {
            setImagesToDisplay(images)
        }
        else {
            setImagesToDisplay(images.filter((image) => image.userName.startsWith(filter)))
        }
    }, [filter])

    const [, loading] = useCollection(fireStore.collectionGroup("images"))

    interface ISearchFormFields {
        search: string
    }
    const onSubmit: any = (data: ISearchFormFields) => {
        setFilter(data.search)
    }

    const handleDiscard = () => {
        setFilter('')
    }

    return (
        <div className="row flexGrow m0">
            <div className="col m12 l2 px1">
                <SearchFormRedux onSubmit={onSubmit} handleDiscard={handleDiscard} />
            </div>
            {loading ?
                <div className="col s12 center">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-green-only">
                            <div className="circle-clipper left">
                                <div className="circle" />
                            </div>
                            <div className="gap-patch">
                                <div className="circle" />
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle" />
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="row col m12 l10 overflowY" >

                    {imagesToDisplay.length === 0 && filter ? <h3>User: {filter} does not has images.</h3> :
                        imagesToDisplay.map(image => (
                            <UserCardContainer key={image.id} image={image} />
                        ))}
                </div>}

        </div>
    )
}

export default UserDrawings
