/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Trophy, Award, Code, Users } from "lucide-react";

export default function HackathonsSection() {
  const getActivityIcon = (title: string) => {
    if (title.toLowerCase().includes("competition") || title.toLowerCase().includes("rank")) {
      return <Trophy className="size-5 text-primary" />;
    }
    if (title.toLowerCase().includes("certification")) {
      return <Award className="size-5 text-primary" />;
    }
    if (title.toLowerCase().includes("hackathon")) {
      return <Code className="size-5 text-primary" />;
    }
    return <Users className="size-5 text-primary" />;
  };

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Activities & Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Beyond the Code</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
              Throughout my journey, I&apos;ve actively participated in competitions, earned certifications, 
              and contributed to meaningful projects that extend beyond traditional development work.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.Activities.map((activity, index) => (
            <TimelineItem key={activity.title + activity.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {activity.image ? (
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1.5 border rounded-full shadow ring-2 ring-border flex-none flex items-center justify-center">
                    {getActivityIcon(activity.title)}
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                <div className="flex flex-col gap-1">
                  {/* {activity.dates && (
                    <time className="text-xs text-muted-foreground font-medium">{activity.dates}</time>
                  )} */}
                  {activity.title && (
                    <h3 className="font-semibold leading-tight text-base">{activity.title}</h3>
                  )}
                  {/* {activity.location && (
                    <p className="text-sm text-muted-foreground">{activity.location}</p>
                  )} */}
                </div>
                {activity.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {activity.description}
                  </p>
                )}
                {activity.links && Array.isArray(activity.links) && activity.links.length > 0 && (
                  <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                    {activity.links.map((link: { href: string; icon?: React.ReactNode; title: string }, idx: number) => (
                      <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
