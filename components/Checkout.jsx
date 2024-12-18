"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { useToast } from "@/hooks/use-toast";
import { checkoutCredits } from "@/lib/actions/transaction.actions";

import { Button } from "./ui/button";

const Checkout = ({ plan, amount, credits, buyerId }) => {
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);

  const onCheckout = async (e) => {
    e.preventDefault();
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    await checkoutCredits(transaction);
  };

  return (
    <form>
      <section>
        <Button
          onClick={onCheckout}
          role="link"
          className="bg-white text-purple-600 hover:bg-gray-100 w-full py-3"
        >
          Upgrade to Pro
        </Button>
      </section>
    </form>
  );
};

export default Checkout;
