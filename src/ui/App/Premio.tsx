import { useState, useEffect} from 'react';
import Confetti from 'react-confetti';
import { useNavigate, useParams } from 'react-router-dom';

const codigo = [{id:"12345",premio:"Crepa"},{id:"6789",premio:"Helado con dos Toppings"}];


export default function Premio () {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [showContent, setShowContent] = useState(false);
  const [confettiActive, setConfettiActive] = useState(true);
  const [premio, setPremio] = useState("");

  useEffect(() => {
    const codigoEncontrado = codigo.find(c => c.id === id);

    if (!codigoEncontrado){
        navigate('/')
    }else{
        setPremio(codigoEncontrado.premio)
    }
    setTimeout(() => setShowContent(true), 500);
    
    setTimeout(() => setConfettiActive(false), 8000);

  }, [id, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3CBAF] via-blue-900 to-[#E3CBAF] relative overflow-hidden">
      {/* Confetti */}
      {confettiActive && (
        <Confetti
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
          colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF']}
        />
      )}

      {/* Estrellas de fondo */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 10 + 8}px`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-2">
        {showContent && (
          <div className="text-center max-w-4xl mx-auto">
            {/* Trofeo */}
            <div className="mb-8 float">
              <div className="text-8xl pulse-glow rainbow">🏆</div>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4">
              ¡FELICIDADES!
            </h1>

            {/* Subtítulo */}
            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8">
              ¡Eres el ganador del gran premio!
            </h2>

            {/* Premio */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 pulse-glow">
              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl mr-4 float">🎁</div>
                <div className="text-left">
                  <p className="text-lg text-gray-300">Has ganado</p>
                  <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-400">{premio}</p>
                  <p className="text-lg text-gray-300">Disfrutalo</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-6 mt-6">
                <p className="text-xl font-semibold text-white mb-2">
                  🎁 Para canjear en tienda
                </p>
                <p className="text-sm text-green-100">
                  Válido hasta fin de la feria
                </p>
              </div>
            </div>

            {/* Código de canje */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-dashed border-yellow-400">
              <p className="text-yellow-400 font-semibold mb-2">📋 CÓDIGO DE CANJE</p>
              <p className="text-3xl font-mono font-bold text-white tracking-wider">
                {id}
              </p>
            </div>

            {/* Instrucciones */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-2 mb-8">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center justify-center">
                ✨ Cómo canjear tu premio
              </h3>
              <div className="text-left max-w-md mx-auto space-y-3">
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <p className="text-gray-300">Presenta este código en nuestro punto de venta</p>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <p className="text-gray-300">¡Disfruta de tus $8,000 en productos!</p>
                </div>
              </div>
            </div>

            {/* Celebración adicional */}
            <div className="mt-8 text-4xl space-x-4">
              <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>🎉</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>🎊</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>🥳</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>🎈</span>
              <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>🎁</span>
            </div>

            {/* Mensaje final */}
            <p className="text-gray-400 mt-8 text-sm">
              * Términos y condiciones aplican. Premio válido hasta el {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('es-CO')}
            </p>
          </div>
        )}
      </div>

      {/* Efectos de brillo en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-xl"></div>

      {/* Partículas flotantes adicionales */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-50 float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['💎', '⭐', '💰', '🎯', '🔥', '⚡', '🌟', '💫'][i]}
          </div>
        ))}
      </div>
    </div>
  );
};