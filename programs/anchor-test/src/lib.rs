use anchor_lang::prelude::*;

declare_id!("5nW66C8SHfsfUBbsAm9bRcbpn9tLHESjFSaJUTyGrjsF");

#[program]
pub mod anchor_test {
    use super::*;

    pub fn say_hello(_ctx: Context<SayHello>) -> Result<()> {
        msg!("hi");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct SayHello {}
