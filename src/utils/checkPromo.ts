export const promoCodes = [{ promo: '4f46gsg-g5h56dh', discount: 100 }]

export const checkPromo = (promo: string) => {
	const promoData = promoCodes.find(ob => ob.promo === promo)
	return promoData ? promoData.discount : 0
}
