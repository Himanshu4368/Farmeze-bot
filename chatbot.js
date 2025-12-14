// // /* ===== NAVBAR TOGGLE ===== */
// // function toggleMenu() {
// //   document.getElementById("nav").classList.toggle("show");
// // }

// // /* ===== CHATBOT ELEMENTS ===== */
// // const chatbot = document.getElementById("chatbot");
// // const messages = document.getElementById("messages");

// // const prices = {
// //   Potato: 30,
// //   Onion: 25,
// //   Tomato: 20
// // };

// // let cart = [];
// // let currentProduct = "";

// // /* ===== OPEN / CLOSE ===== */
// // function openChat() {
// //   chatbot.classList.remove("hidden");
// //   messages.innerHTML = "";
// //   cart = [];

// //   bot("Hi 👋 Welcome to Farmeze 🌿");
// //   botOptions([
// //     { text: "📋 View Prices", action: showMenu },
// //     { text: "🛒 Order Vegetables", action: showProducts },
// //     { text: "💳 Checkout", action: checkout }
// //   ]);
// // }

// // function closeChat() {
// //   chatbot.classList.add("hidden");
// // }

// // /* ===== MESSAGE HELPERS ===== */
// // function bot(text) {
// //   const div = document.createElement("div");
// //   div.className = "bot-msg";
// //   div.innerText = text;
// //   messages.appendChild(div);
// //   scrollDown();
// // }

// // function user(text) {
// //   const div = document.createElement("div");
// //   div.className = "user-msg";
// //   div.innerText = text;
// //   messages.appendChild(div);
// //   scrollDown();
// // }

// // /* ===== BOT OPTIONS INSIDE CHAT ===== */
// // function botOptions(optionsArr) {
// //   const wrapper = document.createElement("div");
// //   wrapper.className = "bot-msg";

// //   optionsArr.forEach(opt => {
// //     const btn = document.createElement("button");
// //     btn.innerText = opt.text;
// //     btn.style.margin = "6px 6px 0 0";
// //     btn.onclick = () => {
// //       user(opt.text);
// //       opt.action();
// //     };
// //     wrapper.appendChild(btn);
// //   });

// //   messages.appendChild(wrapper);
// //   scrollDown();
// // }

// // /* ===== FLOWS ===== */
// // function showMenu() {
// //   Object.keys(prices).forEach(p => {
// //     bot(`${p} – ₹${prices[p]} / kg`);
// //   });

// //   botOptions([
// //     { text: "🛒 Order Vegetables", action: showProducts },
// //     { text: "⬅ Back", action: openChat }
// //   ]);
// // }

// // function showProducts() {
// //   bot("Please select a vegetable:");

// //   botOptions(
// //     Object.keys(prices).map(p => ({
// //       text: p,
// //       action: () => selectProduct(p)
// //     }))
// //   );
// // }

// // function selectProduct(p) {
// //   currentProduct = p;
// //   bot(`How many kg of ${p}?`);

// //   botOptions(
// //     [1, 2, 3, 5].map(q => ({
// //       text: `${q} kg`,
// //       action: () => addToCart(q)
// //     }))
// //   );
// // }

// // function addToCart(q) {
// //   const total = q * prices[currentProduct];
// //   cart.push({ product: currentProduct, qty: q, total });

// //   bot(`✅ ${currentProduct} (${q}kg) added to cart`);

// //   botOptions([
// //     { text: "➕ Add More", action: showProducts },
// //     { text: "💳 Checkout", action: checkout }
// //   ]);
// // }

// // function checkout() {
// //   if (cart.length === 0) {
// //     bot("🛒 Your cart is empty");
// //     botOptions([{ text: "Order Now", action: showProducts }]);
// //     return;
// //   }

// //   let sum = 0;
// //   cart.forEach(i => (sum += i.total));

// //   bot(`🧾 Total Amount: ₹${sum}`);

// //   botOptions([
// //     { text: "✅ Done", action: closeChat }
// //   ]);
// // }

// // /* ===== AUTO SCROLL ===== */
// // function scrollDown() {
// //   messages.scrollTop = messages.scrollHeight;
// // }
// /* ===== NAVBAR TOGGLE ===== */
// function toggleMenu() {
//   document.getElementById("nav").classList.toggle("show");
// }

// /* ===== CHATBOT ELEMENTS ===== */
// const chatbot = document.getElementById("chatbot");
// const messages = document.getElementById("messages");

// /* ===== PRODUCT PRICES ===== */
// const prices = {
//   Potato: 30,
//   Onion: 25,
//   Tomato: 20
// };

// let cart = [];
// let currentProduct = "";

// /* ===== OPEN & CLOSE CHATBOT ===== */
// function openChat() {
//   chatbot.classList.remove("hidden"); // Show chatbot only on click
//   messages.innerHTML = "";
//   cart = [];

//   bot("Hi 👋 Welcome to Farmeze 🌿");
//   showMainOptions();
// }

// function closeChat() {
//   chatbot.classList.add("hidden"); // Hide chatbot
// }

// /* ===== BOT MESSAGE ===== */
// function bot(text) {
//   const div = document.createElement("div");
//   div.className = "bot-msg";
//   div.innerText = text;
//   messages.appendChild(div);
//   messages.scrollTop = messages.scrollHeight;
// }

// /* ===== BOT MESSAGE WITH OPTIONS (IN CHAT) ===== */
// function botWithOptions(text, btns) {
//   const div = document.createElement("div");
//   div.className = "bot-msg";

//   const msg = document.createElement("div");
//   msg.innerText = text;
//   div.appendChild(msg);

//   btns.forEach(b => {
//     const btn = document.createElement("button");
//     btn.innerText = b.text;
//     btn.onclick = b.action;
//     div.appendChild(btn);
//   });

//   messages.appendChild(div);
//   messages.scrollTop = messages.scrollHeight;
// }

// /* ===== MAIN OPTIONS ===== */
// function showMainOptions() {
//   botWithOptions("What would you like to do? 😊", [
//     { text: "📋 View Prices", action: showMenu },
//     { text: "🛒 Order Vegetables", action: showProducts },
//     { text: "💳 Checkout", action: checkout }
//   ]);
// }

// /* ===== SHOW MENU ===== */
// function showMenu() {
//   Object.keys(prices).forEach(p => 
//     bot(`${p} – ₹${prices[p]}/kg`)
//   );
//   showMainOptions();
// }

// /* ===== SHOW PRODUCTS ===== */
// function showProducts() {
//   botWithOptions("Select a vegetable 🥦", 
//     Object.keys(prices).map(p => ({
//       text: p,
//       action: () => selectProduct(p)
//     }))
//   );
// }

// /* ===== SELECT PRODUCT ===== */
// function selectProduct(p) {
//   currentProduct = p;
//   botWithOptions(`How many kg of ${p} would you like?`, 
//     [1,2,3,5].map(q => ({
//       text: `${q} kg`,
//       action: () => addToCart(q)
//     }))
//   );
// }

// /* ===== ADD TO CART ===== */
// function addToCart(q) {
//   const total = q * prices[currentProduct];
//   cart.push({ product: currentProduct, quantity: q, total });
//   bot(`${currentProduct} ${q}kg added to your cart 🛒`);
//   showMainOptions();
// }

// /* ===== CHECKOUT ===== */
// function checkout() {
//   if (cart.length === 0) {
//     bot("Your cart is empty 😅. Please add some vegetables first.");
//     showMainOptions();
//     return;
//   }

//   let sum = 0;
//   cart.forEach(i => sum += i.total);

//   bot(`🧾 Your total amount: ₹${sum}`);
//   bot("Thank you for ordering! 🌿");

//   botWithOptions("Anything else?", [
//     { text: "Done", action: closeChat }
//   ]);
// }
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// ================= ELEMENTS =================
const chatbot = document.getElementById("chatbot");
const messages = document.getElementById("messages");

// ================= DATA =================
const prices = {
  Potato: 30,
  Onion: 25,
  Tomato: 20
};

let cart = [];
let currentProduct = "";
let phone = "";
let email = "";
let address = "";
let payment = "";
let orderId = "";

// ================= UTILITIES =================
function generateOrderId() {
  const d = new Date();
  return `FMZ-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,"0")}${String(d.getDate()).padStart(2,"0")}-${Math.floor(1000 + Math.random()*9000)}`;
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.total, 0);
}

// ================= UI HELPERS =================
function openChat() {
  chatbot.classList.remove("hidden");
  messages.innerHTML = "";

  cart = [];
  phone = "";
  email = "";
  address = "";
  payment = "";
  orderId = "";

  bot("Hi 👋 Welcome to Farmeze");
  showMainOptions();
}

function closeChat() {
  chatbot.classList.add("hidden");
}

function bot(text) {
  const div = document.createElement("div");
  div.className = "bot-msg";
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function user(text) {
  const div = document.createElement("div");
  div.className = "user-msg";
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

/* ===== BOT MESSAGE WITH OPTIONS (INSIDE CHAT) ===== */
function botWithOptions(text, btns) {
  const div = document.createElement("div");
  div.className = "bot-msg";

  const msg = document.createElement("div");
  msg.innerText = text;
  div.appendChild(msg);

  btns.forEach(b => {
    const btn = document.createElement("button");
    btn.innerText = b.text;
    btn.onclick = b.action;
    div.appendChild(btn);
  });

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

/* ===== BOT MESSAGE WITH TEXT INPUT ===== */
function botWithInput(placeholder, callback) {
  const div = document.createElement("div");
  div.className = "bot-msg";

  const input = document.createElement("input");
  input.placeholder = placeholder;
  input.className = "option-btn";
  input.style.width = "100%";

  input.onkeypress = e => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      callback(input.value.trim());
    }
  };

  div.appendChild(input);
  messages.appendChild(div);
  input.focus();
  messages.scrollTop = messages.scrollHeight;
}

// ================= FLOWS =================
function showMainOptions() {
  botWithOptions("What would you like to do?", [
    { text: "📋 View Prices", action: showMenu },
    { text: "🥔 Order Vegetables", action: showProducts },
    { text: "🛒 Checkout", action: checkout }
  ]);
}

function showMenu() {
  bot("📋 Today’s Fresh Prices:");
  Object.keys(prices).forEach(p =>
    bot(`${p} – ₹${prices[p]} / kg`)
  );
  showMainOptions();
}

function showProducts() {
  botWithOptions("Select a vegetable:", 
    Object.keys(prices).map(p => ({
      text: p,
      action: () => selectProduct(p)
    }))
  );
}

function selectProduct(product) {
  currentProduct = product;
  user(product);

  botWithOptions("Select quantity (kg):",
    [1,2,3,5].map(q => ({
      text: `${q} kg`,
      action: () => addToCart(q)
    }))
  );
}

function addToCart(qty) {
  const total = qty * prices[currentProduct];
  cart.push({ product: currentProduct, qty, total });
  bot(`✅ ${currentProduct} ${qty}kg added (₹${total})`);
  showMainOptions();
}

// ================= CHECKOUT FLOW =================
function checkout() {
  if (cart.length === 0) {
    bot("🛒 Your cart is empty");
    return showMainOptions();
  }

  orderId = generateOrderId();

  bot("📦 Order Summary:");
  cart.forEach(i => bot(`${i.product} ${i.qty}kg = ₹${i.total}`));
  bot(`💰 Total: ₹${cartTotal()}`);
  bot(`🆔 Order ID: ${orderId}`);

  bot("Enter your phone number:");
  botWithInput("10-digit phone number", handlePhone);
}

function handlePhone(value) {
  if (!/^[0-9]{10}$/.test(value)) {
    bot("❌ Invalid phone number");
    return botWithInput("10-digit phone number", handlePhone);
  }
  phone = value;
  user(phone);

  bot("Enter your email address:");
  botWithInput("example@email.com", handleEmail);
}

function handleEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    bot("❌ Invalid email");
    return botWithInput("example@email.com", handleEmail);
  }
  email = value;
  user(email);

  bot("Enter delivery address:");
  botWithInput("Your address", handleAddress);
}

function handleAddress(value) {
  address = value;
  user(address);

  botWithOptions("Select payment method:", [
    { text: "💵 Cash on Delivery", action: () => finalizeOrder("COD") },
    { text: "📱 UPI", action: () => finalizeOrder("UPI") }
  ]);
}

function finalizeOrder(method) {
  payment = method;

  bot("✅ Order Confirmed!");
  bot(`🆔 Order ID: ${orderId}`);
  bot(`💰 Total: ₹${cartTotal()}`);
  bot(`💳 Payment: ${payment}`);
  bot("🚚 We’ll deliver today");

  saveOrderToSheet();

  botWithOptions("Done", [
    { text: "✔ Close", action: closeChat }
  ]);
}

// ================= GOOGLE SHEETS =================
function saveOrderToSheet() {
  fetch("https://script.google.com/macros/s/AKfycbyZrT1kENp3KHcEDdC1H92Z3JchFRxQp-EBt2_czgTdF7lZkoFZAG9hlqtoinv7aD6x1A/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      orderId,
      phone,
      email,
      address,
      items: cart.map(i => `${i.product} ${i.qty}kg`).join(", "),
      total: cartTotal(),
      payment
    })
  });

  console.log("✅ Order sent to Google Sheets");
}
/* ================= SCROLL REVEAL ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animate-item");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  animatedItems.forEach(item => observer.observe(item));
});
