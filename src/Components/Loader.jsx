import React from 'react'
import { Hourglass } from "react-loader-spinner";

function Loader() {
    return ( <
        Hourglass visible = { true }
        height = "50"
        width = "50"
        ariaLabel = "hourglass-loading"
        wrapperStyle = {
            { 'margin': '50px' }
        }

        colors = {
            ['#8a046f', '#ba239c']
        }
        />
    )
}

export default Loader