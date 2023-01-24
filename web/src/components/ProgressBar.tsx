import React from 'react'
type ProgressBarProps = {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div
        role={'progressbar'}
        aria-valuenow={progress}
        aria-label={'Progresso de hábitos completados neste dia'}
        className='h-3 rounded-xl bg-violet-600'
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar
