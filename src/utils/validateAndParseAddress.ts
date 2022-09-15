import { ChainId, validateAndParseAddress as validateAndParseAddressCore } from '@namgold/ks-sdk-core'

export const validateAndParseAddress = (address: string) => validateAndParseAddressCore(address, ChainId.MAINNET)
