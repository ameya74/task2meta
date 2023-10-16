/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const Moralis = require('moralis').default;
const {EvmChain} = require('moralis/common-evm-utils')
const contractABI = require('../ContractABI/ContactDetails.json');

Moralis.start({
    apiKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQyOWYzYjZiLThlOWItNDViOS04YzYzLTVjMjRmYzc1NjViOSIsIm9yZ0lkIjoiNzg2MzQiLCJ1c2VySWQiOiI3ODI3OCIsInR5cGUiOiJQUk9KRUNUIiwidHlwZUlkIjoiZjExYzY1MGYtOTk2OS00YzcwLWI5MWUtMmNmYjI5N2RhN2ZkIiwiaWF0IjoxNjk3MjU1MDAxLCJleHAiOjQ4NTMwMTUwMDF9.BmmUL7Z3XV4bG2KjOCvVP-tQdsUFMw8Q0IxMTeRJtTI',
});

async function streams() {

    const options = {
      chains: [EvmChain.MUMBAI], // list of blockchains to monitor
      description: 'monitor the contact set event', // your description
      tag: 'contract_Factory', // give it a tag
      abi: contractABI.abi, // abi of the contract
      includeContractLogs: true,
      allAddresses: false,
      topic0: ['ContactSet(address,string,string,string)'], // topic of the event
      webhookUrl:
        'https://86bc-2405-201-1b-2058-40fe-963f-8586-eaca.ngrok-free.app/webhook ', // webhook url to receive events,
    };
    const Newstream = await Moralis.Streams.add(options);

    const { id } = Newstream.toJSON();

    const address = '0x3DB40Aa66fB4bA47094700EFeFa6A0f94bFde315'; //address of the contract deployed on MUmbai testnet
    await Moralis.Streams.addAddress({ address, id })
    
    console.log("Finished");
}
streams(); 