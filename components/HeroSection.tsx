'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const tags = ['#GetInvolved', '#MakeADifference', '#BeTheChange'];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Coach Group community gathering"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="page-shell relative z-10 py-20 text-white">
        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Community Coaching Programme
        </motion.p>

        <motion.h1
          className="max-w-4xl text-5xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Creating a Conducive Community
        </motion.h1>

        <motion.p
          className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A programme to empower people to be involved in and take responsibility for the
          enhancement and development of their own communities.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Start a Conversation
          </Link>
          <Link
            href="/community-coaching"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Explore the Programme
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 px-4 py-2">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
