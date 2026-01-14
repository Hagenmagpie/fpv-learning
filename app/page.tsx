import Link from 'next/link';
import { Plane, Wrench, Gamepad2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-primary to-sky-400 pt-32 pb-48 px-6 text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-sm">
            ASBIRD FPV <br /> Learning Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto font-medium">
            从零开始的飞行之旅。加入我们，征服蓝天！
          </p>
          <Link
            href="/docs/flight"
            className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white text-lg font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg group"
          >
            开始飞行 (Start Flying) <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Decorative Wave (CSS) */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-background rounded-t-[50%] scale-x-150 translate-y-8 opacity-90"></div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl w-full mx-auto px-6 -mt-32 relative z-20 grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">

        {/* Card 1 */}
        <div className="bg-card text-card-foreground p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border-b-4 border-slate-100 hover:border-primary/20">
          <div className="w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
            <Gamepad2 size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">模拟训练 (Simulator)</h3>
          <p className="text-slate-500 mb-6 font-medium">炸机不可怕，只要是在电脑里。掌握基础操控！</p>
          <Link href="/docs/simulator" className="text-primary font-bold hover:underline flex items-center gap-1">Level 1: 入门 <ArrowRight size={16} /></Link>
        </div>

        {/* Card 2 */}
        <div className="bg-card text-card-foreground p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border-b-4 border-slate-100 hover:border-secondary/20">
          <div className="w-16 h-16 bg-green-100 text-secondary rounded-2xl flex items-center justify-center mb-6">
            <Wrench size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">硬件组装 (Hardware)</h3>
          <p className="text-slate-500 mb-6 font-medium">认识你的战机。焊接、组装、调试，从零件到整机。</p>
          <Link href="/docs/hardware" className="text-secondary font-bold hover:underline flex items-center gap-1">Level 2: 进阶 <ArrowRight size={16} /></Link>
        </div>

        {/* Card 3 */}
        <div className="bg-card text-card-foreground p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border-b-4 border-slate-100 hover:border-accent/20">
          <div className="w-16 h-16 bg-orange-100 text-accent rounded-2xl flex items-center justify-center mb-6">
            <Plane size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-3">真实飞行 (Real Flight)</h3>
          <p className="text-slate-500 mb-6 font-medium">戴上眼镜，起飞！安全检查与空中技巧。</p>
          <Link href="/docs/flight" className="text-accent font-bold hover:underline flex items-center gap-1">Level 3: 高手 <ArrowRight size={16} /></Link>
        </div>

      </section>

      <footer className="w-full py-10 text-slate-400 text-sm text-center border-t border-slate-100">
        <p>© 2026 FPV Learning Adventure. Built for Pilot Li & Son.</p>
      </footer>
    </main>
  );
}
