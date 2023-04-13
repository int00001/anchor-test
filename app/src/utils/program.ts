import * as anchor from '@coral-xyz/anchor';
import { AnchorTest } from '../../../target/types/anchor_test';

export const getProgram = (provider: anchor.Provider) => {
  anchor.setProvider(provider);
  const program = anchor.workspace.AnchorTest as anchor.Program<AnchorTest>;
  return program;
};
