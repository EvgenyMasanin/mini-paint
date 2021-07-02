import React, { useEffect } from 'react'
import Header from '../Header/Header'
import CanvasContainer from '../Canvas/CanvasContainer'
import { Grid } from '@material-ui/core'
import ToolBarContainer from '../ToolBar/ToolBarContainer'
import UserDrawingsContainer from '../UserDrawings/UserDrawingsContainer'
import { Route, Switch } from 'react-router-dom'
import ProfileContainer from '../Profile/ProfileContainer'
import SignIn from '../Auth/SignIn'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import Footer from '../Footer/Footer'
import { Redirect } from "react-router-dom";
import { firebaseApp } from '../../Firebase/fireBase'
import { isAuthorized, setError } from '../../Redux/UserData/userDataActions'
import { useDispatch } from 'react-redux'
import { useAuthState, } from 'react-firebase-hooks/auth'
import SignUp from '../Registration/SignUp'
import { useToasts } from 'react-toast-notifications'

const MainPage: React.FC = () => {

    const { userName, error } = useTypedSelector(state => ({
        userName: state.userData.userName,
        error: state.userData.error
    }))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isAuthorized())
    }, [])

    const [, loading] = useAuthState(firebaseApp.auth())
    // const [isRegister, setIsRegister] = useState(false)

    const { addToast } = useToasts();
    useEffect(() => {
        if (error) {
            addToast(error, {
                appearance: 'error',
                autoDismiss: true,
                autoDismissTimeout: 5000
            })
            dispatch(setError(''))
        }
    }, [error])
    return (
        loading ?
            <div className="progress">
                <div className="indeterminate" />
            </div> :
            <div className='flexContainer' >
                {userName && <Header />}
                <Switch>
                    <Route path='/signin'>
                        <SignIn />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>

                    <Route path='/user-drawings'>
                        <UserDrawingsContainer />
                    </Route>

                    <Route path='/profile'>
                        <ProfileContainer />
                    </Route>

                    <Route path='/main'>
                        <Grid container className='flexGrow'>
                            <Grid item xs={3} lg={2} container>
                                <ToolBarContainer />
                            </Grid>
                            <Grid item xs={9} lg={10} className='center'>
                                <CanvasContainer />
                            </Grid>
                        </Grid>
                    </Route>
                </Switch>
                {userName && <Footer />}
                {!userName &&
                    <Redirect to='/signin' />
                }
            </div>
    )
}

export default MainPage
