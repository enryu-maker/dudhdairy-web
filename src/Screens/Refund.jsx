import React from "react";

function Refund() {
  return (
    <div className="w-screen h-screen bg-blue-50 flex flex-col justify-center items-center p-4 md:p-8 lg:p-20">
      <div className="border-2 p-4 border-blue-100 w-full h-fit shadow-md bg-white space-y-5 rounded-xl text-justify font-Lato">
        <p className="text-left text-xl font-semibold">Refund Policy</p>
        <p>
          Thank you for choosing DudhDairy. We strive to provide high-quality
          dairy products and excellent customer service. However, if you are not
          completely satisfied with your purchase, we offer a refund policy to
          ensure your satisfaction.
        </p>
        <p>
          If you wish to request a refund, please contact our customer support
          team within 7 days of receiving your order. Refunds will be processed
          for products that are damaged or not as described. We require a valid
          reason for the refund and may ask for photographic evidence of any
          issues with the products.
        </p>
        <p>
          To initiate a refund, please provide your order number, the reason for
          the refund, and any supporting evidence to [Contact Information]. Once
          your request is received and reviewed, we will process the refund
          according to our refund procedures. Refunds will be issued to the
          original payment method used at the time of purchase.
        </p>
        <p>
          Please note that refunds may take 5-10 business days to be processed
          and reflected in your account. We are not responsible for any delays
          caused by your bank or payment provider.
        </p>
        <p>
          We reserve the right to modify or update this Refund Policy at any
          time. Any changes will be communicated through our app or via email,
          so we encourage you to review this policy regularly. If you have any
          questions or concerns about our refund policy, please contact us at
          [Contact Information].
        </p>
        <p>
          Thank you for your understanding and cooperation. We are committed to
          ensuring your satisfaction with our products and services.
        </p>
      </div>
    </div>
  );
}

export default Refund;
