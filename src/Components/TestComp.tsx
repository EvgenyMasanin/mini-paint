import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../Hooks/reduxHooks'
import { setUser } from '../Redux/UserData/userDataActions';

const TestComp = () => {

    const { userName } = useTypedSelector(state => state.userData)
    console.log('sad');

    // console.log(user)

    const dispatch = useDispatch();
    useEffect(() => {

    }, [])

    return (
        <div>
            {/* <span>{ JSON.stringify(user) }</span> */}
        </div>
    )
}

export default TestComp
