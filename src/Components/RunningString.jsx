import React from 'react'
import Marquee from 'react-double-marquee';

export default function RunningString() {
    return (
      <div
        style={{
          width: '0%', //change to 100% so it will be scroll to the right
          whiteSpace: 'nowrap',
        }}
      >
        <Marquee
        childMargin='5'
        delay='300'
        speed='0.06'
        >
        <span className='text-[#FFF50099] text-[13px] font-semibold uppercase '>WARNING: this is not a meme coin
          WARNING: this is not a meme coin
          WARNING: this is not a meme coin
          WARNING: this is not a meme coin
          WARNING: this is not a meme coin</span>
        </Marquee>
      </div>
    );
  }