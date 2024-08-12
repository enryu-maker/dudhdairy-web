import React from "react";

function Privacy() {
  return (
    <div className="md:w-screen md:h-screen w-full h-full bg-blue-50 flex flex-col justify-center items-center p-4 md:p-8 lg:p-20 pt-20">
      <div className="border-2 p-4 border-blue-100 w-full h-fit shadow-md bg-white space-y-5 rounded-xl text-justify font-Lato">
        <p className="text-left text-xl font-semibold">Privacy Policy</p>
        <p>
          At DudhDairy, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and protect the information you provide when
          using our mobile application and related services. By using DudhDairy,
          you agree to the collection and use of your information as described
          in this policy. We collect various types of information to provide and
          improve our services, including personal details such as your name,
          address, contact information, and payment details. This information is
          essential for processing your orders, ensuring timely delivery, and
          providing customer support.
        </p>
        <p>
          In addition to personal data, we may also collect information about
          your device, IP address, and browsing behavior to enhance the
          functionality and user experience of DudhDairy. This data helps us
          understand how you interact with our app, allowing us to tailor our
          services to better meet your needs. We use cookies and similar
          technologies to track your activity and preferences, ensuring a more
          personalized experience. By continuing to use DudhDairy, you consent
          to our use of these tracking technologies.
        </p>
        <p>
          We are committed to safeguarding your information and employ
          appropriate security measures to protect it from unauthorized access,
          loss, or misuse. However, no security system is foolproof, and we
          cannot guarantee the absolute security of your data. We will never
          share your personal information with third parties unless necessary to
          provide our services, comply with legal obligations, or with your
          explicit consent. In some cases, we may share your information with
          trusted service providers who assist us in operating DudhDairy, but
          these providers are contractually obligated to protect your data and
          use it only for the purposes we specify.
        </p>
        <p>
          You have the right to access, correct, or delete your personal
          information at any time. If you wish to exercise these rights or have
          any questions or concerns about our privacy practices, please contact
          us at [Contact Information]. We may update this Privacy Policy from
          time to time to reflect changes in our practices, technology, or legal
          requirements. Any significant changes will be communicated through our
          app or via email, so we encourage you to review this policy regularly
          to stay informed about how we protect your information.
        </p>
        <p>
          Thank you for trusting DudhDairy with your personal information. We
          are dedicated to providing you with a safe and secure experience while
          delivering the highest quality of service.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
