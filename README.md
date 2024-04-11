Her backend

Currently we're just using supabase edge functions.

## Requirements

Before you start, ensure you have the following tools installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Supabase CLI: [Install Supabase CLI](https://supabase.com/docs/guides/cli)
- VSCode with Deno extension: [VsCode setup](https://docs.deno.com/runtime/manual/references/vscode_deno/), [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
  - (Or another editor) [Set up your Environment](https://docs.deno.com/runtime/manual/getting_started/setup_your_environment)

And then setup your vscode environment for Deno

- `Cmd+Shift+P` to open the command palette, then run `>Deno: Initialize Workspace Configuration`

## Running supabse locally

If you want to run all of the supabase features locally:

```bash
supabase start # Start the local Supabase project
supabase stop  # Stop the local Supabase project
```

## Edge Function Development

To develop and test edge functions locally, you can, but don't necessarily need supabase running.

### Initial setup

rename .env.template to .env and fill out values

### Create a new function

```bash
supabase functions new <function-name> # Create a new function
supabase functions serve # Serve functions locally for testing and display of logs
supabase functions serve <function-name> # Serve an individual function locally
supabase functions deploy <function-name> # Deploy Edge Functions to production

```
