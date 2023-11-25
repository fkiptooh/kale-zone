import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KE ?? '',
    {
        apiVersion: '2023-10-16',
        appInfo: {
            name: 'Kale-zone',
            version: '0.1.0'
        }
    }
)