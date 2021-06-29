import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header/Header'
import CanvasContainer from '../Canvas/CanvasContainer'
import { Grid } from '@material-ui/core'
import ToolBarContainer from '../ToolBar/ToolBarContainer'
import UserDrawingsContainer from '../UserDrawings/UserDrawingsContainer'
import { Route, Switch } from 'react-router-dom'
import ProfileContainer from '../Profile/ProfileContainer'

const MainPage: React.FC = () => {
    
    return (
        <div className='flexContainer' >
            <Header />
            <Switch> 
                <Route path='/user-drawings'>
                    <UserDrawingsContainer />
                </Route>

                <Route path='/profile'>
                    <ProfileContainer />
                </Route>

                <Route path='/'>
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
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainPage
