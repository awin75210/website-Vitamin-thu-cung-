"use client";

import Link from "next/link";
import {
  Group,
  ActionIcon,
  Avatar,
  Text,
  Container,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { IconBell, IconQuestionMark, IconWorld } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";

export function Header() {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/cuu-ho", label: "Cứu hộ" },
    { href: "/cua-hang", label: "Cửa hàng" },
    { href: "/dich-vu", label: "Dịch vụ" },
    { href: "/dat-lich", label: "Đặt lịch" },
    { href: "/dien-dan", label: "Diễn đàn" },
    { href: "/tu-van", label: "Tư vấn" },
  ];

  return (
    <header className={classes.header}>
      <Container size="xxl" className={classes.inner}>
        {/* Logo */}
        <Group className={classes.logoImg}>
          <Link href="/">
            <img src="/logo.png" alt="logo" className={classes.logoImg} />
          </Link>
        </Group>

        {/* Navigation - desktop */}
        <Group gap="lg" className={classes.nav} visibleFrom="md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${classes.link} ${
                pathname === item.href ? classes.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </Group>

        {/* Icons + Avatar */}
        <Group gap="md" className={classes.right}>
          <div className={classes.iconWrapper}>
            <ActionIcon variant="subtle" color="black" size="md">
              <IconBell />
            </ActionIcon>
            <Text size="xs">Thông báo</Text>
          </div>
          <div className={classes.iconWrapper}>
            <ActionIcon variant="subtle" color="black" size="md">
              <IconQuestionMark />
            </ActionIcon>
            <Text size="xs">Trợ giúp</Text>
          </div>
          <div className={classes.iconWrapper}>
            <ActionIcon variant="subtle" color="black" size="md">
              <IconWorld />
            </ActionIcon>
            <Text size="xs">Tiếng Việt</Text>
          </div>

          {/* Avatar */}
          <Group gap="xs" className={classes.user} visibleFrom="md">
            <Avatar
              src="https://i.pravatar.cc/40"
              alt="user"
              radius="xl"
              size="md"
            />
            <Text size="sm" className={classes.email}>
              dljflsdjfisdjfo2005@gmail.com
            </Text>
          </Group>

          {/* Burger menu - mobile */}
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="md"
          />
        </Group>
      </Container>

      {/* Drawer hiển thị menu khi mobile */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="80%"
        padding="md"
        title="Menu"
        hiddenFrom="md"
      >
        <Stack>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${classes.link} ${
                pathname === item.href ? classes.active : ""
              }`}
              onClick={() => setOpened(false)} // đóng drawer khi bấm
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </header>
  );
}
