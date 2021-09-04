import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { SaveFormRedux } from './SaveFormRedux';
import { useDispatch } from 'react-redux';
import { setImage } from '../../Redux/UserData/userDataActions';
import { useTypedSelector } from '../../Hooks/reduxHooks';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction={"up" as any} ref={ref as any} {...props as any} />;
});
interface ISaveFormFields {
    title: string
    description: string
}

const SaveImageDialog = (props: any) => {

    const {userName, imageUrl} = useTypedSelector(state => ({
        userName: state.userData.userName,
        imageUrl: state.canvas.canvasField
    }))

    const dispatch = useDispatch()
    
    const onSubmit: any = (data: ISaveFormFields) => {
        
        dispatch(setImage(userName, imageUrl, data.title, data.description))
        props.closeDialog()

    }

    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition as any}
            keepMounted
            onClose={props.closeDialog}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"Save picture"}</DialogTitle>
            <DialogContent>
                <SaveFormRedux onSubmit={onSubmit} closeDialog={props.closeDialog} />
            </DialogContent>
        </Dialog>
    );
}

export default SaveImageDialog