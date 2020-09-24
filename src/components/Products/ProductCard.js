import React, { useState } from "react"
import getStripe from "../../utils/stripejs"

const cardStyles = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "flex-start",
    padding: "4rem",
    marginBottom: "1rem",
    margin: '1rem',
    background: "#242424",
    color: "#fff",
    borderRadius: "6px",
    maxWidth: "300px",
  }
  const buttonStyles = {
    display: "block",
    fontSize: "13px",
    textAlign: "center",
    color: "#fff",
    padding: "12px",
    backgroundColor: "#e8afd6",
    borderRadius: "6px",
    letterSpacing: "1.5px",
    border: 'none',
    cursor: "pointer",
    marginLeft: '3.5rem',
  }
  
  const buttonDisabledStyles = {
    opacity: "0.5",
    cursor: "not-allowed",
  }

  const pricingCardPlan = {
    marginBottom: '50px',
    fontSize: '24px',

  }

  const pricingCardDescription = {
    fontSize: '14px',
    marginBottom: '24px',
  }

  const productImage = {
    maxWidth: '3rem',
  }

  const formSelect = {
    display: 'none',
  }



const formatPrice = (amount, currency) => {
    let price = (amount / 100).toFixed(2)
    let numberFormat = new Intl.NumberFormat(["en-US"], {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
    })
    return numberFormat.format(price)
  }

  const ProductCard = ({ product }) => {
    const [loading, setLoading] = useState(false)
  
    const handleSubmit = async event => {
      event.preventDefault()
      setLoading(true)
  
      const price = new FormData(event.target).get("priceSelect")
      const stripe = await getStripe()
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price, quantity: 1 }],
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/services`,
      })
  
      if (error) {
        console.warn("Error:", error)
        setLoading(false)
      }
    }
  
    return (
      <>
      <div style={cardStyles}>
        <form onSubmit={handleSubmit}>
          <fieldset style={{ border: "none" }}>
            <legend>
              <img src={product.images} alt="" style={productImage}/>
              <h4 style={pricingCardPlan}>{product.name}</h4>
              <p style={pricingCardDescription}>{product.description}</p>
            </legend>
            <label>
              <select name="priceSelect" style={formSelect}>
                {product.prices.map(price => (
                  <option key={price.id} value={price.id}>
                    {formatPrice(price.unit_amount, price.currency)}
                  </option>
                ))}
              </select>
            </label>
          </fieldset>

          <button
            className ="card-button" 
            disabled={loading}
            style={
              loading
                ? { ...buttonStyles, ...buttonDisabledStyles }
                : buttonStyles
                  }
                >
                  {loading ? 'Loading...' : product.prices.map(price => (
                  <option key={price.id} value={price.id}>
                    {formatPrice(price.unit_amount, price.currency)}
                  </option>
                ))}
            </button>            
          </form>
      </div> 
      </>
    )
  }

  export default ProductCard