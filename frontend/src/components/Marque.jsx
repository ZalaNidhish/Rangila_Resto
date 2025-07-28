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
    <div className='marque bg-slate-300 '>

        <div className="slider">
            {items.map((item, idx) => (
                <div key={idx} className="items px-4 py-2">
                    <h1 className='text-4xl font-semibold'>{item}</h1>
                </div>
            ))}
        </div>
        <div className="slider">
            {items.map((item, idx) => (
                <div key={idx} className="items px-4 py-2">
                    <h1 className='text-4xl font-semibold'>{item}</h1>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Marque
