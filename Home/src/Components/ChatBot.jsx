import { useState } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to DREAM ESCAPE TOURS. I'm Saanvi, How can I help you?",
    },
  ]);

  const getBotReply = (userMessage) => {
    const text = userMessage.toLowerCase().trim();

    // ================= GREETING =================

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey") ||
      text.includes("good morning") ||
      text.includes("good afternoon") ||
      text.includes("good evening")
    ) {
      return "Hello! Welcome to DREAM ESCAPE TOURS 🌍✈️ How can I help you with your travel plans?";
    }


    // ================= ABOUT DREAM ESCAPE =================

    if (
      text.includes("about dream escape") ||
      text.includes("about dreamscape") ||
      text.includes("who are you") ||
      text.includes("what is dream escape")
    ) {
      return "DREAM ESCAPE TOURS is a tourism website that helps travellers explore beautiful destinations, tour packages, honeymoon trips, wildlife experiences, and trekking adventures.";
    }


    // ================= DESTINATIONS =================

    if (
      text.includes("destination") ||
      text.includes("destinations") ||
      text.includes("place") ||
      text.includes("places") ||
      text.includes("location")
    ) {
      return "Our popular destinations include Kashmir, Goa, Tawang, Mussoorie, Leh Ladakh, Kedarkantha, Jim Corbett, Kaziranga, and Anamudi.";
    }


    // ================= KASHMIR =================

    if (
      text.includes("kashmir") ||
      text.includes("srinagar")
    ) {
      return "Kashmir is known as the 'Paradise on Earth' 🏔️. You can enjoy beautiful valleys, Dal Lake, houseboats, mountains, and breathtaking scenery.";
    }


    // ================= GOA =================

    if (
      text.includes("goa") ||
      text.includes("beach")
    ) {
      return "Goa is perfect for beaches, relaxation, nightlife, water activities, and romantic getaways 🏖️. It is also a popular honeymoon destination.";
    }


    // ================= TAWANG =================

    if (
      text.includes("tawang") ||
      text.includes("arunachal")
    ) {
      return "Tawang is a beautiful Himalayan destination famous for monasteries, mountain views, lakes, waterfalls, and peaceful landscapes.";
    }


    // ================= MUSSOORIE =================

    if (
      text.includes("mussoorie") ||
      text.includes("queen of hills")
    ) {
      return "Mussoorie, known as the Queen of the Hills, offers beautiful mountain views, waterfalls, pleasant weather, and scenic attractions.";
    }


    // ================= LEH LADAKH =================

    if (
      text.includes("leh") ||
      text.includes("ladakh")
    ) {
      return "Leh Ladakh is perfect for mountain adventures 🏔️. You can explore high-altitude landscapes, monasteries, lakes, valleys, and scenic mountain roads.";
    }


    // ================= KEDARKANTHA =================

    if (
      text.includes("kedarkantha") ||
      text.includes("snow trek")
    ) {
      return "Kedarkantha is one of India's popular winter treks ❄️. It is known for snowy trails, beautiful forests, mountain views, and an exciting trekking experience.";
    }


    // ================= ANAMUDI =================

    if (
      text.includes("anamudi") ||
      text.includes("anaimudi")
    ) {
      return "Anamudi is the highest peak in South India. The trek offers beautiful forests, grasslands, misty mountain views, and an unforgettable adventure.";
    }


    // ================= JIM CORBETT =================

    if (
      text.includes("jim corbett") ||
      text.includes("corbett") ||
      text.includes("tiger safari")
    ) {
      return "Jim Corbett National Park is famous for wildlife safaris 🐅, Bengal tigers, elephants, forests, rivers, and amazing wildlife experiences.";
    }


    // ================= KAZIRANGA =================

    if (
      text.includes("kaziranga") ||
      text.includes("one horned") ||
      text.includes("rhino")
    ) {
      return "Kaziranga National Park is famous for the one-horned rhinoceros 🦏. It is also home to elephants, tigers, wild water buffaloes, and many species of birds.";
    }


    // ================= PACKAGES =================

    if (
      text.includes("package") ||
      text.includes("packages") ||
      text.includes("tour") ||
      text.includes("trip") ||
      text.includes("holiday")
    ) {
      return "We provide tour packages to beautiful destinations. Explore our destination cards to discover trekking, wildlife, honeymoon, and adventure packages.";
    }


    // ================= HONEYMOON =================

    if (
      text.includes("honeymoon") ||
      text.includes("romantic") ||
      text.includes("couple")
    ) {
      return "For a romantic getaway, we recommend Kashmir and Goa 💕. Kashmir offers mountains and peaceful scenery, while Goa is perfect for beaches and relaxation.";
    }


    // ================= TREKKING =================

    if (
      text.includes("trek") ||
      text.includes("trekking") ||
      text.includes("hiking")
    ) {
      return "For trekking adventures, explore Kedarkantha and Anamudi. Kedarkantha is especially popular for snowy winter trekking, while Anamudi offers a beautiful South Indian mountain experience.";
    }


    // ================= WILDLIFE =================

    if (
      text.includes("wildlife") ||
      text.includes("safari") ||
      text.includes("animal") ||
      text.includes("animals")
    ) {
      return "For wildlife tourism, explore Jim Corbett and Kaziranga 🐅. You can enjoy wildlife safaris and discover incredible animals in their natural habitats.";
    }


    // ================= BEST TIME =================

    if (
      text.includes("best time") ||
      text.includes("best season") ||
      text.includes("when to visit") ||
      text.includes("when should i visit")
    ) {
      return "The best time depends on the destination. Winter is great for snow destinations like Kedarkantha, while Kashmir, Goa, and wildlife destinations have their own ideal seasons.";
    }


    // ================= BOOKING =================

    if (
      text.includes("book") ||
      text.includes("booking") ||
      text.includes("reserve") ||
      text.includes("reservation")
    ) {
      return "To book a tour, open the Booking page from the navigation menu and fill in the required details. Your booking information will be submitted through the booking form.";
    }


    // ================= BOOKING PROCESS =================

    if (
      text.includes("how to book") ||
      text.includes("how can i book") ||
      text.includes("booking process")
    ) {
      return "Booking is simple! Go to the Booking page, enter your booking ID, customer details, package ID, travel date, number of travellers, ID proof, and phone number, then submit the form.";
    }


    // ================= PRICE =================

    if (
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("fee") ||
      text.includes("expensive") ||
      text.includes("cheap")
    ) {
      return "Tour prices depend on the destination, travel date, package, and number of travellers. Please contact our travel team for the exact price.";
    }


    // ================= TRAVELLERS =================

    if (
      text.includes("traveller") ||
      text.includes("travelers") ||
      text.includes("travellers") ||
      text.includes("group")
    ) {
      return "You can enter the number of travellers in the Booking page while making your reservation.";
    }


    // ================= CONTACT =================

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("email") ||
      text.includes("support")
    ) {
      return "You can find our contact information in the Contact section of the website.";
    }


    // ================= WEBSITE NAVIGATION =================

    if (
      text.includes("website") ||
      text.includes("page") ||
      text.includes("navigate") ||
      text.includes("navigation") ||
      text.includes("help")
    ) {
      return "I can help you explore destinations, find tour packages, learn about trekking and wildlife experiences, understand booking steps, and navigate the DREAM ESCAPE TOURS website.";
    }


    // ================= THANK YOU =================

    if (
      text.includes("thank") ||
      text.includes("thanks")
    ) {
      return "You're welcome! 😊 Have a wonderful journey with DREAM ESCAPE TOURS!";
    }


    // ================= GOODBYE =================

    if (
      text.includes("bye") ||
      text.includes("goodbye") ||
      text.includes("see you")
    ) {
      return "Goodbye! 👋 Have a safe and unforgettable journey!";
    }


    // ================= DEFAULT =================

    return "I can help with tourism, travel destinations, tour packages, trekking, wildlife, honeymoon trips, bookings, and navigating the DREAM ESCAPE TOURS website. 🌍 For More Information Please call this Number -: 9074114005 or 7034373497";
  };
  const sendMessage = () => {
  if (message.trim() === "") {
    return;
  }

  const userMessage = {
    sender: "user",
    text: message
  };

  const botMessage = {
    sender: "bot",
    text: getBotReply(message)
  };

  setMessages((prevMessages) => [
    ...prevMessages,
    userMessage,
    botMessage
  ]);

  setMessage("");
};

 

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };


  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "×" : "💬"}
      </button>


      {isOpen && (
        <div className="chatbot">

          <div className="chatbot-header">
            <h5>Saanvi</h5>

            <button onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>


          <div className="chatbot-body">

            {messages.map((chat, index) => (
              <div
                key={index}
                className={
                  chat.sender === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
              >
                {chat.text}
              </div>
            ))}

          </div>


          <div className="chatbot-input">

            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default ChatBot;