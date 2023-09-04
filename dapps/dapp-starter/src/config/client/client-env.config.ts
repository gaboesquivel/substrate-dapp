export const clientEnv = {
  appName: "Substrate dApp",
  jwtKey: "substrate-dapp",
  debug: import.meta.env.DEV,
  loginMessage: "Login to dBoard",
  baseUrl: import.meta.env.BASE_URL,
  services: {
    onramper: {
      key: import.meta.env.VITE_ONRAMPER_KEY as string || '',
    },
    phoneLookup: {
      rpc: import.meta.env.VITE_PHONE_LOOKUP_RPC as string || '',
      key: import.meta.env.VITE_PHONE_LOOKUP_API_KEY as string || '',
    },
    eosio: {
      rpc: import.meta.env.VITE_EOSIO_API_RPC as string || '',
    }
  },
  analytics: {
    google: import.meta.env.VITE_GOOGLE_ANALYTICS as string || '',
    sentry: (import.meta.env.VITE_SENTRY_DNS || ',').split(',') as string[],
  },
  features: {

  },
} as const
