import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'



class CryptocurrenciesList extends Component{

    state={currencyList:[],isLoading:true}

    componentDidMount(){
        this.getCurrenciesList()
    }

    getCurrenciesList=async ()=>{
        const response=await fetch("https://apis.ccbp.in/crypto-currency-converter")
        const data= await response.json()
        const updatedData=data.map(eachItem=>(
            {
                id:eachItem.id,
                currencyName:eachItem.currency_name,
                usdValue:eachItem.usd_value,
                euroValue:eachItem.euro_value,
                currencyLogo:eachItem.currency_logo

            }
        ))
        console.log(updatedData)
        this.setState({currencyList:updatedData,isLoading:false})
    }

    render(){
        const {currencyList,isLoading}=this.state
        return(
            <div>
                {isLoading?<div className="loader-container">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
                </div>:
                <div className="card-container">
                    <p className="heading">Crytpocurrency Tracker</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png" alt="bg-img" className="bg-img" />
                    <ul className="currency-table">
                        <li className="table-heading">
                            <p className="table-heads">Coin Type</p>
                            <div className="heads-container">
                                <p className="table-head-usd">USD</p>
                                <p className="table-heads">EURO</p>
                            </div>
                        </li>
                        {currencyList.map(eachItem=><CryptocurrencyItem details={eachItem} key={eachItem.id} />)}

                    </ul>
                    
                </div>}
            </div>
        )
    }

}

export default CryptocurrenciesList