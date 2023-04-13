import * as anchor from '@project-serum/anchor';

import idl from '../../../target/idl/anchor_test.json';

export const getProgram = (provider: anchor.Provider) => {
  const programId = new anchor.web3.PublicKey(idl.metadata.address);
  return new anchor.Program(idl, programId, provider);
};
