import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useDispatch } from 'react-redux'
import { fireStore } from '../../Firebase/fireBase'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { getUserDrawings, IUserDrawing } from '../../Redux/UserDrawings/userDrawingsActions'
import UserCardContainer from '../UserCard/UserCardContainer'
import UserDrawings from './UserDrawings'

const UserDrawingsContainer = () => {

    const dispatch = useDispatch()
    const [filter, setFilter] = useState('')
    let images = useTypedSelector(state => state.userDrawings.images)
    const [imagesToDisplay, setImagesToDisplay] = useState([] as IUserDrawing[])
    useEffect(() => {
        dispatch(getUserDrawings())
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
        <UserDrawings
            handleDiscard={handleDiscard}
            loading={loading}
            onSubmit={onSubmit}
        >
            {imagesToDisplay.length === 0 && filter ? <h3>User: {filter} has no images.</h3> :
                imagesToDisplay.map((image: IUserDrawing) => (
                    <UserCardContainer key={image.id} image={image} />
                ))}
        </UserDrawings>
    )
}

export default UserDrawingsContainer
