import React from 'react'
import './progressRing.scss'

interface ProgressRingProps {
  radius: number
  stroke: number
  progress: number
}

export const ProgressRing = ({radius, stroke, progress}: ProgressRingProps) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <svg
    className="progress-ring"
    width={radius * 2}
    height={radius * 2}
  >
    <circle
      className="progress-ring__circle"
      stroke="white"
      strokeWidth={stroke}
      strokeDasharray={`${circumference}  ${strokeDashoffset}`}
      style={{ strokeDashoffset }}
      strokeLinecap='round'
      fill="transparent"
      r={normalizedRadius}
      cx={radius}
      cy={radius}
    />
  </svg>
  )
}
