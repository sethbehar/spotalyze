import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';
import { useAuth } from '@clerk/clerk-react';

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_TEST_PUBLISHABLE_KEY
);

export default function Payment() {
  const { getToken } = useAuth();

  const fetchClientSecret = useCallback(async () => {
    // 1) get a Clerk JWT for your backend
    const token = await getToken();
    // 2) call your endpoint with the header
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch client secret');
    const { clientSecret } = await res.json();
    return clientSecret;
  }, [getToken]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
