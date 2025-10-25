"use client";

import { Card, Image, Text, Button, Grid, Stack } from "@mantine/core";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <Card
      withBorder
      padding="md"
      radius="md"
      style={{
        flex: 1,
        width: "100%", // cùng chiều rộng
        height: "180px", // cùng chiều cao
        margin: "2px auto",
        display: "flex",
      }}
    >
      <Grid gutter="sm" align="stretch" style={{ flex: 1 }}>
        {/* Cột ảnh */}
        <Grid.Col span={2}>
          <Image
            src={image}
            alt={title}
            radius="sm"
            fit="cover"
            height="100%" // full chiều cao card
            style={{ objectFit: "cover" }}
          />
        </Grid.Col>

        {/* Cột nội dung */}
        <Grid.Col span={10}>
          <Stack justify="space-between" style={{ height: "100%" }}>
            {/* Tiêu đề + mô tả */}
            <div>
              <Text
                fw={900}
                size="xl"
                style={{
                  marginBottom: 10,
                  color: "#222",
                  letterSpacing: "0.5px",
                }}
              >
                {title}
              </Text>
              <Text
                size="sm"
                c="dimmed"
                style={{
                  lineHeight: 1.7,
                  fontSize: "15px",
                  maxWidth: "95%",
                }}
              >
                {description}
              </Text>
            </div>

            {/* Button */}
            <Button
              size="md"
              radius="xl"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
              style={{
                fontWeight: 700,
                padding: "10px 28px",
                fontSize: "15px",
                letterSpacing: "0.5px",
                alignSelf: "flex-start",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              CHỌN
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
