import { cn } from '@/helpers'

interface Props extends React.HTMLAttributes<SVGElement> {}

const BriefCaseIcon = ({ className, ...rest }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'icon icon-tabler icon-tabler-briefcase cursor-pointer',
        className
      )}
      {...rest}
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
      <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
      <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
      <path d='M12 12l0 .01' />
      <path d='M3 13a20 20 0 0 0 18 0' />
    </svg>
  )
}

export default BriefCaseIcon
