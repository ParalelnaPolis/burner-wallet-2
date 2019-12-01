import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { xdai, dai, eth } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InjectedGateway, HTTPGateway } from '@burner-wallet/core/gateways';
import ModernUI from '@burner-wallet/modern-ui';
import { ERC20Asset } from '@burner-wallet/assets';

const ppba = new ERC20Asset({
  id: 'ppba',
  name: 'PPBA',
  network: '4919',
  address: '0x9bc5BFFafe1F3Db2C6cB72493B5183E064d85bF8',
});


const core = new BurnerCore({
  signers: [new InjectedSigner(), new LocalSigner()],
  gateways: [
    new InjectedGateway(),
    new HTTPGateway("https://token.paralelnapolis.sk",'4919')
  ],
  assets: [ppba],
});

const BurnerWallet = () =>
  <ModernUI
    core={core}
    plugins={[]}
    title="Paralelna Polis Bratislava"
  />



ReactDOM.render(<BurnerWallet />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
