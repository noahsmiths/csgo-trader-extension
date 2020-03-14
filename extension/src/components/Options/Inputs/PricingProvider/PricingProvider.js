import React, { useState } from 'react';
import Select from 'components/Select/Select';

import './PricingProvider.css';
import { updatePrices } from 'utils/pricing';

const PricingProvider = ({
  options,
}) => {
  const [aboutProvider, setAboutProvider] = useState(options.csgotrader.description);
  const [aboutMode, setAboutMode] = useState(
    options.csgotrader.pricing_modes.csgotrader.description,
  );

  const selectOptions = [];

  for (const [providerKey, provider] of Object.entries(options)) {
    for (const [modeKey, mode] of Object.entries(provider.pricing_modes)) {
      const textModePart = providerKey === mode ? '' : ` -  ${mode.long}`;
      selectOptions.push({
        key: `${providerKey}.${modeKey}`,
        text: `${provider.long} ${textModePart}`,
      });
    }
  }

  const setStorage = (thisValue) => {
    const pricingProvider = thisValue.split('.')[0];
    const pricingMode = thisValue.split('.')[1];

    setAboutProvider(options[pricingProvider].description);
    setAboutMode(options[pricingProvider].pricing_modes[pricingMode].description);

    chrome.storage.local.set({ pricingProvider, pricingMode }, () => {
      updatePrices();
    });
  };

  const getStorage = () => {
    return new Promise((resolve) => {
      chrome.storage.local.get(['pricingProvider', 'pricingMode'], (result) => {
        const { pricingProvider, pricingMode } = result;

        setAboutProvider(options[pricingProvider].description);
        setAboutMode(options[pricingProvider].pricing_modes[pricingMode].description);

        resolve(`${pricingProvider}.${pricingMode}`);
      });
    });
  };

  return (
    <>
      <Select
        id="pricingProvider"
        foreignChangeHandler={setStorage}
        foreignUseEffect={getStorage}
        options={selectOptions}
      />
      <div className="about">
        <b>About the provider:</b>
        {' '}
        <span>{aboutProvider}</span>
      </div>
      <div>
        <b>About the pricing mode:</b>
        {' '}
        <span>{aboutMode}</span>
      </div>
    </>
  );
};

export default PricingProvider;
