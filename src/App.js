import './App.css';
import { WagmiProvider, http } from 'wagmi'
import {mainnet, arbitrum, polygon, goerli} from "wagmi/chains";
import {
    RainbowKitProvider, getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ConnectButton} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {useAccount, useContractRead} from "wagmi";

function App() {


    const account = useAccount()


    function confirm() {
        console.log('aaaa')
    }

    const config2 = getDefaultConfig({
        appName: 'RainbowKit demo',
        projectId: '',
        chains: [mainnet],
        transports: {
            [mainnet.id]: http(),
        },
    })

    const queryClient = new QueryClient();

    return (
        <WagmiProvider config={config2}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider modalSize="compact">
                    <div className="App">
                        <header className="App-header">
                            <ConnectButton/>
                            <button onClick={() => confirm()}>open metamask</button>
                        </header>
                    </div>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>

    );
}

export default App;
