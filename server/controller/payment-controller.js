import { v4 as uuidv4 } from 'uuid';
import Stripe from 'stripe';
const stripe = new Stripe("sk_test_51MhyVHLnhQZkWK9cnTmJ4cMdOjUNc9Yp0KnYKyLHv4cYufTsREhFp4oXl8JrVi61mNoGmUEGaOmkkoJ6eDWZAuO300RT2X2f3K");


export const addPaymentGateway = async (request, response) =>{

 try {
        const {product,token} = request.body;

        const customer = await stripe.customers.create({
            email : token.email,
            source:token.id

        })

        const key = uuidv4()
        const charge = await stripe.charges.create({
            amount: product.amount*100,
            description: `Purchased : ${product}`,
            currency: 'usd',
            customer: customer.id
        });
  

        return response.status(200).json("pay success");
    } catch (error) {
        console.log("err",error.message)
         response.status(400).json("Error:", error.message);
    }
}

