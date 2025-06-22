// Exemplo de uso das variáveis de ambiente no frontend
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const mercadoPagoToken = import.meta.env.VITE_MERCADOPAGO_TOKEN;

console.log("Firebase config:", firebaseConfig);
console.log("Mercado Pago token:", mercadoPagoToken);
