```jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const phoneNumber = "59175587828"; // tu número de WhatsApp
  const message = (product) => `https://wa.me/${phoneNumber}?text=Hola, estoy interesado en el producto ${product} de FP PARTS FACTORY SRL.`;

  const productos = [
    { nombre: "Motor de Heladera", descripcion: "Motor de repuesto original.", img: "/motor.jpg" },
    { nombre: "Buje LG", descripcion: "Buje para plato de lavadora LG.", img: "/buje.jpg" },
    { nombre: "Capacitor AC", descripcion: "Capacitor universal para aire acondicionado.", img: "/capacitor.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">FP PARTS FACTORY SRL</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#heladeras">Heladeras</a>
          <a href="#lavadoras">Lavadoras</a>
          <a href="#aires">Aires Acondicionados</a>
          <a href="#industrial">Refrigeración Industrial</a>
          <a href="#camiones">Camiones</a>
          <a href="#rodamientos">Rodamientos</a>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-yellow-400 text-black py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Repuestos originales y garantizados
        </h2>
        <p className="mb-6">Heladeras · Lavadoras · Aires Acondicionados · Más</p>
        <Button
          className="bg-green-500 text-white hover:bg-green-600"
          onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
        >
          📲 Cotiza por WhatsApp
        </Button>
      </motion.section>

      {/* Productos */}
      <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((p, i) => (
          <Card key={i} className="shadow-lg">
            <CardContent className="p-4 flex flex-col items-center">
              <img src={p.img} alt={p.nombre} className="h-40 mb-4 object-contain" />
              <h3 className="text-lg font-semibold mb-2">{p.nombre}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.descripcion}</p>
              <Button
                className="bg-green-500 text-white hover:bg-green-600"
                onClick={() => window.open(message(p.nombre), "_blank")}
              >
                Comprar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Sucursales */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">🏪 Sucursales</h2>
        <ul className="max-w-2xl mx-auto space-y-2 text-center">
          <li>Central Zona Norte – Santa Cruz</li>
          <li>Sucursal #1 – Virgen de Cotoca (Santa Cruz)</li>
          <li>Sucursal #2 – Prefecto Rivas (Santa Cruz)</li>
          <li>Sucursal #3 – Cochabamba (Cochabamba)</li>
          <li>Sucursal #4 – Virgen de Luján (Santa Cruz)</li>
        </ul>
      </section>

      {/* Horarios */}
      <section className="py-8 px-6 text-center">
        <h2 className="text-xl font-bold mb-2">🕒 Horarios de Atención</h2>
        <p>Lunes a Viernes: 8:00 AM – 6:30 PM</p>
        <p>Sábados: 8:00 AM – 3:00 PM</p>
        <p className="text-red-500 font-semibold">Domingos y feriados: CERRADO</p>
      </section>

      {/* Reglas */}
      <section className="bg-white py-8 px-6 text-center">
        <h2 className="text-xl font-bold mb-4">📌 Reglas de Compra</h2>
        <ul className="space-y-2">
          <li className="text-red-500">❌ No se aceptan cambios ni devoluciones</li>
          <li className="text-red-500">❌ No se hacen preventas</li>
          <li className="text-green-600">✅ Verificar que el producto sea el correcto</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 mt-auto">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank"><FaFacebook size={24} /></a>
          <a href="https://instagram.com" target="_blank"><FaInstagram size={24} /></a>
          <a href="https://tiktok.com" target="_blank"><FaTiktok size={24} /></a>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank"><FaWhatsapp size={24} /></a>
        </div>
        <p className="text-center text-sm">© {new Date().getFullYear()} FP PARTS FACTORY SRL - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
```
