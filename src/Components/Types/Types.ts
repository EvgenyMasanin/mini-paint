export enum CanvasTools {
    pensil = 'pensil',
    circle = 'circle',
    rectangle = 'rectangle',
    pipette = 'pipette',
    line = 'line'
}

export type CanvasTool = CanvasTools.circle |
    CanvasTools.pensil |
    CanvasTools.pipette |
    CanvasTools.rectangle |
    CanvasTools.line

export interface ICanvasFuncs {
    changeTool: (tool: CanvasTool) => void
}

export interface UserDataType {
    id: string
    userName: string
    picURL: string
    likes: number
    title: string
    description: string
} 