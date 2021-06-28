import React from 'react'
import { LegacyRef } from 'react'

interface ICanvasProps {
    onMouseDown: (event: React.MouseEvent) => void
    onMouseUp: (event: React.MouseEvent) => void
    onMouseMove: (event: React.MouseEvent) => void
    onMouseLeave: (event: React.MouseEvent) => void
    canvasRef: LegacyRef<HTMLCanvasElement>
}

const Canvas: React.FC<ICanvasProps> = props => {

    return (
        <div className='mx2 overflowX'>
            <canvas
                className='canvas'
                width={1000}
                height={550}
                ref={props.canvasRef}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}
                onMouseMove={props.onMouseMove}
                onMouseLeave={props.onMouseLeave}
            />
        </div>
    )
}

export default Canvas
