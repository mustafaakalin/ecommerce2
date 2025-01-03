import { faker } from '@faker-js/faker';
import { Coupon, CouponType } from '../../coupons/entities/coupon.entity';

export const createCoupon = (): Partial<Coupon> => {
    const type = faker.helpers.arrayElement(Object.values(CouponType));
    const startDate = faker.date.soon();
    
    return {
        code: faker.string.alphanumeric(8).toUpperCase(),
        type,
        value: type === CouponType.PERCENTAGE 
            ? faker.number.float({ min: 5, max: 50, fractionDigits: 2 })  // percentage discount
            : faker.number.float({ min: 10, max: 500, fractionDigits: 2 }), // fixed amount discount
        usage_limit: faker.number.int({ min: 10, max: 1000 }),
        used_count: 0,
        starts_at: startDate,
        expires_at: faker.date.between({ 
            from: startDate, 
            to: faker.date.future({ years: 1 }) 
        }),
        is_active: faker.datatype.boolean({ probability: 0.8 })
    };
};