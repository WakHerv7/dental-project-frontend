import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>) => {
  let color = props.color ? props.color : 'currentColor'
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="1em"
    height="1em"
    viewBox="0 0 24 24" 
    fill="none"
    {...props}>
      <g clipPath="url(#clip0_398_101)">
        <path d="M13.8964 6.89759V0.454824C14.7958 0.79568 15.6233 1.32076 16.3247 2.02118L19.7569 5.45536C20.4583 6.15579 20.9834 6.9833 21.3243 7.88272H14.8815C14.3377 7.88272 13.8964 7.4404 13.8964 6.89759ZM21.7538 9.85299H14.8815C13.2521 9.85299 11.9261 8.527 11.9261 6.89759V0.0253064C11.7675 0.0144699 11.6089 0.00166321 11.4483 0.00166321H7.00043C4.28442 0.00166321 2.07477 2.21132 2.07477 4.92733V13.7935H5.98082L7.6585 11.2765C7.85257 10.9849 8.19244 10.8105 8.53921 10.8401C8.88991 10.8618 9.2022 11.0686 9.35982 11.3829L11.5557 15.7756L12.5842 14.2329C12.7674 13.959 13.0748 13.7945 13.4038 13.7945H17.8369C18.3807 13.7945 18.822 14.2358 18.822 14.7796C18.822 15.3234 18.3807 15.7648 17.8369 15.7648H13.9308L12.2532 18.2818C12.0699 18.5566 11.7616 18.7202 11.4335 18.7202C11.4128 18.7202 11.3921 18.7202 11.3724 18.7182C11.0217 18.6965 10.7095 18.4896 10.5518 18.1754L8.35597 13.7827L7.32749 15.3254C7.14426 15.5993 6.8369 15.7638 6.50786 15.7638H2.07477V18.7192C2.07477 21.4352 4.28442 23.6448 7.00043 23.6448H16.8518C19.5678 23.6448 21.7774 21.4352 21.7774 18.7192V10.3308C21.7774 10.1702 21.7646 10.0116 21.7538 9.85299Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_398_101">
          <rect width="23.6432" height="23.6432" fill={color} transform="translate(0.104492 0.00166321)"/>
        </clipPath>
      </defs>
    </svg>
)}
const Memo = memo(SvgSearch)
export default Memo
