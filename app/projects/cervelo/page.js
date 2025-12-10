"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CerveloBuild() {
  const statCards = [
    {
      label: "Platform",
      value: "2023 Cervélo Áspero • 54cm • satin black carbon",
    },
    {
      label: "Drivetrain",
      value: "SRAM mullet: Rival AXS 42T 1x crank + GX Eagle 10–52T",
    },
    {
      label: "Wheelset",
      value: "Hunt 700c Gravel Race carbon • 17mm depth • 24mm internal width",
    },
    {
      label: "Electronics",
      value: "SRAM AXS wireless shifting",
    },
    {
      label: "Use Case",
      value: "Steep Bay Area climbs, fast gravel, long adventure days",
    },
    {
      label: "Timeline",
      value: "Summer 2024",
    },
  ];

  const buildSpecs = [
    {
      title: "Frame & Contact Points",
      tag: "FRAME",
      items: [
        "Cervélo Áspero 2023 carbon, size 54, satin black",
        "BBright shell with DUB Pressfit Road Wide BB (79mm)",
        "Cervélo carbon seatpost, Selle Italia saddle",
        "Specialized 100mm / 7° stem, 2×10mm spacers",
        "Easton EA70 AX bar, 42cm, 16° flare, Supacaz bar tape",
        "Shimano PD-M520 pedals",
      ],
      image: {
        src: "/frameset.jpeg",
        alt: "Bare Cervélo Áspero carbon frameset on the work stand",
      },
    },
    {
      title: "Drivetrain & Brakes",
      tag: "GEARING",
      items: [
        "SRAM Rival AXS 1x DUB Wide crankset (172.5mm)",
        "SRAM GX Eagle XG-1275 10–52T cassette (XD driver)",
        "SRAM GX Eagle AXS rear derailleur (non-T-Type)",
        "SRAM HS2 160mm centerlock rotors front + rear",
        "SRAM Apex AXS levers + flat mount calipers",
        "SRAM GX Eagle chain, sized via SRAM 12-speed guide",
      ],
      image: {
        src: "/chain_assembly.jpeg",
        alt: "Installing the SRAM Eagle chain during the build",
      },
    },
    {
      title: "Wheels & Rubber",
      tag: "WHEELS",
      items: [
        "Hunt Gravel Race 700c carbon wheels (17mm deep / 24mm internal)",
        "40T ratchet rear hub, fast engagement + a nice buzz",
        "Specialized Pathfinder Pro 38mm, black sidewalls",
        "Tubeless with Orange Seal and taped Hunt rims",
        "Thru-axle setup, centerlock rotor interface",
        "Set up primarily for 700c speed and rolling efficiency",
      ],
      image: {
        src: "/wheel_unboxing.jpeg",
        alt: "Hunt Gravel Race rear wheel fresh out of the box",
      },
    },
  ];

  const assemblySteps = [
    {
      title: "Frame Prep & Bottom Bracket Difficulties",
      detail:
        "The build started with the Áspero frameset and an education in bottom bracket standards. BBright, DUB Wide, and Pressfit all collided here. I eventually landed on a DUB Pressfit Road Wide BBRight (79mm) and had a shop press it in—worth it to avoid buying a one-time-use tool and to make sure alignment was dead on.",
      learned:
        "Modern bottom bracket standards are chaos; always triple-check the frame spec and crank standard before ordering.",
    },
    {
      title: "Mullet Drivetrain & Derailleur Oops",
      detail:
        "I knew I wanted a 1x mullet setup: small front ring, massive 10–52T cassette out back for San Francisco’s punchy climbs. I accidentally ordered a T-Type GX Eagle derailleur first and only discovered that this 2023 Áspero frame wasn’t compatible with UDH once it showed up without a hanger in the box. After a small scavenger hunt (and a clutch assist from Tam Bikes in Mill Valley), I tracked down the non-T-Type GX Eagle AXS mech that would actually work.",
      learned:
        "AXS is easy to set up, but only if the derailleur, hanger, and cassette generation all speak the same language.",
    },
    {
      title: "Cockpit & Fit",
      detail:
        "The cockpit is a mix of well-priced, well-loved parts: an Easton EA70 AX bar and a Specialized stem, plus a few (new) headset spacers. I stacked everything, tested the position, marked the steerer, and then let a shop handle the actual cut, since I didn't want to purchase these tools either. Final fit landed on a slightly aggressive, fast-gravel position that still feels comfortable on long days.",
      learned:
        "Get the position close with spacers and test rides before cutting anything—carbon steerer tubes are a one-shot operation.",
    },
    {
      title: "Brake Routing & Bleeding",
      detail:
        "Routing the brake hoses internally and bleeding the SRAM system was easily the most time-consuming and frustrating part. I picked up a SRAM bleed kit and spent multiple rounds chasing tiny air bubbles to kill the spongy lever feel. DOT fluid ended up everywhere at least once, but the payoff was solid, consistent lever feel and the satisfaction of having done it myself.",
      learned:
        "Having the shop do the bleeding would have been faster, but learning to do it myself was a satisfactory reward.",
    },
    {
      title: "Tubeless, Wheels & Sealant",
      detail:
        "The Hunt Gravel Race wheels went on with tubeless tape, valves, and pumped with Orange Seal. Seating the Specialized Pathfinder Pros was straightforward, and the 700c setup feels like the right choice for speed and rollover on mixed surfaces. The 40T ratchet hub engagement feels great for technical climbs.",
      learned:
        "Tubeless is the way to go. I switched my Grail previously, and have never punctured or flatted since.",
    },
    {
      title: "First Rides!",
      detail:
        "I took my new baby on a bike trip out in the French and Italian Alps for a 5 day intro ride. The routes included a mix of gravel paths, fast roads and bike paths, and super long, sometimes punchy climbs. The bike handled everything beautifully and was pretty much everything I'd hoped for in this build.",
      learned:
        "Make sure everything is torqued to spec. Especially the rotors before a long descent.",
    },
  ];

  const galleryImages = [
    {
      src: "/cervelo1.jpeg",
      alt: "Twin Peaks",
      caption: "Twin Peaks, SF, CA",
    },
    {
      src: "/cervelo2.jpeg",
      alt: "Tennessee Valley",
      caption: "Climbing Bobcat Trail in Tennessee Valley, CA",
    },
    {
      src: "/cervelo3.jpeg",
      alt: "Little Compton",
      caption: "Little Compton, RI",
    },
    {
      src: "/cervelo4.jpeg",
      alt: "Tripoli",
      caption: "Summit of Tripoli Road, NH",
    },
    {
      src: "/cervelo5.jpeg",
      alt: "Flowers",
      caption: "Pretty flower bush",
    },
    {
      src: "/cervelo6.jpeg",
      alt: "Fort Mason",
      caption: "Fort Mason, SF, CA",
    },
    {
      src: "/cervelo7.jpeg",
      alt: "VT",
      caption: "Webster Hill Rd, Pomfret, VT",
    },
    {
      src: "/background1.jpeg",
      alt: "Hawk Hill",
      caption: "Classic Hawk Hill, Marin Headlands, CA",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Head>
        <title>Cervélo Áspero Gravel Build - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          <div className="absolute inset-0">
            <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-indigo-600 blur-[140px] opacity-30" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-500 blur-[140px] opacity-25" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                  Summer 2024 • Personal Project • Gravel Build
                </p>
                <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-cyan-200 to-emerald-200">
                  Cervélo Áspero Gravel Build
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-300">
                  Building my dream Cervelo Aspero
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#build-specs"
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold hover:bg-indigo-600 transition"
                  >
                    Jump to Build Specs
                  </a>
                  <a
                    href="#assembly"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-gray-400 transition"
                  >
                    Jump to Assembly Process
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {statCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-xl border border-gray-800 bg-white/5 p-4 backdrop-blur-sm shadow-lg shadow-black/20"
                    >
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-gray-400">
                        {card.label}
                      </p>
                      <p className="mt-2 text-sm md:text-base font-semibold text-white">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <Image
                  src="/cervelo_glam.jpeg"
                  alt="Cervelo Áspero overlooking Lake Tahoe, CA"
                  width={900}
                  height={700}
                  className="w-full h-auto rounded-3xl border border-gray-800 bg-gray-900/60 shadow-2xl shadow-black/40 object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 hidden sm:block rounded-2xl border border-gray-800 bg-black/70 px-4 py-2 text-xs text-gray-300 backdrop-blur">
                  Barker Pass • Lake Tahoe, CA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Intent + Design Decisions */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] gap-8 items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Project Intent</h2>
              <p className="text-gray-300">
                I already had a capable alloy gravel bike, my Canyon Grail AL, but I wanted something faster and more road-leaning for
                long mixed-surface days and big climbs. The Áspero’s geometry, clearance, and aero profile
                made it a good middle ground between a pure road race bike and a slack adventure rig. The goal was
                to build a bike that feels at home on steep San Francisco hills, alpine passes, and the random
                gravel detour I decide to take halfway through a ride.
              </p>
              <p className="text-gray-300">
                As an engineer, I also wanted the build itself to be part of the fun. I had always wanted to build my own bike, even if
                that meant figuring out BB standards, internal routing, and AXS setup, instead of just buying a complete bike off the shelf.
              </p>

              <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-4 text-sm text-gray-300">
                <span className="inline-block text-[0.65rem] uppercase tracking-[0.2em] text-emerald-300 mb-1">
                  WHAT I WAS OPTIMIZING FOR
                </span>
                <ul className="space-y-1">
                  <li>• Fast on tarmac, confident on gravel, and able to climb basically anything</li>
                  <li>• Reliable, easy-to-service components with good parts availability</li>
                  <li>• No obsession over gram-counting or perfect aero</li>
                </ul>
              </div>
            </div>

            {/* Intent-side image */}
            <div className="space-y-4">
              <Image
                src="/vt_gravel.jpeg"
                alt="Cervélo Áspero on Vermont gravel roads"
                width={900}
                height={700}
                className="w-full h-auto rounded-2xl border border-gray-800 bg-gray-900/60 object-cover"
              />
              <p className="text-xs text-gray-400">
                Example intended use case: Vermont gravel adventuring during peak foliage.
              </p>
            </div>
          </div>

          {/* Design Decisions as separate cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl font-semibold">Design Decisions</h3>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400">
                FRAME • 1X MULLET • AXS • WHEELS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 space-y-3">
                <h4 className="text-sm uppercase tracking-[0.2em] text-indigo-300">
                  Why this frame
                </h4>
                <p className="text-sm text-gray-300">
                  I’ve always dreamed of a bike like the Áspero - something with wider tire clearance, a fast frame,
                  and a gorgeous geometry. I’d been eyeing bikes like the Crux, Stigmata, and Factor Ostro Gravel,
                  but when a shop in Colorado put this Áspero frameset on sale, that basically locked in the direction
                  of the build.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 space-y-3">
                <h4 className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                  Why 1x & the mullet setup
                </h4>
                <p className="text-sm text-gray-300">
                  Coming from a 2x Shimano setup, I wanted to simplify the cockpit and lean into the way I actually
                  ride: lots of climbing, not a lot of time worrying about tiny cadence gaps on flat roads. A small
                  42T front ring and the massive 10–52T Eagle cassette give me plenty of low gear for SF walls and
                  whatever alpine passes I want to tackle. I gave up some high speed gearing efficiency, but I’m not
                  trying to win crit races with this bike.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 space-y-3">
                <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Why AXS
                </h4>
                <p className="text-sm text-gray-300">
                  Part curiosity, admittedly some laziness. AXS removes most of the cable-routing pain for shifting, and
                  the setup process is extremely straightforward once the right derailleur is in hand. It also plays
                  nicely with the mullet concept: road levers up front, mountain cassette and derailleur out back.
                  Plus, I’d heard almost nothing but good things about SRAM’s AXS ecosystem.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5 space-y-3">
                <h4 className="text-sm uppercase tracking-[0.2em] text-amber-300">
                  Why these wheels
                </h4>
                <p className="text-sm text-gray-300">
                  I knew I wanted carbon 700c wheels, tubeless-ready, with a responsive hub and a reasonable weight.
                  Hunt’s Gravel Race wheelset was a sweet spot: light enough, wide enough, a good 40T ratchet, and
                  actually in stock and on sale. The 700c choice keeps the bike feeling quick on pavement while still
                  rolling smoothly over rough gravel with 38mm Pathfinders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Build Specs (boxy layout) */}
        <section id="build-specs" className="max-w-6xl mx-auto px-6 py-12 space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
            <h2 className="text-3xl font-bold">Build Specs</h2>
            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gray-400">
              FRAME · GEARING · WHEELS · CONTACT POINTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buildSpecs.map((section) => (
              <div
                key={section.title}
                className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/70 overflow-hidden"
              >
                <div className="relative">
                  {section.image && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gray-800">
                      <Image
                        src={section.image.src}
                        alt={section.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute left-4 top-3 rounded-full border border-gray-800 bg-black/60 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-gray-200">
                    {section.tag}
                  </div>
                </div>
                <div className="p-4 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {section.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assembly Process */}
        <section id="assembly" className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
            <h2 className="text-3xl font-bold">Assembly Process</h2>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400">
              BUILD LOG · MISTAKES · TOOL LEARNINGS
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-6 max-w-3xl">
            This was my first full build from a bare frame, so I treated it like a mini engineering project:
            document the decisions, understand every standard involved, and own the mistakes instead of hiding them.
          </p>

          <div className="space-y-4">
            {assemblySteps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col md:flex-row gap-4 rounded-2xl border border-gray-800 bg-gray-900/70 p-4"
              >
                <div className="flex flex-col items-center gap-3 md:w-20">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.detail}</p>
                    <div className="rounded-lg border border-gray-800 bg-black/40 p-3 text-xs text-gray-300">
                      <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-emerald-300 mb-1">
                        WHAT I LEARNED
                      </span>
                      {step.learned}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impressions & Lessons Learned with integrated photos */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8">
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                <h3 className="text-2xl font-semibold mb-3 text-emerald-200">Ride Impressions</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • On climbs, the 1x mullet setup feels exactly right. There’s always another gear, and I never
                    find myself wishing for a smaller one.
                  </li>
                  <li>
                    • The Áspero feels super snappy and responsive. Fast when I want it to be with great control,
                    and has no difficulties when switching up the terrain.
                  </li>
                  <li>
                    • The Hunt / Pathfinder combo is a great match: quick on tarmac, surprisingly composed on rough
                    gravel, and easy to trust on long descents.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/70 p-5">
                <h3 className="text-2xl font-semibold mb-3 text-indigo-200">Lessons Learned</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Bottom bracket and hanger standards are a minefield. Always read the frame docs first.</li>
                  <li>
                    • Bleeding your own brakes is annoying but also a cool process. For some things, it's neat to take
                    time to learn the skill rather than outsourcing it.
                  </li>
                  <li>
                    • 1x with a big cassette is absolutely the move for steep, exploratory riding, even if it’s not
                    the most aero spreadsheet choice.
                  </li>
                  <li>• The build is half the fun; knowing every part makes the bike feel more like my own.</li>
                </ul>
              </div>
            </div>

            {/* Scenic impressions photo */}
            <div className="space-y-4">
              <Image
                src="/coldupetitstbernard.jpeg"
                alt="Cervélo Áspero at elevation on Col du Petit St. Bernard"
                width={900}
                height={700}
                className="w-full h-auto rounded-2xl border border-gray-800 bg-gray-900/60 object-cover"
              />
              <p className="text-xs text-gray-400">
                First big climb: Col du Petit St. Bernard in the French Alps, a lovely 16.5 mi (26.7km), 4612 ft (1406m),
                5.3% average gradient ascent to the border of Italy.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery Carousel */}
        <section className="max-w-4xl mx-auto px-6 pb-14">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Photo Gallery</h2>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-400">
              BUILD • DETAILS • RIDES
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            {/* Image + controls */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-h-[85vh] flex items-center justify-center">
                {/* Use a flexible box with Image set to fill + contain */}
                <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                  <Image
                    src={galleryImages[currentSlide].src}
                    alt={galleryImages[currentSlide].alt}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-gray-100 hover:bg-black/70 transition"
                aria-label="Previous photo"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-gray-100 hover:bg-black/70 transition"
                aria-label="Next photo"
              >
                ›
              </button>
            </div>

            {/* Caption + dots */}
            <div className="px-4 py-4">
              <p className="text-xs text-gray-300 text-center">
                {galleryImages[currentSlide].caption}
              </p>

              <div className="mt-3 flex justify-center gap-2">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 w-2 rounded-full transition ${
                      idx === currentSlide
                        ? "bg-indigo-400"
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
