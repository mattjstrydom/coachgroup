import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'Coach Group has partnered with leading South African organisations across corporate, government, and community sectors.',
  alternates: { canonical: '/clients' },
};

// Replace logo path strings with actual file paths once images are available.
// Place logo files in public/images/clients/ and update the src fields below.
const clients = [
  { name: 'Southern Sun' },
  { name: 'South32' },
  { name: 'Coca-Cola' },
  { name: 'Mediclinic' },
  { name: 'Sappi' },
  { name: 'SAPS' },
  { name: 'Services SETA' },
  { name: 'Sembcorp' },
  { name: 'SASSETA' },
  { name: 'Netcare' },
  { name: 'Pfisterer' },
  { name: 'SA National Parks' },
  { name: 'Nkomati' },
  { name: 'SA Post Office' },
  { name: 'Makro' },
  { name: 'Mbombela' },
  { name: 'ETDP SETA' },
  { name: 'Damelini' },
  { name: 'Marula' },
  { name: 'MTC' },
  { name: 'Manganese Metal Co' },
];

export default function ClientsPage() {
  return (
    <>
      <section className="bg-stone-100 py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Our Clients
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl text-slate-900">
            Trusted by leading South African organisations.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From corporate partners to government bodies and community organisations, Coach Group
            has delivered its programme across a wide range of South African sectors.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="page-shell">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex min-h-[7rem] items-center justify-center rounded-2xl border border-slate-100 bg-stone-50 px-4 py-6 text-center text-sm font-medium text-slate-600 transition hover:border-amber-300 hover:bg-white"
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
