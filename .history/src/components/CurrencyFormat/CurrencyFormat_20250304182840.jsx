import React from 'react'
import numeral from 'numeral'

const CurrencyFormat=(amount)=>{
    const formattedAmount =numeral(amount).format("$0, 0.00")
    return <div> {forma}</div>
}

export default CurrencyFormat
