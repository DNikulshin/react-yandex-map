import React, {useEffect, useRef} from 'react'
import {Map, YMaps, SearchControl, Placemark, GeolocationControl} from 'react-yandex-maps'

function App() {
    const coordinate = '55.46546,37.546956'
    const searchRef = useRef(null)

    useEffect(() => {
        if (coordinate && searchRef.current) {
            searchRef.current = coordinate
            console.log(searchRef.current)
        }

    }, [])

    return (
        <div className="map">
            <h2>Yandex Map</h2>
            <YMaps query={{apikey: '0c3c2c36-736e-4285-843a-2f4c3968c728'}}>
                <Map defaultState={{center: [55.46546, 37.546956], zoom: 9}} width="100vw" height="60vh">
                    <SearchControl instanceRef={searchRef.current = coordinate}/>
                    <Placemark
                        geometry={[55.46546, 37.546956]}
                        properties={{}}
                    />
                    <GeolocationControl/>
                </Map>
            </YMaps>
        </div>
    )
}

export default App
