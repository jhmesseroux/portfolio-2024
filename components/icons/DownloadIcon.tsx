import React from 'react'
interface Props extends React.HTMLAttributes<SVGElement> {}

const DownloadIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      className={
        'icon icon-tabler icon-tabler icon-tabler-arrow-big-down-lines cursor-pointer' +
        className
      }
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      strokeWidth={1}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z' />
      <path d='M15 3h-6' />
      <path d='M15 6h-6' />
    </svg>
  )
}

export default DownloadIcon
