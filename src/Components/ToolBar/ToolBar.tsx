import React, { MutableRefObject, useEffect, useState } from 'react'
import {
    Typography,
} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import RemoveIcon from '@material-ui/icons/Remove';
import { CanvasTool, CanvasTools, ICanvasFuncs } from '../Types/Types';
import SaveImageDialogContainer from '../SaveImageDialog/SaveImageDialogContainer';
import ToolBarItemContainer from './ToolBarItem/ToolBarItemContainer';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import StopIcon from '@material-ui/icons/Stop';
import { useDispatch } from 'react-redux';
import { canvasChangeTool, canvasSetLineWidth } from '../../Redux/Canvas/canvasActions';


import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const ToolBar: React.FC<ICanvasFuncs> = props => {

    const [prevToolItemState, setPrevToolItemState] = useState<MutableRefObject<HTMLButtonElement | null> | null>(null)
    const [toolItemState, setToolItemState] = useState<MutableRefObject<HTMLButtonElement | null> | null>(null)

    const dispatch = useDispatch()

    const setActive = (toolItem: MutableRefObject<HTMLButtonElement | null>) => {
        if (toolItemState && toolItem !== toolItemState)
            toolItemState.current!.classList.remove('activeTool')

        setPrevToolItemState(toolItemState)
        setToolItemState(toolItem)
    }

    const setActivePrev = () => {
        const prevTool = prevToolItemState?.current?.classList[prevToolItemState?.current?.classList.length - 1]

        dispatch(canvasChangeTool(prevTool as CanvasTool))

        prevToolItemState?.current?.classList.add('activeTool')
        toolItemState?.current!.classList.remove('activeTool')
        setToolItemState(prevToolItemState)
    }

    useEffect(() => {
        if (toolItemState) {
            toolItemState.current!.classList.add('activeTool')
        }
    }, [toolItemState])

    function ValueLabelComponent(props: any) {
        const { children, open, value } = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    }

    const [value, setValue] = React.useState(1);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
        dispatch(canvasSetLineWidth(newValue))
    };


    return (
        <div className='toolBar vh78' >
            <ul className="center">
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.pensil}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <CreateIcon />
                    </ToolBarItemContainer>
                </li>
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.circle}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <RadioButtonUncheckedIcon />
                    </ToolBarItemContainer>
                </li>
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.rectangle}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <CropLandscapeIcon />
                    </ToolBarItemContainer>
                </li>
                {/* <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.pipette}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <ColorizeIcon />
                    </ToolBarItemContainer>
                </li> */}
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.line}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <RemoveIcon style={{ transform: 'rotate(-45deg)' }} />
                    </ToolBarItemContainer>
                </li>
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.palette}
                        changeTool={props.changeTool}
                        setActive={setActive}
                        setActivePrev={setActivePrev}
                    >
                        <ColorLensIcon />
                    </ToolBarItemContainer>
                </li>
                <li>
                    <ToolBarItemContainer
                        tool={CanvasTools.eraser}
                        changeTool={props.changeTool}
                        setActive={setActive}
                    >
                        <StopIcon />
                    </ToolBarItemContainer>
                </li>
                <li>
                    <Typography id="non-linear-slider" gutterBottom >
                        Line weight
                    </Typography>
                    <Slider
                        ValueLabelComponent={ValueLabelComponent}
                        style={{ width: 50 }}
                        value={value}
                        min={1}
                        step={1}
                        max={5}
                        onChange={handleChange}
                        aria-labelledby="non-linear-slider"
                        aria-label="custom thumb label"
                        defaultValue={1}
                        color='secondary'
                    />
                </li>
            </ul>

            <div className="center">
                <button className="btn waves-effect waves-light btn-large"
                    onClick={props.openDialog}
                >Save
                    <i className="material-icons right">save</i>
                </button>
            </div>

            {props.open && <SaveImageDialogContainer open={props.open} openDialog={props.openDialog}
                closeDialog={props.closeDialog} saveImage={props.saveImage} />}
        </div>
    )
}

export default ToolBar
