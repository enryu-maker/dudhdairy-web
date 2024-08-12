import React from "react";

function FAQ() {
  return (
    <div className="w-full h-full bg-blue-50 flex flex-col justify-center items-center p-4 py-16 md:p-8 lg:p-20">
      <div className="border-2 p-4 border-blue-100 w-full h-fit shadow-md bg-white space-y-5 rounded-xl text-justify font-Lato">
        <p className="text-left text-xl font-semibold">
          Frequently Asked Questions (FAQ)
        </p>

        <div className="space-y-4">
          <div>
            <p className="font-semibold">1. How can I place an order?</p>
            <p>
              To place an order with DudhDairy, simply open our app, browse
              through our selection of dairy products, and add your desired
              items to the cart. Once you’ve finished shopping, proceed to
              checkout, enter your delivery details, and complete the payment.
              You will receive an order confirmation and estimated delivery
              time.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              2. What payment methods do you accept?
            </p>
            <p>
              We accept various payment methods including credit/debit cards and
              digital payment services. For a full list of accepted payment
              options, please refer to the payment section in our app.
            </p>
          </div>

          <div>
            <p className="font-semibold">3. How can I track my order?</p>
            <p>
              Once your order is placed, you can track its status through the
              app. Go to the "Orders" section in the app to view real-time
              updates and track your delivery.
            </p>
          </div>

          <div>
            <p className="font-semibold">4. What is your refund policy?</p>
            <p>
              If you are not satisfied with your purchase, you can request a
              refund within [specific time frame, e.g., 7 days] of receiving
              your order. Please refer to our Refund Policy page for detailed
              instructions on how to request a refund.
            </p>
          </div>

          <div>
            <p className="font-semibold">5. Can I modify or cancel my order?</p>
            <p>
              Orders can be modified or canceled within a short period after
              placement. If you need to make changes to your order, please
              contact our customer support team as soon as possible. Once an
              order is processed or out for delivery, changes may not be
              possible.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              6. How do I contact customer support?
            </p>
            <p>
              You can contact our customer support team through the contact
              information provided in the app or by emailing us at [Contact
              Information]. We are here to help with any questions or issues you
              may have.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              7. What should I do if I receive a damaged product?
            </p>
            <p>
              If you receive a damaged product, please contact our customer
              support team immediately. Provide your order number and any
              relevant details or photos of the damage so we can address the
              issue promptly and arrange for a replacement or refund.
            </p>
          </div>

          <div>
            <p className="font-semibold">8. Do you deliver to my area?</p>
            <p>
              DudhDairy delivers to specific local areas. To check if we deliver
              to your location, enter your address in the app during the
              checkout process. If you are outside our delivery area, we
              apologize for any inconvenience and hope to expand our service
              area in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
