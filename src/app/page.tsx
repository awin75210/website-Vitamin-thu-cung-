"use client";

import {
  TextInput,
  Button,
  Group,
  Container,
  Overlay,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import FeatureCard from "./Component/FeatureCard";

const features = [
  {
    title: "CỨU HỘ",
    description:
      "Chỉ một cú click nhỏ, bạn có thể thắp lên hy vọng và cứu lấy mạng sống của một người bạn bé nhỏ đang cần được giúp đỡ.",
    image: "/cuuho.png",
  },
  {
    title: "CỬA HÀNG",
    description:
      "Mỗi sản phẩm không chỉ là đồ dùng, mà là cách bạn trao gửi yêu thương, sức khỏe và niềm vui cho thú cưng của mình.",
    image: "/cuahang.png",
  },
  {
    title: "DỊCH VỤ",
    description:
      "Từ sức khỏe, dinh dưỡng đến sắc đẹp, chúng tôi mang đến những dịch vụ tận gốc để thú cưng của bạn luôn khỏe mạnh.",
    image: "/dichvu.png",
  },
  {
    title: "ĐẶT LỊCH",
    description:
      "Chỉ với vài thao tác đơn giản, bạn có thể đặt lịch khám, spa hay chăm sóc thú cưng nhanh chóng, tiện lợi và hoàn toàn chủ động.",
    image: "/datlich.png",
  },
  {
    title: "DIỄN ĐÀN",
    description:
      "Nơi những người yêu thú cưng cùng nhau chia sẻ kinh nghiệm, trao đổi kiến thức và lan tỏa tình yêu thương.",
    image: "/diendan.png",
  },
  {
    title: "TƯ VẤN",
    description:
      "Nơi những người yêu thú cưng có thể xin lời khuyên, chia sẻ khó khăn và nhận được hỗ trợ từ chuyên gia.",
    image: "/tuvan.png",
  },
];

export default function HomePage() {
  const [value, setValue] = useState("");

  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative", // để overlay định vị tuyệt đối
        }}
      >
        <img
          src="/BG-Home.png"
          alt="banner"
          style={{
            width: "100%",
            height: "auto", // giữ nguyên tỉ lệ ảnh
            display: "block",
          }}
        />

        {/* Overlay phủ lên ảnh */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.35)", // màu đen mờ
            zIndex: 1,
          }}
        />

        {/* Content nằm trên overlay */}
        <Container
          size="lg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2, // cao hơn overlay
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Group gap="xs" style={{ width: "100%" }}>
            <TextInput
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder="Tìm kiếm thú cưng, dịch vụ..."
              radius="xl"
              size="lg"
              leftSection={<IconSearch size={20} />}
              style={{ flex: 1 }}
            />
            <Button radius="xl" size="lg" color="orange">
              Tìm kiếm
            </Button>
          </Group>
        </Container>
      </div>

      {/* Features Section */}
      <Container size="xl" py="xl">
        <Title order={2} ta="center" mb="xs">
          TÍNH NĂNG CHÍNH
        </Title>
        <Text ta="center" mb="lg" c="dimmed">
          Bảo vệ và yêu thương thú cưng
        </Text>

        <Stack gap="md" align="stretch">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </Stack>
      </Container>
    </>
  );
}
