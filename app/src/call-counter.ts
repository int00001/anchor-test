import { Connection, PublicKey } from '@solana/web3.js';
import * as dotenv from 'dotenv';

import { COUNTER, PROGRAM_ID } from 'config';
import { getProgram, getProvider, loadWallet } from 'utils';

dotenv.config();

const main = async () => {
  const connection = new Connection(process.env.ALCHEMY_SOL_DEV_HTTPS!);
  const wallet = loadWallet();

  const provider = getProvider(connection, wallet);
  const program = getProgram(provider, PROGRAM_ID);

  const counterAccount = new PublicKey(COUNTER);

  // increment counter
  const tx = await program.methods
    .sayHello()
    .accounts({ counter: counterAccount })
    .rpc();
  console.log(tx);

  // read counter account data
  const data = await program.account.counter.fetch(counterAccount);
  console.log(data.count.toNumber());
};

main();
