const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const { coinsToBuy } = req.body;

  if (!coinsToBuy || isNaN(coinsToBuy)) {
    return res.status(400).json({ error: "Invalid coin amount" });
  }

  try {
    const priceInCents = (coinsToBuy / 10) * 100;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${coinsToBuy} Coins`,
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:5173/payment-success?coins=${coinsToBuy}`,
      cancel_url: `http://localhost:5173/payment-cancelled`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error.message);
    res.status(500).json({ error: "Stripe session creation failed" });
  }
};

module.exports = { createCheckoutSession };
