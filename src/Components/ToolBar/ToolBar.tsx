import React from 'react'
import {
    IconButton,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import ColorizeIcon from '@material-ui/icons/Colorize';
import RemoveIcon from '@material-ui/icons/Remove';
import { CanvasTools, ICanvasFuncs } from '../Types/Types';
import SaveImageDialogContainer from '../SaveImageDialog/SaveImageDialogContainer';

const ToolBar: React.FC<ICanvasFuncs> = props => {

    return (
        <div className='flexContainer justifySB toolBar'>
            <ul className="center">
                <li>
                    <IconButton
                        aria-label="pensil"
                        onClick={() => { props.changeTool(CanvasTools.pensil) }}
                    >
                        <CreateIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        aria-label="circle"
                        onClick={() => { props.changeTool(CanvasTools.circle) }}
                    >
                        <RadioButtonUncheckedIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        aria-label="rectangle"
                        onClick={() => { props.changeTool(CanvasTools.rectangle) }}
                    >
                        <CropLandscapeIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        aria-label="pipette"
                        onClick={() => { props.changeTool(CanvasTools.pipette) }}
                    >
                        <ColorizeIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        aria-label="line"
                        onClick={() => { props.changeTool(CanvasTools.line) }}
                    >
                        <RemoveIcon style={{ transform: 'rotate(-45deg)' }} />
                    </IconButton>
                </li>
            </ul>


            {/* <form className="col s12 center mx2" onSubmit={props.saveImage}> */}
            <div className="center mx2">
                <a className="btn waves-effect waves-light btn-large"
                    onClick={props.openDialog}
                >Save
                    <i className="material-icons right">save</i>
                </a>
            </div>


            {props.open && <SaveImageDialogContainer open={props.open} openDialog={props.openDialog}
                closeDialog={props.closeDialog} saveImage={props.saveImage} />}
            {/* </form> */}
        </div>
    )
}

export default ToolBar
