import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../Hooks/reduxHooks'
import { setUser } from '../Redux/UserData/userDataActions';

const TestComp = () => {

    const { user } = useTypedSelector(state => state.userData)
    console.log(user);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setUser({ name: 'Bob', age: 20 }))
    }, [])

    return (
        <div>
            <span>{ JSON.stringify(user) }</span>
        </div>
    )
}

export default TestComp
