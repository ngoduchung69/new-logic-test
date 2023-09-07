import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";

const HomePage = () => {
  const element = useElements();
  const stripe = useStripe();

  const submit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    const data = await fetch(
      "http://localhost:3000/stripe/pay",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "usd",
          amount: 90000,
        }),
      }
    ).then((result) => result.json());
    console.log({ data });

    if (!error) {
      const { id } = paymentMethod;
      const {paymentIntent} = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: id,
        save_payment_method: true,
      });
      console.log({ paymentIntent });
      if(paymentIntent) {
        const createReuseRecord = await fetch(
          "http://localhost:3000/stripe/create-reuse-record",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              user_id: 1,
              payment_method_id: paymentIntent.payment_method,
              customer_id: data.customer
            }),
          }
        ).then((result) => result.json());

        console.log({createReuseRecord})
      }
    }


    // const data = await fetch('http://localhost:3000/payments/create-checkout-session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     paymentMethodType: 'card',
    //     currency: 'usd',
    //   })
    // }).then(result => result.json())

    // console.log({data})

    // const data2 = await stripe.confirmCardPayment(data.client_secret, {
    //   payment_method: {
    //     card: element.getElement(CardElement)
    //   }
    // })

    // console.log({paymentIntent: data2})
  };

  const reusePayment = async () => {
    const reuse = await fetch(
      "http://localhost:3000/stripe/pay",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_id: 1,
          paymentMethodType: "card",
          currency: "usd",
          amount: 70000,
        }),
      }
    ).then((result) => result.json());

    console.log({reuse})
  }
  return (
    <div>
      <form
        action="/create-checkout-session"
        style={{ width: "1000px" }}
        onSubmit={submit}
        id="payment-form"
      >
        <CardElement />
        <button>Pay for the first Time</button>
      </form>

      <button onClick={reusePayment}>reuse payment for the second time</button>
    </div>
  );
};

export default HomePage;
