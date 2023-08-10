import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TokenContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}


export const TokenProvider = ({ children }) => {

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install metamask"); 

        const accounts = await ethereum.request({ method: `eth_accounts` });

        console.log(accounts);
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TokenContext.Provider value={{  }}>
            {children}
        </TokenContext.Provider>
    )
}