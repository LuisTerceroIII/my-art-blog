import { colors, colorsName } from "@/theme/colors"
import * as React from "react"

interface SignatureProps {
	width?: number
	height?: number
	linesColor?: colorsName
	opacity?: number
	styles?: React.CSSProperties
	png?: boolean
	classes?: string
}

export const Signature: React.FunctionComponent<SignatureProps> = (props) => {

	const { width = 350, height = 270, linesColor = colors.yellow, opacity = 1, styles, png=false, classes } = props

	return png ? <img src="signature.png" className={classes} alt="signature" onClick={() => {window.location.href = 'mailto:luis.espinoza.na@gmail.com?subject=FoliumAter';}}/> : (
		<svg
			viewBox="0 0 350 270"
			width={width}
			height={height}
			style={{
				opacity: opacity,
				backgroundColor: "transparent",
				...styles
			}}
		>
			<path
				d="M 202.000,92.600 C 202.000,102.600 202.000,102.600 202.000,112.600"
				strokeWidth={4.805}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 202.000,112.600 C 202.627,128.122 202.000,128.100 202.000,143.600"
				strokeWidth={2.336}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 202.000,143.600 C 201.605,165.237 201.127,165.122 199.000,186.600"
				strokeWidth={1.759}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 199.000,186.600 C 196.447,206.330 196.605,206.237 192.000,225.600"
				strokeWidth={1.709}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 192.000,225.600 C 188.487,238.779 188.947,238.830 184.000,251.600"
				strokeWidth={2.4}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 184.000,251.600 C 181.622,258.960 181.487,258.779 178.000,265.600"
				strokeWidth={2.718}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 178.000,265.600 C 175.474,270.126 175.622,269.960 172.000,273.600"
				strokeWidth={3.199}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 172.000,273.600 C 167.210,277.439 169.974,275.626 167.000,276.600"
				strokeWidth={4.174}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 167.000,276.600 C 167.725,271.593 166.710,275.439 171.000,269.600"
				strokeWidth={4.621}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 171.000,269.600 C 180.196,264.895 179.225,264.593 190.000,262.600"
				strokeWidth={2.962}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 190.000,262.600 C 203.928,259.304 203.696,259.395 218.000,258.600"
				strokeWidth={2.311}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 218.000,258.600 C 234.248,257.427 233.928,257.804 250.000,259.600"
				strokeWidth={1.987}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 250.000,259.600 C 263.664,261.554 263.248,261.427 276.000,266.600"
				strokeWidth={2.062}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 276.000,266.600 C 285.604,271.303 285.664,270.554 294.000,277.600"
				strokeWidth={2.405}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 294.000,277.600 C 300.981,284.121 301.604,283.303 308.000,290.600"
				strokeWidth={2.514}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 308.000,290.600 C 313.572,296.655 313.981,296.121 320.000,301.600"
				strokeWidth={2.755}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 320.000,301.600 C 326.358,307.584 326.572,306.655 334.000,310.600"
				strokeWidth={2.757}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 334.000,310.600 C 345.789,315.799 345.358,315.084 358.000,316.600"
				strokeWidth={2.413}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 358.000,316.600 C 376.788,317.476 376.289,317.799 395.000,314.600"
				strokeWidth={1.923}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 395.000,314.600 C 415.184,311.465 414.788,311.476 434.000,304.600"
				strokeWidth={1.79}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 434.000,304.600 C 451.941,296.905 452.184,297.965 469.000,287.600"
				strokeWidth={1.681}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 469.000,287.600 C 484.983,278.800 484.941,278.905 500.000,268.600"
				strokeWidth={1.757}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 500.000,268.600 C 511.305,260.461 511.483,260.800 522.000,251.600"
				strokeWidth={1.955}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 522.000,251.600 C 529.130,246.122 528.805,245.961 535.000,239.600"
				strokeWidth={2.407}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 535.000,239.600 C 538.132,235.869 538.130,236.122 540.000,231.600"
				strokeWidth={3.143}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 540.000,231.600 C 543.136,227.008 541.632,227.869 542.000,223.600"
				strokeWidth={3.568}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 542.000,223.600 C 539.448,218.407 540.636,219.508 535.000,216.600"
				strokeWidth={3.502}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 535.000,216.600 C 522.631,212.897 523.448,211.907 510.000,210.600"
				strokeWidth={2.511}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 510.000,210.600 C 495.053,207.994 495.131,207.897 480.000,206.600"
				strokeWidth={2.148}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 480.000,206.600 C 467.997,206.158 468.053,205.494 456.000,205.600"
				strokeWidth={2.218}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 456.000,205.600 C 446.492,205.212 446.497,205.158 437.000,204.600"
				strokeWidth={2.506}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 437.000,204.600 C 430.901,204.583 430.992,204.212 425.000,203.600"
				strokeWidth={3.009}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 425.000,203.600 C 419.861,204.011 421.901,203.083 419.000,201.600"
				strokeWidth={3.698}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 419.000,201.600 C 417.579,194.845 417.361,197.011 420.000,189.600"
				strokeWidth={3.984}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 261.000,139.600 C 260.208,148.627 260.000,148.600 259.000,157.600"
				strokeWidth={5.135}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 259.000,157.600 C 256.537,174.605 256.708,174.627 254.000,191.600"
				strokeWidth={2.221}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 254.000,191.600 C 251.586,208.114 251.537,208.105 249.000,224.600"
				strokeWidth={1.926}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 249.000,224.600 C 247.205,233.563 247.586,233.614 246.000,242.600"
				strokeWidth={2.369}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 246.000,242.600 C 245.664,248.621 245.205,248.563 245.000,254.600"
				strokeWidth={2.948}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 245.000,254.600 C 242.793,261.917 244.664,257.621 244.000,260.600"
				strokeWidth={3.694}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 244.000,260.600 C 249.695,251.382 248.293,255.917 256.000,242.600"
				strokeWidth={3.481}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 256.000,242.600 C 263.318,231.480 263.695,231.882 272.000,221.600"
				strokeWidth={2.476}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 272.000,221.600 C 278.609,215.713 277.818,214.980 285.000,209.600"
				strokeWidth={2.666}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 285.000,209.600 C 289.715,204.263 290.109,204.713 295.000,199.600"
				strokeWidth={2.882}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 295.000,199.600 C 299.949,193.164 298.215,196.763 302.000,194.600"
				strokeWidth={3.43}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 302.000,194.600 C 303.990,200.540 304.949,196.664 305.000,206.600"
				strokeWidth={4.131}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 305.000,206.600 C 303.393,211.452 305.490,209.540 305.000,212.600"
				strokeWidth={4.103}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 305.000,212.600 C 309.615,213.836 306.893,213.952 312.000,211.600"
				strokeWidth={4.727}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 312.000,211.600 C 316.903,204.830 317.615,206.336 321.000,197.600"
				strokeWidth={3.151}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 321.000,197.600 C 325.485,189.801 325.403,189.830 329.000,181.600"
				strokeWidth={2.852}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 329.000,181.600 C 330.911,175.569 331.485,175.801 333.000,169.600"
				strokeWidth={3.103}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 333.000,169.600 C 337.361,162.280 334.411,165.569 336.000,161.600"
				strokeWidth={3.525}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 336.000,161.600 C 330.954,163.344 334.361,160.780 327.000,166.600"
				strokeWidth={4.026}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 327.000,166.600 C 314.568,178.175 313.954,177.344 302.000,189.600"
				strokeWidth={2.159}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 302.000,189.600 C 287.294,203.447 287.068,203.175 272.000,216.600"
				strokeWidth={1.789}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 272.000,216.600 C 262.339,225.081 262.294,224.947 252.000,232.600"
				strokeWidth={2.035}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 252.000,232.600 C 245.686,236.953 245.839,237.081 239.000,240.600"
				strokeWidth={2.607}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 239.000,240.600 C 233.162,245.462 234.686,242.953 230.000,244.600"
				strokeWidth={3.209}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 230.000,244.600 C 226.987,240.892 227.662,243.962 228.000,237.600"
				strokeWidth={3.642}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 228.000,237.600 C 231.165,226.695 230.987,227.892 238.000,218.600"
				strokeWidth={2.747}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 238.000,218.600 C 250.701,203.819 250.165,204.195 266.000,192.600"
				strokeWidth={1.884}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 266.000,192.600 C 281.307,181.884 280.701,181.819 298.000,174.600"
				strokeWidth={1.81}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 298.000,174.600 C 309.342,170.590 308.807,169.884 321.000,168.600"
				strokeWidth={2.2}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 321.000,168.600 C 330.400,166.167 329.842,167.090 339.000,167.600"
				strokeWidth={2.494}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 339.000,167.600 C 346.346,169.205 345.400,168.667 351.000,173.600"
				strokeWidth={2.916}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 351.000,173.600 C 354.795,178.811 355.346,177.705 357.000,184.600"
				strokeWidth={3.079}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 357.000,184.600 C 358.060,189.589 358.795,189.311 359.000,194.600"
				strokeWidth={3.372}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 359.000,194.600 C 358.056,199.304 359.560,197.589 360.000,200.600"
				strokeWidth={3.877}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 360.000,200.600 C 365.049,202.731 362.556,202.304 368.000,200.600"
				strokeWidth={4.293}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 368.000,200.600 C 373.044,194.133 374.049,196.231 378.000,187.600"
				strokeWidth={3.181}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 378.000,187.600 C 383.556,179.215 384.044,179.633 390.000,171.600"
				strokeWidth={2.738}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 390.000,171.600 C 394.617,166.133 394.556,166.215 400.000,161.600"
				strokeWidth={2.907}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 400.000,161.600 C 404.327,158.270 404.117,158.133 409.000,155.600"
				strokeWidth={3.259}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 409.000,155.600 C 411.599,153.360 411.327,154.270 414.000,153.600"
				strokeWidth={3.941}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 414.000,153.600 C 417.644,154.340 416.599,153.860 419.000,156.600"
				strokeWidth={4.493}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 419.000,156.600 C 417.865,162.746 420.644,159.340 420.000,163.600"
				strokeWidth={4.59}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 420.000,163.600 C 425.071,163.081 422.865,164.746 429.000,160.600"
				strokeWidth={4.696}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 429.000,160.600 C 434.118,156.225 434.571,157.081 439.000,151.600"
				strokeWidth={3.413}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 439.000,151.600 C 443.361,146.949 443.618,147.225 448.000,142.600"
				strokeWidth={3.212}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 448.000,142.600 C 451.459,139.551 451.361,139.449 455.000,136.600"
				strokeWidth={3.505}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 455.000,136.600 C 458.322,131.481 457.459,134.551 460.000,132.600"
				strokeWidth={3.892}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 460.000,132.600 C 463.195,137.370 462.822,134.481 464.000,142.600"
				strokeWidth={4.13}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 464.000,142.600 C 464.000,150.600 465.195,150.370 464.000,158.600"
				strokeWidth={3.25}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 464.000,158.600 C 464.000,165.600 464.000,165.600 464.000,172.600"
				strokeWidth={3.291}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 464.000,172.600 C 464.000,177.100 464.000,177.100 464.000,181.600"
				strokeWidth={3.553}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 464.000,181.600 C 462.682,185.492 464.000,184.600 464.000,187.600"
				strokeWidth={3.913}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 464.000,187.600 C 466.515,189.807 465.182,189.492 469.000,189.600"
				strokeWidth={4.673}
				stroke={linesColor}
				fill="none"
				strokeLinecap="round"
			/>
		</svg>
	)
}
