import React from 'react'
import numeral from 'numeral'

const CurrencyFormat=(amount)=>{
    const formattedAmount =numeral(amount).format("$")
}

export default CurrencyFormat
