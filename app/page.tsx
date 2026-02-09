import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-branco px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-preto/80">
            Aprender é divertido
          </h1>
          <p className="text-lg text-preto/60">
            Exercícios de Português e Matemática para alunos do 4º ano do ensino fundamental.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">         
          <Link
            href="/play/portugues"
            className="bg-branco border rounded-xl p-6 shadow hover:shadow-md transition block"
          >
            <h2 className="text-2xl font-semibold text-azul">
              Português
            </h2>
            <p className="mt-2 text-preto/50">
              Ortografia, interpretação de texto e gramática.
            </p>
          </Link>

          <Link
            href="/play/matematica"
            className="bg-branco border rounded-xl p-6 shadow hover:shadow-md transition block"
          >
            <h2 className="text-2xl font-semibold text-vermelho">
              Matemática
            </h2>
            <p className="mt-2 text-preto/50">
              Operações, problemas e raciocínio lógico.
            </p>
          </Link>
        </section>

        <footer>
          <p className="text-sm text-preto/40">
            Desenvolvido para fins educacionais
          </p>
        </footer>

      </div>
    </main>
  );
}
