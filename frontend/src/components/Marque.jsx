import React from 'react'

const Marque = () => {

    const items = [
        'Pizza',
        'Burger',
        'French fries',
        'Tacos',
        'Desserts',
        'Milk Shakes'
    ]


  return (
    <div className='marque bg-slate-300 flex gap-2'>

        <div className="slider flex gap-2">
            {items.map((item, idx) => (
                <div key={idx} className="items">
                    <h1 className='text-[20px] md:text-4xl font-semibold'>{item}</h1>
                </div>
            ))}
        </div>
        <div className="slider flex gap-2">
            {items.map((item, idx) => (
                <div key={idx} className="items">
                    <h1 className='text-[20px] md:text-4xl font-semibold'>{item}</h1>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Marque
