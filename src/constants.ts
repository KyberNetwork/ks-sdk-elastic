export const FACTORY_ADDRESS = '0x0C7369F931a8D809E443c1d4A5DCe663fF888a73'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xd71790a46dff0e075392efbd706356cd5a822a782f46e9859829440065879f81'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  VERY_STABLE = 8,
  VERY_STABLE1 = 10,
  VERY_STABLE2 = 20,
  STABLE = 40,
  MOST_PAIR = 100,
  MOST_PAIR1 = 250,
  MOST_PAIR2 = 300,
  EXOTIC = 1000,
  VOLATILE = 2000,
  RARE = 5000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.VERY_STABLE]: 1,
  [FeeAmount.VERY_STABLE1]: 1,
  [FeeAmount.VERY_STABLE2]: 2,
  [FeeAmount.STABLE]: 8,
  [FeeAmount.MOST_PAIR]: 10,
  [FeeAmount.MOST_PAIR1]: 25,
  [FeeAmount.MOST_PAIR2]: 60,
  [FeeAmount.EXOTIC]: 200,
  [FeeAmount.VOLATILE]: 100,
  [FeeAmount.RARE]: 100
} as const

export const MIN_LIQUIDITY = 100000
