"use client"

import Image from "next/image"
import { RESUME_DATA } from "@/data/resume-data"
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-4xl space-y-8 bg-white print:space-y-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 rounded-lg bg-gradient-to-br from-muted/50 to-muted">
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold leading-tight">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty text-base text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a className="inline-flex gap-x-1.5 align-baseline text-muted-foreground leading-none text-xs">
                {RESUME_DATA.location}
              </a>
              {RESUME_DATA.contact.email && (
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-xs hover:underline">
                  {RESUME_DATA.contact.email}
                </a>
              )}
              {RESUME_DATA.contact.tel && (
                <a href={`tel:${RESUME_DATA.contact.tel}`} className="text-xs hover:underline">
                  {RESUME_DATA.contact.tel}
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-1 pt-2">
              {RESUME_DATA.contact.social.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-x-1.5 px-2.5 py-1 rounded-md bg-background hover:bg-background/80 transition-colors text-xs">
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          {RESUME_DATA.avatarUrl && (
            <div className="flex-shrink-0">
              <img
                src={RESUME_DATA.avatarUrl}
                alt={RESUME_DATA.name}
                className="object-cover h-40 w-40 shadow-xl"
                style={{ borderRadius: '50%' }}
              />
            </div>
          )}
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty text-base text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company + work.start} className="flex flex-row items-center gap-4 p-4">
              {work.logo && (
                <span className={work.company === "Mug Agency" ? "bg-[#00aec3] rounded" : ""}>
                  <img
                    src={work.logo}
                    alt={work.company + ' logo'}
                    className="object-contain h-16 w-32 px-2"
                    style={{ borderRadius: 0 }}
                  />
                </span>
              )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-base">{work.company}</span>
                    {work.badges && work.badges.length > 0 && (
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge variant="secondary" className="align-middle text-xs" key={badge}>
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    )}
                  </div>
                  <div className="text-xs tabular-nums text-gray-500">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                </div>
                {work.link && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {work.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                <div className="text-xs text-muted-foreground mt-1">{work.location}</div>
                <div className="text-sm text-muted-foreground mt-1 font-mono">
                  {work.badges && work.badges.length > 0 ? null : work.title}
                </div>
                <div className="mt-2 text-xs print:text-[10px]">
                  {work.description}
                </div>
              </div>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school} className="flex flex-row items-center gap-4 p-4">
              {education.logo && (
                <span className={education.school.includes("Hamburg University of Applied Sciences") ? "bg-[#003ca0] rounded" : education.school.includes("Bahcesehir") ? "bg-[#03275a] rounded" : ""}>
                  <img
                    src={education.logo}
                    alt={education.school + ' logo'}
                    className="object-contain h-16 w-32 px-2"
                    style={{ borderRadius: 0 }}
                  />
                </span>
              )}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold leading-none">{education.school}</h3>
                  <div className="text-xs tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
                {education.link && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {education.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                <div className="text-xs text-muted-foreground mt-1">{education.location}</div>
                <div className="text-sm text-muted-foreground mt-1 font-mono">
                  {education.degree}
                </div>
                {"subItems" in education && Array.isArray((education as any).subItems) && (education as any).subItems.length > 0 && (
                  <div className="mt-1 ml-2 border-l-2 border-muted pl-3 space-y-2">
                    {(education as any).subItems.map((sub: any) => (
                      <div key={sub.title} className="mb-1">
                        <div className="font-semibold text-xs">{sub.title}</div>
                        <div className="text-xs text-muted-foreground">{sub.location}</div>
                        {sub.address && (
                          <div className="text-xs text-muted-foreground">{sub.address}</div>
                        )}
                        {sub.link && (
                          <a href={sub.link} target="_blank" rel="noreferrer" className="text-xs hover:underline block">
                            {sub.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </a>
                        )}
                        {sub.description && (
                          <div className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: sub.description }} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {education.description && education.school === "Bahcesehir University" ? (
                  // Render HTML for BAU description to allow clickable links
                  <div className="text-xs mt-1" dangerouslySetInnerHTML={{ __html: education.description }} />
                ) : education.description && (
                  <div className="text-xs mt-1">{education.description}</div>
                )}
              </div>
            </Card>
          ))}
        </Section>
        <Section className="section">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-xs badge hover:bg-muted transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section className="section">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 print:grid-cols-2">
            {RESUME_DATA.projects.map((project) => (
              <Card key={project.title} className="h-full card group hover:shadow-md transition-all flex flex-col justify-between">
                <div className="p-4 w-full flex flex-row items-end gap-4">
                  <div className="flex-shrink-0 flex items-end justify-center h-12 w-12">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`${project.title} logo`}
                      width={40}
                      height={40}
                      className={
                        `object-contain h-10 w-10` +
                        (project.title === "Merlin Tattoo" ? " filter invert" : "")
                      }
                      style={{ borderRadius: 0 }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-end min-w-0">
                    <CardTitle className="text-base group-hover:text-primary transition-colors truncate">
                      {project.title}
                    </CardTitle>
                    {project.link && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <a
                          href={project.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-foreground transition-colors flex items-center gap-1 truncate"
                        >
                          {project.link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <CardContent className="px-4 pb-4 pt-0 w-full flex flex-col h-full">
                  <div className="text-sm mb-2">{project.description}</div>
                  <div className="flex-grow" />
                  <div className="mb-1 mt-3 font-semibold text-xs text-muted-foreground uppercase tracking-wide">Key Technologies</div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section className="section">
          <h2 className="text-xl font-bold">Volunteering</h2>
          {/* Render AIESEC overview as a section intro, not a card */}
          {RESUME_DATA.volunteering[0]?.title === "AIESEC Volunteering Overview" && (
            <div className="mb-4 text-sm text-muted-foreground">
              {RESUME_DATA.volunteering[0].description}
              {RESUME_DATA.volunteering[0].link && (
                <div className="mt-1">
                  <a
                    href={RESUME_DATA.volunteering[0].link}
                    target="_blank"
                    rel="noreferrer"
                    className="underline inline-flex items-center gap-1 text-xs"
                  >
                    aiesec.org
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </div>
          )}
          {/* Render cards for the rest of the volunteering experiences */}
          {RESUME_DATA.volunteering.slice(1).map((volunteering) => (
            <Card key={volunteering.title + volunteering.start} className="flex flex-row items-center gap-4 p-4">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold leading-none">{volunteering.title}</h3>
                  <div className="text-xs tabular-nums text-gray-500">
                    {volunteering.start} - {volunteering.end}
                  </div>
                </div>
                {volunteering.link && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                    <a
                      href={volunteering.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground transition-colors flex items-center gap-1"
                    >
                      {volunteering.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                )}
                <div className="text-xs text-muted-foreground mt-1">{volunteering.location}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {volunteering.organization}
                </div>
                <div className="mt-2 text-xs print:text-[10px]">
                  {volunteering.description}
                </div>
              </div>
            </Card>
          ))}
        </Section>
      </section>
    </main>
  );
}
