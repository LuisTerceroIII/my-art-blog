import React from "react"
import { IconSvgTypes } from "./icons-svg.types"
import { svgIcons } from "./icons-svg.types"
import { SvgIconProps } from "./svg-icon.props"
import { colors } from "@/theme/colors"

interface MainSvgIconProps extends SvgIconProps {
    icon: IconSvgTypes
    onClick?(): void
    disabled?: boolean
    roundBorders?: boolean
    borderRadius?: number
    containerStyle?: React.CSSProperties
}

const CONTAINER: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "fit-content",
    width: "fit-content"
}

const addPropsToIcon = (IconSvgComponent:any, additionalProps:any) =>{
    return function WithPropsWrapper(props:any) {
        return <IconSvgComponent {...props} {...additionalProps} />
    }
}

export const SvgIcon: React.FunctionComponent<MainSvgIconProps> = (props) => {

    const { width=20, height=20, linesColor = colors.white, opacity=1, onClick=undefined, disabled=(onClick===null), icon, containerStyle } = props

    const w = Math.round(width)
    const h = Math.round(height)

    const IconChildWithProps = svgIcons[icon] !== null && addPropsToIcon(svgIcons[icon], { width: w, height:h, linesColor, opacity })

    return svgIcons[icon] != null && (
        <div onClick={disabled ? undefined : onClick} style={{...CONTAINER, ...containerStyle}}>
            <IconChildWithProps />
        </div>
    )
}
