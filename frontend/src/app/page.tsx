
export default function Home() {
  return (
    <main className="p-8 font-[Poppins] bg-[url('../../public/landing_hero.webp')] bg-cover min-h-[523px]">
      <div className="grid justify-items-start items-center md:gap-16">
        <div>
          <h2 className="text-[#235C2A] font-bold md:text-6xl md:pb-8">Maximiza tu actividad agrícola</h2>
          <h3 className="md:text-5xl font-bold">con datos en tiempo real</h3>
        </div>
        <button className="bg-[#F7C35F] py-[25px] px-[50px] rounded text-xl text-[#1A1A1A]">
          DESCUBRIR MÁS
        </button>
      </div>
    </main>
  );
}
