import React, { useEffect, useMemo, useState, createContext, useRef } from "react";
import { FlagIcon } from "react-flag-kit";

import { useLanguage } from "@/context/LanguageContext"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ArrowUpRight,
  CheckCircle2,
  Clipboard,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
  Star,
  Repeat,
  Users,
  ChevronDown,
  Download
} from "lucide-react";
import { max } from "date-fns";
import { pageDetails } from "@/mock/mock_en";

function LanguageDropdown() {
  const { data, lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    { code: "EN", label: "EN" },
    { code: "ID", label: "ID" },
    { code: "JP", label: "JP" },
  ];

  return (
    <div className="relative w-24"
    ref={dropdownRef}>
      <div
        className="flex items-center justify-between rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/80 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <FlagIcon code={lang === "EN" ? "GB" : lang} size={20} />
          <span>{lang}</span>
        </div>
        <ChevronDown className="h-4 w-4 text-white/80" /> 
      </div>

      {open && (
        <ul className="absolute top-full mt-1 w-full rounded-lg border border-white/12 bg-black/50 text-white/80 backdrop-blur z-10">
          {options.map((o) => (
            <li
              key={o.code}
              onClick={() => { setLang(o.code); setOpen(false); }}
              className="cursor-pointer px-3 py-1 flex items-center gap-2"
            >
              <FlagIcon code={o.code === "EN" ? "GB" : o.code} size={20} />
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
    
    
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function GlassPill({ children, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, right }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-[0.24em] text-white/50">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
        ) : null}
      </div>
      {right ? <div className="pt-2 md:pt-0">{right}</div> : null}
    </div>
  );
}

function Header() {

  const { data, lang, setLang } = useLanguage()
  const { profile } = data

  const nav = [
    { id: "profile", label: "Profile" },
    { id: "services", label: "Services" },
    { id: "reviews", label: "Reviews" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button
          onClick={() => scrollToId("top")}
          className="group flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold text-white/90 transition-colors hover:text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
            <Sparkles className="h-4 w-4 text-[#b98cff]" />
          </span>
          <span className="hidden sm:inline text-base">{profile.name}</span>
          <span className="sm:hidden">{pageDetails.headerTitle}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToId(n.id)}
              className="rounded-full px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <button
            onClick={() => scrollToId("contact")}
            className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 md:inline-flex"
          >
            Contact
          </button> */}
          <LanguageDropdown />
          {/* Language switcher */}
              {/* <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/80">
                <FlagIcon code="ID" size={20} />
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="text-sm text-white/80 bg-transparent focus:outline-none appearance-none"
                >
                  <option value="EN">EN</option>
                  <option value="ID">ID</option>
                  <option value="JP">JP</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/80 h-4 w-4" />
              </div> */}
          <Button
            className="rounded-full bg-[#b98cff] text-[#0b0d12] hover:bg-[#c8a5ff]"
            onClick={() => scrollToId("portfolio")}
          >
            {pageDetails.viewWorkButton} <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-[#b98cff] text-[#b98cff]" : "text-white/20"
          )}
        />
      ))}
    </div>
  );
}

function truncate(reviewBody, maxReviewBodyLength = 250) {
  if(!reviewBody || reviewBody.length <= maxReviewBodyLength) return reviewBody;

  const trimmed = reviewBody.slice(0, maxReviewBodyLength);

  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
}

function ReviewCard({ review }) {
  const topTags = (review.tags || []).slice(0, 5);

  const avatarFallback = useMemo(() => {
    const parts = review.client?.name?.split(" ") || [];
    const initials = (parts[0]?.[0] || "C") + (parts[1]?.[0] || "");
    return initials.toUpperCase();
  }, [review.client?.name]);

  const avatarBg = useMemo(() => {
    const seed = review.client?.avatarSeed || "seed";
    const hash = seed
      .split("")
      .reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) % 360, 0);
    return `hsl(${hash} 70% 45% / 0.25)`;
  }, [review.client?.avatarSeed]);

  return (
    <Card className="h-full border-white/10 bg-white/5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
      <CardHeader className="pb-3">
        <div className="">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                style={{ background: avatarBg }}
                aria-label="Client avatar"
                title={review.client?.name}
              >
                <span className="text-xs font-semibold text-white/80">
                  {avatarFallback}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-white">
                    {review.client?.name}
                  </div>
                  {review.status && (
                  <Badge
                    variant="secondary"
                    className="border border-white/10 bg-white/5 text-white/70"
                  >
                      <Repeat className="h-3 w-3 text-[#b98cff]" />
                    <p className="ml-1">{review.status}</p>
                  </Badge>)}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <FlagIcon code={review.countryCode} size={15} />
                  {review.country}
                </div>
                
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
            <Stars count={review.stars} />
             <span className="mx-1 h-1 w-1 rounded-full bg-white/40" />
            <span>{review.timeAgo}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-6 text-white/70">{truncate(review.body)}</p>

        <div className="flex flex-wrap gap-2">
          {topTags.map((t) => (
            <Badge
              key={t}
              className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/100 hover:text-black"
            >
              {t}
            </Badge>
          ))}

          {review.tags?.length > 5 ? (
            <Dialog>
              <DialogTrigger asChild>
                <button className="rounded-full border border-white/10 bg-[#b98cff] text-[#0b0d12] hover:bg-[#c8a5ff] px-3 py-1 text-xs transition-colors font-medium">
                  See more
                </button>
              </DialogTrigger>
              <DialogContent className="border-white/10 bg-[#0b0d12] text-white sm:max-w-2xl">
                <DialogHeader className="">
                  <div className="">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
                          style={{ background: avatarBg }}
                          aria-label="Client avatar"
                          title={review.client?.name}
                        >
                          <span className="text-xs font-semibold text-white/80">
                            {avatarFallback}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-semibold text-white">
                              {review.client?.name}
                            </div>
                            {review.status && (
                            <Badge
                              variant="secondary"
                              className="border border-white/10 bg-white/5 text-white/70"
                            >
                                <Repeat className="h-3 w-3 text-[#b98cff]" />
                              <p className="ml-1">{review.status}</p>
                            </Badge>)}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/50">
                            <FlagIcon code={review.countryCode} size={15} />
                            {review.country}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                      <Stars count={review.stars} />
                      <span className="mx-1 h-1 w-1 rounded-full bg-white/40" />
                      <span>{review.timeAgo}</span>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-2 pb-2">
                  <p className="text-sm leading-6 pb-3 text-white/70 whitespace-pre-line">{review.body}</p>

                  <div className="">
                    <div className="text-xs font-semibold tracking-[0.22em] text-white/50">
                      {pageDetails.reviewsBadgeTitle}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(review.tags || []).map((t) => (
                        <Badge
                          key={t}
                          className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default function QAPortfolio() {

  // const { data } = useLanguage()
  const { data, lang, setLang } = useLanguage()


  const {
    profile,
    services,
    toolbox,
    reviews,
    portfolioItems,
    experience,
    certifications,
    faqs,
    resume,
    approaches,
    approaches_extra,
    pageDetails
  } = data

  const handleDownload = () => {
    // Path ke file di folder public
    const fileUrl = `/files/${lang}/CV_Moh_Ramadan_Quality_Assurance_Analyst.pdf`;

    // Membuat elemen <a> sementara untuk trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV_Moh_Ramadan_Quality_Assurance_Analyst.pdf"; // nama file saat di-download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [status, setStatus] = useState("idle");
  // idle | sending | success | error

  useEffect(() => {
  if (status === "success") {
    const timer = setTimeout(() => {
      setStatus("idle");
    }, 7000); // 7 detik (ganti 5000 / 10000 kalau mau)

    return () => clearTimeout(timer);
  }
}, [status]);

  const [copied, setCopied] = useState(false);
  const [contactForm, setContactForm] = useState(() => {
    try {
      const raw = localStorage.getItem("qa_portfolio_contact_draft");
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore
    }
    return { name: "", email: "", message: "" };
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        "qa_portfolio_contact_draft",
        JSON.stringify(contactForm)
      );
    } catch (e) {
      // ignore
    }
  }, [contactForm]);

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // ignore
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xvzponzk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setContactForm({ name: "", email: "", message: "" });
        localStorage.removeItem("qa_portfolio_contact_draft");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };


  return (
    <div id="top" className="min-h-screen bg-[#07080c]">
      {/* Subtle background glow (kept very low-contrast) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#b98cff]/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-140px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6 md:pt-14">
        {/* HERO */}
        <section id="profile" className="grid gap-8 md:grid-cols-[1.30fr_0.7fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <GlassPill>
                <MapPin className="h-3.5 w-3.5 text-white/60" />
                <span>{profile.location}</span>
              </GlassPill>
              <GlassPill>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#b98cff]" />
                <span>{pageDetails.profileBadge}</span>
              </GlassPill>
            </div>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-lg text-white/70">{profile.headline}</p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
                {profile.summary}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {profile.quickStats.map((s) => (
                <Card
                  key={s.label}
                  className="border-white/10 bg-white/5 text-white backdrop-blur"
                >
                  <CardContent className="p-4">
                    <div className="text-xs text-white/50">{s.label}</div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {s.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                className="rounded-full bg-[#b98cff] text-[#07080c] hover:bg-[#c8a5ff]"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                {resume.title}
              </Button>

              <button
                onClick={onCopyEmail}
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                <Clipboard className="mr-2 h-4 w-4" />
                {copied ? "Copied" : "Copy email"}
              </button>

              <a
                href={profile.contact.fiverr}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                Fiverr <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:pl-4">
            <Card className="overflow-hidden border-white/10 bg-white/5 text-white backdrop-blur">
              <CardContent className="p-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-3xl bg-[#b98cff]/15 blur-2xl" />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={profile.photoUrl}
                      alt={`${profile.name} profile`}
                      className="aspect-[4/4] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-semibold tracking-[0.24em] text-white/50">
                    {pageDetails.coreFocusLabel}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["User Experience", "Bug triage","Load Performance", "Release readiness", ].map(
                      (t) => (
                        <Badge
                          key={t}
                          className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                        >
                          {t}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* SERVICES */}
        <section id="services" className="space-y-6">
          <SectionHeading
            eyebrow={pageDetails.servicesEyebrow}
            title={pageDetails.servicesTitle}
            description={pageDetails.servicesDescription}
            right={
              <div className="flex flex-wrap gap-2">
                <GlassPill className="border-[#b98cff]/25 bg-[#b98cff]/10 text-white/80">
                  <Users className="h-3.5 w-3.5 text-white/60" />
                  {pageDetails.servicesBadge1}
                </GlassPill>
                <GlassPill>
                  <CheckCircle2 className="h-3.5 w-3.5 text-white/60" />
                  {pageDetails.servicesBadge2}
                </GlassPill>
              </div>
            }
          />

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Card
                key={s.title}
                className="border-white/10 bg-white/5 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="text-base text-white">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-white/60">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.highlights.map((h) => (
                      <Badge
                        key={h}
                        className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/100 hover:text-black"
                      >
                        {h}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* APPROACH */}
        <section className="space-y-6" aria-label="Approach">
          <SectionHeading
            eyebrow={pageDetails.approachesEyebrow}
            title={pageDetails.approachesTitle}
            description={pageDetails.approachesDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {approaches.map((approach) => (
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur hover:bg-white/10">
              <CardHeader className="pb-3">
                <span class="text-sm text-white/40">{approach.number}</span>
                <CardTitle className="text-base">{approach.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                  <p className="text-sm leading-6 text-white/60">{approach.description}</p>
              </CardContent>
            </Card>
            ))}
          </div>
          <div class="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8">
            <span class="text-sm text-white/50">{approaches_extra.coreQuestionTitle}</span>
            <h3 class="mt-2 text-2xl font-semibold text-white">
              {approaches_extra.coreQuestionHeading}
            </h3>
            <p class="mt-4 text-white/70 leading-relaxed max-w-3xl">
              {approaches_extra.coreQuestionDescription}
            </p>
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* TOOLBOX */}
        <section className="space-y-6" aria-label="Toolbox">
          <SectionHeading
            eyebrow={pageDetails.toolboxEyebrow}
            title={pageDetails.toolboxTitle}
            description={pageDetails.toolboxDescription}
          />

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{pageDetails.toolboxPrimarytoolLabel}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {toolbox.primary.map((t) => (
                  <Badge
                    key={t}
                    className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{pageDetails.toolboxTestingtypeLabel}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {toolbox.testing.map((t) => (
                  <Badge
                    key={t}
                    className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{pageDetails.toolboxDeliverablesLabel}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {toolbox.deliverables.map((t) => (
                  <Badge
                    key={t}
                    className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* REVIEWS */}
        <section id="reviews" className="space-y-6">
          <SectionHeading
            eyebrow={pageDetails.reviewsEyebrow}
            title={pageDetails.reviewsTitle}
            description={pageDetails.reviewsDescription}
          />
      
          <div className="grid gap-4 md:grid-cols-2">
            {[...reviews].reverse().map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* PORTFOLIO */}
        <section id="portfolio" className="space-y-6">
          <SectionHeading
            eyebrow={pageDetails.portfolioEyebrow}
            title={pageDetails.portfolioTitle}
            description={pageDetails.portfolioDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {portfolioItems.map((p) => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <Card className="overflow-hidden border-white/10 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/7">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={p.thumbnail}
                        alt={`${p.title} preview`}
                        className="aspect-[16/9] w-full object-cover"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07080c]/100 to-[#07080c]/0" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {p.title}
                            </div>
                            <div className="mt-1 text-xs text-white/60">
                              {p.subtitle}
                            </div>
                          </div>
                          <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition-colors group-hover:bg-white/10">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <Badge
                              key={t}
                              className="border border-white/10 bg-white/5 text-white/75 hover:bg-white/100 hover:text-black"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-6">
          <SectionHeading
            eyebrow={pageDetails.experienceEyebrow}
            title={pageDetails.experienceTitle}
            description={pageDetails.experienceDescription}
          />

          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {[...experience].reverse().map((e) => (
                  <AccordionItem
                    key={e.id}
                    value={e.id}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="px-2 text-left text-white hover:no-underline md:px-3">
                      <div className="flex w-full flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-sm font-semibold">{e.title}</div>
                          <div className="text-xs text-white/80">
                            {e.company} • {e.period} • {e.duration}
                          </div>
                          <div className="text-xs text-white/55">
                            {e.location}
                          </div>
                        </div>
                        {e.stack && (
                        <div className="mt-2 flex flex-wrap gap-2 md:mt-0 md:justify-end">
                          {e.stack.slice(0, 4).map((t) => (
                            <Badge
                              key={t}
                              className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/100 hover:text-black"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-white/70 md:px-3">
                      <div className="space-y-3">
                        <p className="text-sm leading-6 text-white/60">
                          {e.opening}
                        </p>
                        <ul className="space-y-2">
                          {e.bullets.map((b, idx) => (
                            <li key={idx} className="flex gap-2 text-sm">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#b98cff]" />
                              <span className="text-white/70">{b}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm leading-6 text-white/60">
                          {e.ending}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {e.skills.map((t) => (
                            <Badge
                              key={t}
                              className="border border-white/10 bg-white/5 text-white/70 hover:bg-white/100 hover:text-black"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12 bg-white/10" />

        {/* CERTS */}
        <section className="space-y-6" aria-label="Certifications">
          <SectionHeading
            eyebrow={pageDetails.credentialsEyebrow}
            title={pageDetails.credentialsTitle}
            description={pageDetails.credentialsDescription}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <Card
                key={c.title}
                className="border-white/10 bg-white/5 text-white backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="text-base">
                    {c.title}
                    <div className="text-sm text-white/70 pt-1 font-normal">
                      {c.issuer} • {c.year}
                    </div>
                  </CardTitle>
                  <div className="text-sm text-white/55 justify-end flex">
                    {/* <a
                      href={c.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/55 cursor-pointer hover:text-[#b98cff] transition-colors"
                    >
                      Show Credential
                    </a> */}
                    <a
                      className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                      href={c.credential}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pageDetails.credentialsButton} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardHeader>
                {/* <CardContent className="space-y-2">
                  
                </CardContent> */}
              </Card>
            ))}
          </div>
        </section>

        {/* <Separator className="my-12 bg-white/10" /> */}

        {/* FAQ */}
        {/* <section className="space-y-6" aria-label="FAQ">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="A quick guide to frequently asked questions, providing clarity on my work process, approach, and what clients can expect." 
          />

          <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f) => (
                  <AccordionItem
                    key={f.q}
                    value={f.q}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="px-2 text-left text-white hover:no-underline md:px-3">
                      <span className="text-sm font-semibold">{f.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-4 text-sm leading-6 text-white/65 md:px-3">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section> */}

        <Separator className="my-12 bg-white/10" />

        {/* CONTACT */}
        <section id="contact" className="space-y-6">
          <SectionHeading
            eyebrow={pageDetails.contactEyebrow}
            title={pageDetails.contactTitle}
            description={pageDetails.contactDescription}
            right={
              <div className="flex flex-wrap gap-2">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                  href={profile.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            }
          />

          <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardContent className="p-5">
                <form onSubmit={onSubmit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <div className="mb-1 text-xs font-semibold text-white/60">
                        Name
                      </div>
                      <Input
                        name="name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your name"
                        className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
                      />
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-semibold text-white/60">
                        Email
                      </div>
                      <Input
                        name="email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="you@email.com"
                        className="border-white/10 bg-white/5 text-white placeholder:text-white/35"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 text-xs font-semibold text-white/60">
                      Message
                    </div>
                    <Textarea
                      name="message"
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="What do you need tested?"
                      className="min-h-[120px] border-white/10 bg-white/5 text-white placeholder:text-white/35"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      className="rounded-full bg-[#b98cff] text-[#07080c] hover:bg-[#c8a5ff]"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Send"}
                    </Button>
                    <div className="text-sm text-white/50">
                      {/* {submitted ? "Saved! (frontend preview)" : "Draft autosaves."} */}
                      {status === "idle" && "Draft autosaves."}
                      {status === "sending" && "Sending message..."}
                      {status === "success" && "Message sent successfully 🚀"}
                      {status === "error" && "Failed to send. Try again."}

                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-white/50">
                      CONTACT
                    </div>
                    <div className="mt-2 text-sm text-white/70">
                      {profile.contact.email}
                    </div>
                    <button
                      onClick={onCopyEmail}
                      className="mt-3 inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
                    >
                      <Clipboard className="mr-2 h-4 w-4" />
                      {copied ? "Copied" : "Copy email"}
                    </button>
                  </div>

                  <Separator className="bg-white/10" />

                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-white/50">
                      QUALITY PROMISE
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        "Clear defect reporting",
                        "Practical testing coverage",
                        "Fast feedback loop",
                        "Respectful collaboration",
                      ].map((t) => (
                        <div key={t} className="flex gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#b98cff]" />
                          <span className="text-white/70">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-white/55">
              ©{new Date().getFullYear()} {profile.name}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={profile.contact.fiverr}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                Fiverr
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                LinkedIn
              </a>

              <button
                onClick={() => scrollToId("top")}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                Back to top
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
