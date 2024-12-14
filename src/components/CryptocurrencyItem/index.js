import './index.css'

const CryptocurrencyItem=(props)=>{
    const {details}=props
    const {currencyName,usdValue,euroValue,currencyLogo}=details
    return(
       <li className="list-item">
        <div className="logo-container">
            <img src={currencyLogo} alt="logo" className="logo" />
            <p className="name">{currencyName}</p>
        </div>
        <div className="currency-container">
            <p className="usd-val">{usdValue}</p>
            <p className="usd-val">{euroValue}</p>
        </div>
       </li>
    )
}

export default CryptocurrencyItem