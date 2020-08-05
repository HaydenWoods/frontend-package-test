import React, { useState, useEffect } from 'react'

import './styles.scss'

const Button: React.FC<{
  className?: string
}> = ({ className = '' }) => {
  return <div className="button"><p>Test button</p></div>
}

export Button