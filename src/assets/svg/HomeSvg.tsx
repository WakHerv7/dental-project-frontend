
import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>) => {
  let color = props.color ? props.color : 'currentColor'
  return (
<svg xmlns="http://www.w3.org/2000/svg" 
width="1em"
height="1em"
viewBox="0 0 24 24" 
fill="none"
{...props}>
  <path d="M16.7554 17.7263V23.64H20.6979C22.3309 23.64 23.6547 22.3162 23.6547 20.6832V11.6934C23.655 11.1813 23.456 10.6893 23.0998 10.3214L14.7241 1.26655C13.2462 -0.332451 10.752 -0.430627 9.15295 1.04724C9.07699 1.11746 9.00381 1.1906 8.93363 1.26655L0.572657 10.3185C0.205732 10.6879 -0.000138532 11.1875 6.99399e-08 11.7082V20.6832C6.99399e-08 22.3162 1.32383 23.64 2.95684 23.64H6.89928V17.7263C6.91771 15.0387 9.08762 12.844 11.7075 12.7808C14.4151 12.7155 16.7348 14.9476 16.7554 17.7263Z" fill={color}/>
  <path d="M11.8274 14.7695C10.1944 14.7695 8.87054 16.0933 8.87054 17.7263V23.64H14.7842V17.7263C14.7842 16.0933 13.4604 14.7695 11.8274 14.7695Z" fill={color}/>
</svg>
)}
const Memo = memo(SvgSearch)
export default Memo
