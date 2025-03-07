import React from 'react'
import numeral from 'numeral'

const CurrencyFormat=(amount)=>{
    const formattedAmount =numeral(amount).format("4")
}

export default CurrencyFormat
