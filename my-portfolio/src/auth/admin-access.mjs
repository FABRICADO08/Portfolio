export function isPortfolioOwner(user) {
  return Boolean(user?.confirmedAt && user.email?.toLowerCase() === 'anelefabricado@gmail.com')
}
