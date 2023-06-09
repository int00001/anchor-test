use anchor_lang::prelude::*;

declare_id!("5nW66C8SHfsfUBbsAm9bRcbpn9tLHESjFSaJUTyGrjsF");

#[program]
pub mod anchor_test {
    use super::*;

    pub fn say_hello(ctx: Context<SayHello>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count += 1;
        msg!("hi");
        Ok(())
    }

    pub fn initialize_counter(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        counter.count = 0;
        msg!("counter init");
        Ok(())
    }
}

// 1 public key
// counter account (will mutate)
#[derive(Accounts)]
pub struct SayHello<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
}

#[account]
pub struct Counter {
    count: u64,
}

// 3 public keys
// counter - account that will store count
// signer - payer
// system_program - will own counter account
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 8)]
    pub counter: Account<'info, Counter>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
