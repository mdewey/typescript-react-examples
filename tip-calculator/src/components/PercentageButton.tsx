import React from 'react'

interface IPercentage {
  amount: number
  total: number
  getTipDisplay: (total: number, percentage: number) => string
  selectTip: (percentage: number) => void
}

const PercentageButton = (props: IPercentage) => {
  return (
    <li>
      {(props.amount * 100).toFixed(0)} % - $
      <span id="fifteen-percent">
        {props.getTipDisplay(props.total, props.amount)}
      </span>
      <button
        className="button-15"
        onClick={() => props.selectTip(props.amount)}
      >
        SELECT
      </button>
    </li>
  )
}

export default PercentageButton
