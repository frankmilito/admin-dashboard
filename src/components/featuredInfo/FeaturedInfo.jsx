import React from 'react'
import './feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import {ArrowUpward} from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,400</span>
          <span className='featuredMoneyRate'>
            -22.5 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className='featureSubtitle'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$25,900</span>
          <span className='featuredMoneyRate'>
            +109.44 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <span className='featureSubtitle'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$3,680</span>
          <span className='featuredMoneyRate'>
            +42.4 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <span className='featureSubtitle'>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
