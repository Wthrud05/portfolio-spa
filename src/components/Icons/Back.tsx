import React, { FC } from 'react'
import { Icon } from '../../assets/types'

const Back: FC<Icon> = ({ className }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <svg
        className={className}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.1241 12.6378H8.35245C7.78936 12.6378 7.5391 11.7717 7.91449 11.2992L13.9208 3.74016C14.2961 3.26772 14.2961 2.55906 13.9208 2.08661L12.5443 0.354331C12.1689 -0.11811 11.6058 -0.11811 11.2304 0.354331L0.281543 14.2126C-0.0938478 14.685 -0.0938478 15.3937 0.281543 15.8661L11.2304 29.6457C11.6058 30.1181 12.1689 30.1181 12.5443 29.6457L13.8582 27.9921C14.2336 27.5197 14.2336 26.811 13.8582 26.3386L7.85193 18.7795C7.47654 18.2283 7.7268 17.3622 8.28989 17.3622H29.0615C29.562 17.3622 30 16.8898 30 16.2598V13.8976C30 13.2677 29.6246 12.6378 29.1241 12.6378Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export default Back
