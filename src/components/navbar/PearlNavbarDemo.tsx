import React from 'react'
import { RealNavbarDemo } from './RealNavbarDemo'

interface PearlNavbarDemoProps {
  isVisible: boolean;
}

const PearlNavbarDemo = ({ isVisible }: PearlNavbarDemoProps) => {
  return <RealNavbarDemo isVisible={isVisible} />
}

export default PearlNavbarDemo
