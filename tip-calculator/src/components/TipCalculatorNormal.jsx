import React, { useState } from 'react'

const TipCalculator = () => {
  const [total, setTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  const calculateTip = (total, percentage) => {
    if (total) {
      const tip = total * percentage
      return tip
    } else {
      return 0
    }
  }

  const selectTip = percentage => {
    const tip = calculateTip(total, percentage)
    const grandTotal = tip + total
    setGrandTotal(grandTotal)
  }

  return (
    <main>
      <input
        className="bill-total"
        type="number"
        value={total}
        onChange={e => setTotal(e.target.value)}
      />
      <ul>
        <ul>
          <li>
            15% - $<span id="fifteen-percent">{calculateTip(total, 0.15)}</span>
            <button class="button-15" onClick={() => selectTip(0.15)}>
              SELECT
            </button>
          </li>
          <li>
            18% - $
            <span id="eighteen-percent">{calculateTip(total, 0.18)}</span>
            <button class="button-18">SELECT</button>
          </li>
          <li>
            20% - $<span id="twenty-percent">{calculateTip(total, 0.2)}</span>
            <button class="button-20">SELECT</button>
          </li>
        </ul>
      </ul>
      <h2>
        total pre-tip: $<span id="total">{total}</span>
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
