"use client";

import {
  TextInput,
  Button,
  Group,
  Container,
  Overlay,
  Image,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import FeatureCard from "./Component/FeatureCard";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 768px)");

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
      <Container size="xxl" py="xl">
        <Title order={2} ta="center" mb="xs">
          TÍNH NĂNG CHÍNH
        </Title>
        <Text ta="center" mb="lg" c="dimmed">
          Bảo vệ và yêu thương thú cưng
        </Text>
        <Group
          grow
          gap="xl"
          wrap={isMobile ? "wrap" : "nowrap"} // xuống hàng khi mobile
          style={{
            alignItems: "stretch", // 🔥 giúp 2 cột có chiều cao bằng nhau
          }}
        >
          {/* Cột hình ảnh */}
          <div
            style={{
              flex: isMobile ? "0 0 100%" : "0 0 50%",
              display: "flex",
              alignItems: "stretch", // 🔥 làm cho ảnh chiếm toàn chiều cao
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src="BG1.png"
                alt="Vitamin Thú Cưng"
                style={{
                  width: "100%",
                  height: "100%", // 🔥 kéo ảnh cao bằng cột bên kia
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay text bám chắc trong vùng ảnh */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  width: "80%",
                  padding: "0 10px",
                }}
              >
                <Text
                  size={isMobile ? "24px" : "48px"}
                  fw={800}
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                    lineHeight: 1.3,
                  }}
                >
                  Khám phá nhanh các tính năng đặc biệt của Website Vitamin Thú
                  Cưng
                </Text>
              </div>
            </div>
          </div>

          {/* Cột danh sách tính năng */}
          <Stack
            gap="md"
            align="stretch"
            style={{
              flex: isMobile ? "0 0 100%" : "0 0 50%",
              justifyContent: "space-between", // dàn đều card
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </Stack>
        </Group>
      </Container>
      {/* Rescue Section */}
      <Container size="xxl" py="xl" style={{ textAlign: "center" }}>
        <Title order={2} mb="xs">
          Cứu hộ nổi bật
        </Title>
        <Text c="dimmed" mb="lg">
          Những hành trình yêu thương – nơi hy vọng được thắp sáng
        </Text>

        <Group
          grow
          gap="xl"
          align="stretch"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Item 1 */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#fff",
              maxWidth: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/rescue1.png"
              alt="Cứu hộ 1"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Button
              fullWidth
              size="md"
              variant="filled"
              color="orange"
              style={{
                borderRadius: "0",
                backgroundColor: "#FBD2A4",
                color: "#000",
                fontWeight: 700,
              }}
            >
              GÓP QUỸ - CỨU TRỢ
            </Button>
          </div>

          {/* Item 2 */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#fff",
              maxWidth: "300px",

              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/rescue2.png"
              alt="Cứu hộ 2"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Button
              fullWidth
              size="md"
              variant="filled"
              color="orange"
              style={{
                borderRadius: "0",
                backgroundColor: "#FBD2A4",
                color: "#000",
                fontWeight: 700,
              }}
            >
              TÌM MÁI ẤM
            </Button>
          </div>

          {/* Item 3 */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#fff",
              maxWidth: "300px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/rescue3.png"
              alt="Cứu hộ 3"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <Button
              fullWidth
              size="md"
              variant="filled"
              color="orange"
              style={{
                borderRadius: "0",
                backgroundColor: "#FBD2A4",
                color: "#000",
                fontWeight: 700,
              }}
            >
              LIÊN HỆ CỨU HỘ
            </Button>
          </div>
        </Group>
      </Container>
      {/* Featured Products Section */}
      <Container size="xl" py="xl" style={{ textAlign: "center" }}>
        <Title order={2} mb="xs">
          Sản phẩm nổi bật
        </Title>
        <Text c="dimmed" mb="lg">
          Những món đồ được yêu thích nhất dành cho thú cưng của bạn
        </Text>

        <Group
          gap="lg"
          align="stretch"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              image: "/sp1.png",
              name: "Thức ăn hạt IAMS (400G)",
              price: "₫154.000",
            },
            {
              image: "/sp2.png",
              name: "Pate Smatheart (Lớn)",
              price: "₫250.000",
            },
            {
              image: "/sp3.png",
              name: "Thức ăn Luvcare",
              price: "₫160.000",
            },
            {
              image: "/sp4.png",
              name: "Pate Friskies",
              price: "₫20.000",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                width: "220px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {/* Ảnh */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              {/* Thông tin sản phẩm */}
              <div style={{ padding: "10px 12px", textAlign: "left" }}>
                <Text fw={600} size="sm" lineClamp={2}>
                  {item.name}
                </Text>
                <Text fw={700} c="orange" mt={4}>
                  {item.price}
                </Text>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "6px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff7b00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.8 4.6c-1.6-1.7-4.2-1.8-5.9-.2L12 7.3l-2.9-2.9C7.4 2.8 4.8 2.9 3.2 4.6c-1.8 1.8-1.8 4.8 0 6.6L12 20l8.8-8.8c1.8-1.8 1.8-4.8 0-6.6z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Group>
      </Container>
      {/* Featured Services Section */}
      <Container size="xl" py="xl" style={{ textAlign: "center" }}>
        <Title order={2} mb="xs">
          Dịch vụ nổi bật
        </Title>
        <Text c="dimmed" mb="lg">
          Những dịch vụ được tin tưởng và yêu thích nhất dành cho thú cưng của
          bạn
        </Text>

        <Group
          gap="lg"
          align="stretch"
          style={{
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              image: "/dv1.png",
              title: "Khám & chăm sóc sức khỏe",
              desc: "Khỏe mạnh từ trái tim",
            },
            {
              image: "/dv2.png",
              title: "Tiêm phòng & điều trị",
              desc: "Ngăn ngừa hôm nay, an tâm mai sau",
            },
            {
              image: "/dv3.png",
              title: "Spa & Grooming",
              desc: "Đẹp xinh từ đầu đến đuôi",
            },
            {
              image: "/dv4.png",
              title: "Huấn luyện & hành vi",
              desc: "Ngoan ngoãn, thông minh, vui vẻ",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                width: "250px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              {/* Ảnh dịch vụ */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              {/* Thông tin dịch vụ */}
              <div style={{ padding: "12px 14px", textAlign: "left" }}>
                <Text fw={600} size="md" mb={4}>
                  {item.title}
                </Text>
                <Text c="dimmed" size="sm">
                  {item.desc}
                </Text>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff7b00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Group>
      </Container>
    </>
  );
}
