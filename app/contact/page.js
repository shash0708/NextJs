import React from 'react'
import Script from 'next/script';
const Contact = () => {
  return (
    <div>
        <Script>
            {`
              alert("Welcome to contact page");
            `}
        </Script>
        i am cotContact
    </div>
  )
}

export default Contact;


export const metadata = {
    title: "Contact Facebook-connect with the world",
    description: "Contact This is facebook and we can connect with the world using facebook",
  };
