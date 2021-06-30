import React from "react";

export enum CanvasTools {
    pensil = 'pensil',
    circle = 'circle',
    rectangle = 'rectangle',
    pipette = 'pipette',
    line = 'line',
    eraser = 'eraser',
    palette = 'palette'
}

export type CanvasTool = CanvasTools.circle |
    CanvasTools.pensil |
    CanvasTools.pipette |
    CanvasTools.rectangle |
    CanvasTools.line |
    CanvasTools.eraser |
    CanvasTools.palette

export interface ICanvasFuncs {
    changeTool: (tool: CanvasTool) => void
    saveImage: (event: React.FormEvent) => void
    openDialog: () => void
    closeDialog: () => void
    open: boolean
}

export interface UserDataType {
    id: string
    userName: string
    picURL: string
    likes: number
    title: string
    description: string
}