"use strict";

// Hàm tìm tỷ giá hối đoái
function getExchangeRate(currency) {
  const entry = list.find((item) => item.currency === currency);
  return entry ? entry.price : null;
}

// Hàm chuyển đổi tiền tệ
function convertCurrency(amount, fromCurrency, toCurrency) {
  const fromRate = getExchangeRate(fromCurrency);
  const toRate = getExchangeRate(toCurrency);

  if (fromRate === null || toRate === null) {
    console.error(
      "Không tìm thấy tỷ giá hối đoái cho một trong hai loại tiền tệ."
    );
    return null;
  }

  // Chuyển đổi amount từ fromCurrency sang USD, sau đó từ USD sang toCurrency
  const amountInUSD = amount / fromRate;
  const convertedAmount = amountInUSD * toRate;

  return convertedAmount;
}

window.onload = function () {
  const currencyDOM = document.getElementsByClassName("form__select");
  const defaultCurrency = list.find((item) => item.currency === "USD");

  const str = list
    .map((item) => {
      const selected =
        item.currency === defaultCurrency.currency ? "selected" : "";
      return `<option value="${item.currency}" ${selected}>
        
        ${item.currency}
      </option>`;
    })
    .join("");
  for (let opt of currencyDOM) {
    opt.innerHTML = str;
  }


};

document.getElementById("currency-input").addEventListener("change", function () {
    const input = document.getElementById("currency-input");
    const img = document.getElementById("icon__img-input");
    const result = list.find((item) => item.currency === input.value);
    img.setAttribute("src", result.img);
});

document.getElementById("currency-output").addEventListener("change", function () {
    const output = document.getElementById("currency-output");
    const img = document.getElementById("icon__img-output");
    const result = list.find((item) => item.currency === output.value);
    img.setAttribute("src", result.img);
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("input-amount");
  const output = document.getElementById("output-amount");
  const currency = document.getElementsByClassName("form__select");

  const inputObj = {
    amount: input.value,
    currency: currency[0].value,
  };

  const outputObj = {
    amount: output.value,
    currency: currency[1].value,
  };

  const result = convertCurrency(
    parseFloat(inputObj.amount),
    inputObj.currency,
    outputObj.currency
  );

  output.value = result;
});

const list = [
  {
    currency: "BLUR",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.20811525423728813,
    img: "./assets/tokens/BLUR.svg",
  },
  {
    currency: "bNEO",
    date: "2023-08-29T07:10:40.000Z",
    price: 7.1282679,
    img: "./assets/tokens/bNEO.svg",
  },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.999183113,
    img: "./assets/tokens/BUSD.svg",
  },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
    img: "./assets/tokens/BUSD.svg",
  },
  {
    currency: "USD",
    date: "2023-08-29T07:10:40.000Z",
    price: 1,
    img: "./assets/tokens/USD.svg",
  },
  {
    currency: "ETH",
    date: "2023-08-29T07:10:40.000Z",
    price: 1645.9337373737374,
    img: "./assets/tokens/ETH.svg",
  },
  {
    currency: "GMX",
    date: "2023-08-29T07:10:40.000Z",
    price: 36.345114372881355,
    img: "./assets/tokens/GMX.svg",
  },
  {
    currency: "STEVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.07276706779661017,
    img: "./assets/tokens/STEVMOS.svg",
  },
  {
    currency: "LUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.40955638983050846,
    img: "./assets/tokens/LUNA.svg",
  },
  {
    currency: "RATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 10.250918915254237,
    img: "./assets/tokens/RATOM.svg",
  },
  {
    currency: "STRD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.7386553389830508,
    img: "./assets/tokens/STRD.svg",
  },
  {
    currency: "EVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.06246181355932203,
    img: "./assets/tokens/EVMOS.svg",
  },
  {
    currency: "IBCX",
    date: "2023-08-29T07:10:40.000Z",
    price: 41.26811355932203,
    img: "./assets/tokens/IBCX.svg",
  },
  {
    currency: "IRIS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.0177095593220339,
    img: "./assets/tokens/IRIS.svg",
  },
  {
    currency: "ampLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.49548589830508477,
    img: "./assets/tokens/ampLUNA.svg",
  },
  {
    currency: "KUJI",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.675,
    img: "./assets/tokens/KUJI.svg",
  },
  {
    currency: "STOSMO",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.431318,
    img: "./assets/tokens/STOSMO.svg",
  },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.989832,
    img: "./assets/tokens/USDC.svg",
  },
  {
    currency: "axlUSDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.989832,
    img: "./assets/tokens/axlUSDC.svg",
  },
  {
    currency: "ATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 7.186657333333334,
    img: "./assets/tokens/ATOM.svg",
  },
  {
    currency: "STATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 8.512162050847458,
    img: "./assets/tokens/STATOM.svg",
  },
  {
    currency: "OSMO",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.3772974333333333,
    img: "./assets/tokens/OSMO.svg",
  },
  {
    currency: "rSWTH",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.00408771,
    img: "./assets/tokens/rSWTH.svg",
  },
  {
    currency: "STLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.44232210169491526,
    img: "./assets/tokens/STLUNA.svg",
  },
  {
    currency: "LSI",
    date: "2023-08-29T07:10:40.000Z",
    price: 67.69661525423729,
    img: "./assets/tokens/LSI.svg",
  },
  {
    currency: "OKB",
    date: "2023-08-29T07:10:40.000Z",
    price: 42.97562059322034,
    img: "./assets/tokens/OKB.svg",
  },
  {
    currency: "OKT",
    date: "2023-08-29T07:10:40.000Z",
    price: 13.561577966101694,
    img: "./assets/tokens/OKT.svg",
  },
  {
    currency: "SWTH",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.004039850455012084,
    img: "./assets/tokens/SWTH.svg",
  },
  {
    currency: "USC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.994,
    img: "./assets/tokens/USC.svg",
  },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 1,
    img: "./assets/tokens/USDC.svg",
  },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 1,
    img: "./assets/tokens/USDC.svg",
  },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.9998782611186441,
    img: "./assets/tokens/USDC.svg",
  },
  {
    currency: "WBTC",
    date: "2023-08-29T07:10:40.000Z",
    price: 26002.82202020202,
    img: "./assets/tokens/WBTC.svg",
  },
  {
    currency: "wstETH",
    date: "2023-08-29T07:10:40.000Z",
    price: 1872.2579742372882,
    img: "./assets/tokens/wstETH.svg",
  },
  {
    currency: "YieldUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 1.0290847966101695,
    img: "./assets/tokens/YieldUSD.svg",
  },
  {
    currency: "ZIL",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.01651813559322034,
    img: "./assets/tokens/ZIL.svg",
  },
];
