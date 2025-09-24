"use client";

import {
  Container,
  Grid,
  Group,
  Anchor,
  Text,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const socialLinks = [
  { icon: <IconBrandX size={20} />, href: "https://x.com" },
  { icon: <IconBrandInstagram size={20} />, href: "https://instagram.com" },
  { icon: <IconBrandYoutube size={20} />, href: "https://youtube.com" },
  { icon: <IconBrandLinkedin size={20} />, href: "https://linkedin.com" },
];

const footerLinks = [
  {
    title: "Use cases",
    links: [
      { label: "UI design", href: "#" },
      { label: "UX design", href: "#" },
      { label: "Wireframing", href: "#" },
      { label: "Diagramming", href: "#" },
      { label: "Brainstorming", href: "#" },
      { label: "Online whiteboard", href: "#" },
      { label: "Team collaboration", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Design", href: "#" },
      { label: "Prototyping", href: "#" },
      { label: "Development features", href: "#" },
      { label: "Design systems", href: "#" },
      { label: "Collaboration features", href: "#" },
      { label: "Design process", href: "#" },
      { label: "FigJam", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Best practices", href: "#" },
      { label: "Colors", href: "#" },
      { label: "Color wheel", href: "#" },
      { label: "Support", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Resource library", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <div
      style={{
        borderTop: "1px solid #eaeaea",
        marginTop: 40,
        padding: "40px 0",
      }}
    >
      <Container size="lg">
        <Grid gutter="lg">
          {/* Social Icons */}
          <Grid.Col span={{ base: 12, sm: 3 }}>
            <Group gap="sm">
              {socialLinks.map((s, i) => (
                <ActionIcon
                  key={i}
                  component="a"
                  href={s.href}
                  target="_blank"
                  variant="subtle"
                  color="black"
                  size="lg"
                >
                  {s.icon}
                </ActionIcon>
              ))}
            </Group>
          </Grid.Col>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <Grid.Col key={idx} span={{ base: 6, sm: 3 }}>
              <Text fw={700} mb="sm">
                {section.title}
              </Text>
              {section.links.map((link, i) => (
                <Anchor
                  key={i}
                  href={link.href}
                  c="dimmed"
                  size="sm"
                  style={{ display: "block", marginBottom: 6 }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
