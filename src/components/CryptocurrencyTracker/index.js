
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component{
    render(){
        return(
            <div className="bg-container">
                <CryptocurrenciesList/>
            </div>
        )
    }
}

export default CryptocurrencyTracker