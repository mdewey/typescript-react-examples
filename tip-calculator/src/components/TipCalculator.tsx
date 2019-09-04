import React, { useState } from 'react'

const TipCalculator = () => {
  const [total, setTotal] = useState<number>(0)
  const [grandTotal, setGrandTotal] = useState<string>('0')

  const calculateTip = (total: number, percentage: number): number => {
    if (total) {
      const tip = total * percentage
      return tip
    } else {
      return 0
    }
  }

  const getTipDisplay = (total: number, percentage: number): string => {
    return calculateTip(total, percentage).toFixed(2)
  }

  const selectTip = (percentage: number) => {
    const tip: number = calculateTip(total, percentage)
    const grandTotal: number = tip + total
    setGrandTotal(grandTotal.toFixed(2))
  }

  return (
    <main>
      <input
        className="bill-total"
        type="number"
        value={total}
        onChange={e => setTotal(parseInt(e.target.value))}
      />
      <ul>
        <li>
          15% - $<span id="fifteen-percent">{getTipDisplay(total, 0.15)}</span>
          <button className="button-15" onClick={() => selectTip(0.15)}>
            SELECT
          </button>
        </li>
        <li>
          18% - $<span id="eighteen-percent">{getTipDisplay(total, 0.18)}</span>
          <button className="button-18" onClick={() => selectTip(0.18)}>
            SELECT
          </button>
        </li>
        <li>
          20% - $<span id="twenty-percent">{getTipDisplay(total, 0.2)}</span>
          <button className="button-20" onClick={() => selectTip(0.2)}>
            SELECT
          </button>
        </li>
      </ul>
      <h2>
        total pre-tip: $<span id="total">{total || 0}</span>
      </h2>
      <h2>
        tip: $<span id="total">1.00</span>
      </h2>
      <h2>
        total: $<span id="total">{grandTotal}</span>
      </h2>
    </main>
  )
}

export default TipCalculator
