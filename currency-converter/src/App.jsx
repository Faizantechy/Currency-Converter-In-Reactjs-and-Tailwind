import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");

  const [ToCurrency, SetToCurrency] = useState("");
  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  const getData = async (amount, fromCurrency, ToCurrency) => {
    if (amount === "" || fromCurrency || ToCurrency) {
      setLoading(true);

      let baseUrl = `https://v6.exchangerate-api.com/v6/1e32d05ac1bc8f9765be8c9f/pair/${fromCurrency}/${ToCurrency}`;

      const response = await fetch(baseUrl);
      const data = await response.json();
      const FinalVar = data.conversion_rate * amount;
      setResult(FinalVar);
      setLoading(false);
    } else {
      alert("Please, put the values.");
    }
  };

  return (
    <div className="w-full p-5 flex justify-center h-screen items-center">
      <div className="w-[350px] h-[300px] rounded px-5 py-4 bg-slate-500 mt-10 text-center flex flex-col justify-center items-center">
        <h1 className="text-[25px] mb-2 text-white font-bold">
          Currency Converter
        </h1>

        <div className="amount flex gap-2">
          <label className="text-xl font-bold text-white">Amount</label>
          <input
            type="text"
            className="px-2 py-2 rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="currencies text-black flex justify-center mt-5 gap-2">
          <div className="From flex gap-2">
            <h2 className="text-white font-bold text-xl">From</h2>

            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="SEK">SEK</option>
              <option value="NZD">NZD</option>
              <option value="MXN">MXN</option>
              <option value="SGD">SGD</option>
              <option value="HKD">HKD</option>
              <option value="NOK">NOK</option>
              <option value="KRW">KRW</option>
              <option value="TRY">TRY</option>
              <option value="RUB">RUB</option>
              <option value="INR">INR</option>
              <option value="BRL">BRL</option>
              <option value="ZAR">ZAR</option>
              <option value="PLN">PLN</option>
              <option value="DKK">DKK</option>
              <option value="THB">THB</option>
              <option value="IDR">IDR</option>
              <option value="HUF">HUF</option>
              <option value="CZK">CZK</option>
              <option value="ILS">ILS</option>
              <option value="CLP">CLP</option>
              <option value="PHP">PHP</option>
              <option value="AED">AED</option>
              <option value="COP">COP</option>
              <option value="SAR">SAR</option>
              <option value="MYR">MYR</option>
              <option value="RON">RON</option>
              <option value="BGN">BGN</option>
              <option value="VND">VND</option>
              <option value="PKR">PKR</option>
              <option value="EGP">EGP</option>
              <option value="BDT">BDT</option>
              <option value="NGN">NGN</option>
              <option value="UAH">UAH</option>
              <option value="KZT">KZT</option>
              <option value="QAR">QAR</option>
              <option value="ARS">ARS</option>
              <option value="LKR">LKR</option>
              <option value="MAD">MAD</option>
              <option value="PEN">PEN</option>
              <option value="KES">KES</option>
              <option value="GHS">GHS</option>
              <option value="DZD">DZD</option>
            </select>
          </div>

          <div className="To flex gap-2">
            <h2 className="text-white font-bold text-xl">To</h2>
            <select
              value={ToCurrency}
              onChange={(e) => SetToCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CNY">CNY</option>
              <option value="SEK">SEK</option>
              <option value="NZD">NZD</option>
              <option value="MXN">MXN</option>
              <option value="SGD">SGD</option>
              <option value="HKD">HKD</option>
              <option value="NOK">NOK</option>
              <option value="KRW">KRW</option>
              <option value="TRY">TRY</option>
              <option value="RUB">RUB</option>
              <option value="INR">INR</option>
              <option value="BRL">BRL</option>
              <option value="ZAR">ZAR</option>
              <option value="PLN">PLN</option>
              <option value="DKK">DKK</option>
              <option value="THB">THB</option>
              <option value="IDR">IDR</option>
              <option value="HUF">HUF</option>
              <option value="CZK">CZK</option>
              <option value="ILS">ILS</option>
              <option value="CLP">CLP</option>
              <option value="PHP">PHP</option>
              <option value="AED">AED</option>
              <option value="COP">COP</option>
              <option value="SAR">SAR</option>
              <option value="MYR">MYR</option>
              <option value="RON">RON</option>
              <option value="BGN">BGN</option>
              <option value="VND">VND</option>
              <option value="PKR">PKR</option>
              <option value="EGP">EGP</option>
              <option value="BDT">BDT</option>
              <option value="NGN">NGN</option>
              <option value="UAH">UAH</option>
              <option value="KZT">KZT</option>
              <option value="QAR">QAR</option>
              <option value="ARS">ARS</option>
              <option value="LKR">LKR</option>
              <option value="MAD">MAD</option>
              <option value="PEN">PEN</option>
              <option value="KES">KES</option>
              <option value="GHS">GHS</option>
              <option value="DZD">DZD</option>
            </select>
          </div>
        </div>

        <button
          className="mt-7 text-xl px-8 py-1 rounded-lg bg-blue-500 font-bold text-white active:scale-[90%] hover:bg-blue-400"
          onClick={() => getData(amount, fromCurrency, ToCurrency)}
        >
          {loading ? "Converting...." : "Convert currency"}
        </button>

        <p className="Result mt-4 text-white text-xl">
          {result
            ? `${amount} ${fromCurrency} = ${result} ${ToCurrency}`
            : "Enter values and click 'Convert'."}
        </p>
      </div>
    </div>
  );
}

export default App;
