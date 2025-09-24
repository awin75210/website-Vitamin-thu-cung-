"use client";

import {
  TextInput,
  Button,
  Group,
  Container,
  Title,
  Text,
  Card,
  Image,
  Grid,
  Badge,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
const topCards = [
  {
    title: "GÓP QUỸ - CỨU TRỢ",
    image: "/cuuho/gopquy-cuutro.jpg",
  },
  {
    title: "TÌM MÁI ẤM",
    image: "/cuuho/timmaiam.jpg",
  },
  {
    title: "LIÊN HỆ CỨU HỘ",
    image: "/cuuho/lienhecuuho.jpg",
  },
];
const pets = [
  {
    id: "topic",
    type: "topic",
    title: "TÌM MÁI ẤM",
    image: "/cuuho/timmaiam.jpg",
  },
  {
    id: 1,
    type: "pet",
    name: "THẠCH",
    gender: "Cái",
    age: "Trẻ",
    neutered: true,
    waitingDays: 130,
    image: "/cuuho/thach.jpg",
  },
  {
    id: 2,
    type: "pet",
    name: "MÍT",
    gender: "Cái",
    age: "Trẻ",
    neutered: true,
    waitingDays: 125,
    image: "/cuuho/mit.jpg",
  },
  {
    id: 3,
    type: "pet",
    name: "CỐM",
    gender: "Đực",
    age: "Trẻ",
    neutered: true,
    waitingDays: 85,
    image: "/cuuho/com.jpg",
  },
  {
    id: 4,
    type: "pet",
    name: "BƠ",
    gender: "Cái",
    age: "Trẻ",
    neutered: true,
    waitingDays: 150,
    image: "/cuuho/bo.jpg",
  },
  {
    id: 5,
    type: "pet",
    name: "MUN",
    gender: "Cái",
    age: "Trẻ",
    neutered: true,
    waitingDays: 90,
    image: "/cuuho/mun.jpg",
  },
  {
    id: 6,
    type: "pet",
    name: "XẸO",
    gender: "Đực",
    age: "Trẻ",
    neutered: false,
    waitingDays: 115,
    image: "/cuuho/xeo.jpg",
  },
  {
    id: 7,
    type: "pet",
    name: "VÀNG",
    gender: "Đực",
    age: "Trẻ",
    neutered: true,
    waitingDays: 60,
    image: "/cuuho/vang.jpg",
  },
  {
    id: 8,
    type: "pet",
    name: "NA",
    gender: "Cái",
    age: "Trẻ",
    neutered: true,
    waitingDays: 95,
    image: "/cuuho/na.jpg",
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
      <section style={{ backgroundColor: "#FFF2DF" }}>
        <Container size="xl" py="xl">
          <Grid justify="center" gutter="xl">
            {topCards.map((card, index) => (
              <Grid.Col key={index} span={{ base: 12, sm: 4 }}>
                <Card
                  shadow="sm"
                  radius="lg"
                  withBorder
                  style={{
                    backgroundColor: "#fff8e6",
                    overflow: "hidden",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  className="hover-card"
                >
                  <Card.Section>
                    <Image
                      src={card.image}
                      alt={card.title}
                      radius="md"
                      fit="cover"
                    />
                  </Card.Section>

                  <Text
                    ta="center"
                    fw={700}
                    mt="sm"
                    px="sm"
                    py={8}
                    style={{
                      backgroundColor: "#f8d7c4",
                      borderRadius: "6px",
                      display: "inline-block",
                      margin: "12px auto 0",
                    }}
                  >
                    {card.title}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>

        <style jsx>{`
          .hover-card:hover {
            border: 2px solid #ff9f43;
            transform: translateY(-4px);
          }
        `}</style>
      </section>

      <Container size="xl" py="xl">
        <Grid gutter="lg">
          {pets.map((pet) =>
            pet.type === "topic" ? (
              <Grid.Col
                key={pet.id}
                span={{ base: 12, sm: 6, md: 4 }}
                style={{ display: "flex" }}
              >
                <Card
                  shadow="md"
                  radius="md"
                  style={{ flex: 1, position: "relative", overflow: "hidden" }}
                  p={0}
                >
                  <Image
                    height="100%"
                    src={pet.image}
                    alt={pet.title}
                    fit="cover"
                  />

                  {/* Overlay chính */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",
                    }}
                  >
                    {/* Nút TÌM MÁI ẤM */}
                    <div
                      style={{
                        padding: "8px 24px",
                        borderRadius: "999px",
                        backgroundColor: "rgba(255,255,255,0.7)",
                        border: "2px solid #ff7b00",
                        color: "#ff7b00",
                        fontWeight: 700,
                        fontSize: "18px",
                      }}
                    >
                      {pet.title}
                    </div>

                    {/* Nút Xem thêm */}
                    <div
                      style={{
                        padding: "4px 16px",
                        borderRadius: "6px",
                        border: "1px solid white",
                        color: "white",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      Xem thêm
                    </div>
                  </div>
                </Card>
              </Grid.Col>
            ) : (
              // 🔶 Card thú cưng
              <Grid.Col
                key={pet.id}
                span={{ base: 12, sm: 6, md: 4 }}
                style={{ display: "flex" }}
              >
                <Card
                  shadow="md"
                  radius="md"
                  withBorder={false} // bỏ border ngoài
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: 0,
                    overflow: "hidden",
                  }}
                >
                  {/* Ảnh thú cưng */}
                  <Card.Section>
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      height={420}
                      fit="cover"
                    />
                  </Card.Section>

                  <Group
                    gap={0}
                    justify="center"
                    bg="#FFE6DB"
                    style={{ position: "relative" }}
                  >
                    {/* Khung tên thú cưng */}
                    <div
                      style={{
                        width: "80%",
                        backgroundColor: "#fdebe6",
                        textAlign: "center",
                        padding: "8px 12px",
                        borderLeft: "1px solid #ff7b00",
                        borderRight: "1px solid #ff7b00",
                        borderTop: "1px solid #ff7b00",
                        borderBottom: "1px solid #ff7b00",
                        position: "absolute", // ✅ nhô lên
                        top: "-40px", // chỉnh cao hơn group
                        zIndex: 2,
                      }}
                    >
                      <Text
                        fw={700}
                        size="lg"
                        c="orange"
                        style={{ textTransform: "uppercase" }}
                      >
                        {pet.name}
                      </Text>
                    </div>

                    {/* Khung thông tin chi tiết */}
                    <div
                      style={{
                        marginTop: "-1px", // ✅ chừa khoảng để không đè nội dung
                        width: "80%",
                        backgroundColor: "#fdebe6",
                        padding: "12px 16px",
                        textAlign: "left",
                        borderLeft: "1px solid #ff7b00",
                        borderRight: "1px solid #ff7b00",
                        borderBottom: "1px solid #ff7b00",
                      }}
                    >
                      <Text size="sm" c="dark" style={{ lineHeight: 1.6 }}>
                        - Giới tính: {pet.gender} <br />- Độ tuổi: {pet.age}{" "}
                        <br />- Triệt sản: {pet.neutered ? "Rồi" : "Chưa"}
                      </Text>

                      <Text size="sm" mt="sm" c="red" fw={500}>
                        {pet.waitingDays
                          ? `Ba mẹ ơi con đã đợi ${pet.waitingDays} ngày rồi`
                          : "Con đang chờ ba mẹ đón về"}
                      </Text>
                    </div>
                  </Group>
                </Card>
              </Grid.Col>
            )
          )}
        </Grid>
      </Container>
      <Group justify="center" mb={10}>
        <Text c="#FA6509">XEM THÊM</Text>
      </Group>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative", // để overlay định vị tuyệt đối
        }}
      >
        <img
          src="cuuho/bg2.png"
          alt="banner1"
          style={{
            width: "100%",
            height: "auto", // giữ nguyên tỉ lệ ảnh
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative", // để overlay định vị tuyệt đối
        }}
      >
        <img
          src="cuuho/bg3.png"
          alt="banner1"
          style={{
            width: "100%",
            height: "auto", // giữ nguyên tỉ lệ ảnh
            display: "block",
          }}
        />
      </div>
    </>
  );
}
