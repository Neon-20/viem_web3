import {createClient, createPublicClient, formatEther, Hex, http} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import {arbitrumSepolia} from "viem/chains"
import dotenv from "dotenv";

dotenv.config();

const private_key = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(private_key as Hex);



(async()=>{
    const client = createPublicClient({
        chain:arbitrumSepolia,
        transport: http(process.env.API_URL),
    })
    const balance = await client.getBalance({
        address: account.address,
    })
    const ether = formatEther(balance);
    // console.log(ether)

    const nonce = await client.getTransactionCount({
        address:account.address
    })
    // console.log(nonce);
})
();
// cool