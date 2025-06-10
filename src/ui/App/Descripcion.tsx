export default function Descripcion() {
    return (
    <div className="flex flex-col items-center flex-wrap bg-[#EFE6DE]" >
        <h1 className="bg-[#E3CBAF] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
        <div className="flex flex-wrap flex-col md:flex-row sm:justify-center">
            <div className="m-4 p-2 shadow-lg rounded-4xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-[#985d2f] hover:bg-[#9794f6] max-w-[250px]">

                <p className="text-justify max-w-[700px] text-sm py-5 px-3 font-mono "><p className="text-center font-bold text-md">“Oh Lala Crepas” - Crepas Dulces</p>
                <p>
                ¡Una explosión de dulzura en cada bocado!

                Oh Lala Crepas es un emprendimiento creado con amor por los sabores que endulzan la vida. Nos especializamos en crepas dulces artesanales, elaboradas con ingredientes frescos, combinaciones irresistibles y un toque único que hace que cada cliente diga… ¡Oh Lala!</p>
                </p>
            </div>
            <div className="m-4 p-2 shadow-lg rounded-4xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-[#804c25] hover:bg-[#9794f6] max-w-[250px]">
                <p className="text-justify max-w-[700px] text-sm py-5 px-3 font-mono text-white">
                    Ofrecemos una experiencia dulce y creativa, donde cada crepa es una mezcla perfecta de sabor, textura y presentación. Desde las clásicas con Nutella y frutas frescas, hasta creaciones más atrevidas con galletas, chocolates, helado, caramelo o toppings únicos, tenemos la opción perfecta para cada antojo.
                </p>
            </div>
            <div className="m-4 p-2 shadow-lg rounded-4xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-[#804c25] hover:bg-[#9794f6] max-w-[250px]">
                <p className="text-justify max-w-[700px] text-sm py-5 px-3 font-mono text-white">
                    Ya sea que nos visites en nuestro punto de venta, nos encuentres en un evento especial o pidas a domicilio, en Oh Lala Crepas te garantizamos un servicio cálido, rápido y delicioso. Queremos que cada crepa se convierta en un momento memorable que quieras repetir.
                    <br />
                    <p className="text-justify max-w-[700px] text-md py-5 px-3 font-mono font-extrabold">
                    ¡Déjate conquistar por la magia de nuestras crepas dulces y descubre por qué todos dicen: Oh Lala! 🥞🍓🍫
                    </p>
                </p>
            </div>   
        </div>
    </div>
    )
};
