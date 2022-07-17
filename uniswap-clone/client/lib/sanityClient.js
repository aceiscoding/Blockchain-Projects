import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'bafl2zf1',
    dataset: 'production',
    apiVersion: 'v1',
    token:
      'skdxWve6xby8CM2kP5pTN3oq1FChsL9nwr5psdWBbCDTTBeDHOakyNigL6dgQ0G8XBqgeBWfs8vVIRn8VYiT7hqimVqq1BM7tkxMcUoOzeCYYrn8QlQRGveJriABBFKkDrdW6LYJLhQPVcs3ccqRo6XKLDG1Oula48wdcxQ0ye2c6jcpscgb',
    useCdn: false,
  })