import { createWalletClient, formatEther, Hex, http, publicActions} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import {arbitrumSepolia} from "viem/chains"
import dotenv from "dotenv";
import funJson from "../artifacts/Fun.json";

dotenv.config();

const { abi,bin } = funJson["contracts"]["contracts/Fun.sol:Fun"];


const private_key = process.env.PRIVATE_KEY;

const account = privateKeyToAccount(private_key as Hex);

(async()=>{
    const client = createWalletClient({
        account,
        chain:arbitrumSepolia,
        transport: http(process.env.API_URL),
    }).extend(publicActions)

    // console.log(client.account.publicKey);

    const hash = await client.deployContract({
    account,
    abi,
    bytecode:`0x${bin}`,
    })
    console.log(hash);
})
();

