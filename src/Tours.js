import React from 'react'
import Tour from './Tour'

function Tours({tours, removeTour}) {
    return (
        <section>
            <div className="title">
                <h2>Our tour</h2>
                {/* <div className="underline"></div> */}
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour {...tour} removeTour={removeTour}/>
                })}
            </div>
        </section>
    )
}

export default Tours
