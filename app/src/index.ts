import { Connection } from '@solana/web3.js';
import * as dotenv from 'dotenv';

import { getProgram, getProvider, loadWallet } from 'utils';

dotenv.config();

const main = async () => {
  const connection = new Connection(process.env.ALCHEMY_SOL_DEV_HTTPS!);
  const wallet = loadWallet();

  const provider = getProvider(connection, wallet);
  const program = getProgram(provider);

  const tx = await program.methods.sayHello().rpc();
  console.log(tx);
};

main();
