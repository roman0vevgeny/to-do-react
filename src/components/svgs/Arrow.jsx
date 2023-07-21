import React from 'react'

const Arrow = ({ rotate }) => {
  return (
    <svg
      className={`${rotate ? 'rotate-180' : ''}`}
      width='15'
      height='9'
      viewBox='0 0 15 9'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M13.1158 1.15375L7.50306 6.39375L1.81531 1.08518C1.62245 0.912319 1.36071 0.805176 1.07143 0.805176C0.479081 0.805176 -4.79157e-07 1.25232 -4.54991e-07 1.80518C-4.43252e-07 2.07375 0.114795 2.31946 0.299999 2.49946L6.72857 8.49946C6.92449 8.6866 7.19694 8.80518 7.5 8.80518C7.50153 8.80518 7.50153 8.80518 7.50306 8.80518L7.50459 8.80518C7.80765 8.80518 8.0801 8.68803 8.27602 8.49946L14.7046 2.49946L14.7015 2.4966C14.8867 2.3166 15 2.07375 15 1.80518C15 1.25375 14.5209 0.805176 13.9286 0.805176C13.6041 0.805176 13.3117 0.94089 13.1158 1.15375Z' />
    </svg>
  )
}

export default Arrow
