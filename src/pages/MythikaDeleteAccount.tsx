import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import mythikaIcon from "@/assets/mythika-icon.webp";

const MythikaDeleteAccount = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/mythika">
              <Button variant="ghost" size="sm" className="text-zinc-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <Link to="/mythika" className="flex items-center gap-2 ml-4">
              <img src={mythikaIcon} alt="Mythika Icon" className="w-8 h-8 rounded-xl" />
              <span className="text-xl font-bold">Mythika</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Eliminar cuenta
          </h1>
        </div>

        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              ⚡ Opción rápida desde la app
            </h2>
            <p className="text-amber-800">
              La forma más rápida y sencilla de eliminar tu cuenta es desde la aplicación. 
              Ve a <strong>Settings → Delete Account</strong> y confirma. 
              Esto eliminará tu perfil y todo tu progreso guardado de forma inmediata y completa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              Solicitud por correo electrónico
            </h2>
            <p>
              Para solicitar la eliminación de tu cuenta de Mythika y sus datos asociados, 
              escribe a{" "}
              <a
                href="mailto:hola@crescente.dev"
                className="text-zinc-900 underline font-semibold hover:text-zinc-700"
              >
                hola@crescente.dev
              </a>{" "}
              desde el correo vinculado a tu cuenta e incluye tu nombre de usuario. 
              Eliminaremos tu perfil y progreso guardado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              Importante
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Las compras realizadas no se cancelan ni reembolsan al eliminar la cuenta.
              </li>
              <li>
                Los registros que deban conservar Google Play, Apple o RevenueCat pueden 
                mantenerse según sus obligaciones legales.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MythikaDeleteAccount;
