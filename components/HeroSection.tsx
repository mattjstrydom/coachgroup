'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const tags = ['#GETInvolved', '#MAKEaDifference', '#BEtheChange'];
const stats = [
  { value: '9', label: 'adaptable workshops' },
  { value: '18', label: 'month student journey' },
  { value: '25', label: 'community coaches' },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,159,90,0.28),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.18),transparent_22%),linear-gradient(135deg,#08101f_0%,#0f172a_45%,#14213d_100%)]" />
      <div className="absolute inset-x-0 top-24 mx-auto h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-16 h-80 w-80 rounded-full border border-white/10 bg-white/5 blur-3xl" />

      <div className="page-shell relative z-10 py-24 md:py-32">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              Community Coaching Programme
            </motion.p>

            <motion.h1
              className="max-w-4xl text-6xl leading-[0.95] md:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Coach Group
              <span className="mt-3 block text-4xl text-slate-200 md:text-5xl">
                Creating a Conducive Community
              </span>
            </motion.h1>

            <motion.p
              className="mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              A programme to empower people to be involved in and take responsibility for the
              enhancement and development of their own communities.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
            >
              <Link
                href="/contact"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Get Involved
              </Link>
              <Link
                href="/community-coaching"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Programme
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.36 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="glass-panel rounded-[2rem] p-6 text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                Why Us
              </p>
              <h2 className="mt-4 text-4xl text-white">Relevant. Adaptable. Community-first.</h2>
              <p className="mt-5 leading-8 text-slate-200">
                Proudly South African coaching that combines soft skills, practical learning, and
                community projects in one structured programme.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
                  >
                    <div className="text-3xl font-semibold text-amber-300">{stat.value}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
