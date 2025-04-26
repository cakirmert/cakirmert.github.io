import type React from "react"
import { Github, Linkedin } from "lucide-react"

export function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Github {...props} />
}

export function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Linkedin {...props} />
}
