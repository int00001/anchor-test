import { Connection, Keypair } from '@solana/web3.js';
import * as dotenv from 'dotenv';

import { PROGRAM_ID } from 'config';
import { getProgram, getProvider, loadWallet } from 'utils';

dotenv.config();

const main = async () => {
  const connection = new Connection(process.env.ALCHEMY_SOL_DEV_HTTPS!);
  const wallet = loadWallet();

  const provider = getProvider(connection, wallet);
  const program = getProgram(provider, PROGRAM_ID);

  const tx = await program.methods.sayHello().rpc();
  console.log(tx);

  // new keypair for counter acc
  const counterAccount = Keypair.generate();

  // initialize counter
  const sig = await program.methods
    .initializeCounter()
    .accounts({ counter: counterAccount.publicKey })
    .signers([counterAccount])
    .rpc();
  console.log(sig);
};

main();
