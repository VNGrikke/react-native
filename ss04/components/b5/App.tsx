import React, { useState } from "react";
import { View } from "react-native";
import CurrencyInput from "./CurrencyInput";

const EXCHANGE_RATE = 25000; 

export default function App() {
  const [vnd, setVnd] = useState("");
  const [usd, setUsd] = useState("");

  const handleVndChange = (value: string) => {
    setVnd(value);

    const number = parseFloat(value) || 0;
    setUsd((number / EXCHANGE_RATE).toFixed(2).toString());
  };

  const handleUsdChange = (value: string) => {
    setUsd(value);

    const number = parseFloat(value) || 0;
    setVnd((number * EXCHANGE_RATE).toString());
  };

  return (
    <View>
      <CurrencyInput label="VND" value={vnd} onChange={handleVndChange} />
      <CurrencyInput label="USD" value={usd} onChange={handleUsdChange} />
    </View>
  );
}

