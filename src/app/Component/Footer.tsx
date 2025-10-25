import {
  Container,
  Grid,
  GridCol,
  Text,
  Title,
  Group,
  Anchor,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandYoutube,
  IconMapPin,
  IconPhone,
  IconMail,
  IconWorld,
} from "@tabler/icons-react";

export default function FooterSection() {
  return (
    <footer
      style={{
        backgroundColor: "#f9f9f9",
        padding: "60px 0 20px 0",
        position: "relative",
      }}
    >
      <Container size="xl">
        <Grid gutter="xl">
          {/* Cột 1: Giới thiệu */}
          <GridCol span={{ base: 12, md: 3 }}>
            <Group align="center" mb="sm">
              <img
                src="/logo.png"
                alt="logo"
                style={{ width: 28, height: 28 }}
              />
              <Title order={5} fw={700}>
                VITAMIN THÚ CƯNG
              </Title>
            </Group>

            <Text c="dimmed" size="sm" mb="md">
              Nền tảng chăm sóc toàn diện cho thú cưng Việt Nam – nơi yêu thương
              và công nghệ gặp nhau.
            </Text>

            <Group gap="xs">
              <Anchor href="#" target="_blank">
                <IconBrandFacebook size={20} color="#000" />
              </Anchor>
              <Anchor href="#" target="_blank">
                <IconBrandInstagram size={20} color="#000" />
              </Anchor>
              <Anchor href="#" target="_blank">
                <IconBrandPinterest size={20} color="#000" />
              </Anchor>
              <Anchor href="#" target="_blank">
                <IconBrandYoutube size={20} color="#000" />
              </Anchor>
            </Group>
          </GridCol>

          {/* Cột 2: Liên kết nhanh */}
          <GridCol span={{ base: 12, md: 3 }}>
            <Title order={5} mb="sm">
              Liên kết nhanh
            </Title>
            <Text size="sm" c="dimmed">
              <div>Trang chủ</div>
              <div>Cửa hàng sản phẩm</div>
              <div>Tư vấn sức khỏe</div>
              <div>Cộng đồng cứu hộ</div>
            </Text>
          </GridCol>

          {/* Cột 3: Thông tin liên hệ */}
          <GridCol span={{ base: 12, md: 3 }}>
            <Title order={5} mb="sm">
              Thông tin liên hệ
            </Title>
            <Text size="sm" c="dimmed">
              <Group gap={6}>
                <IconMapPin size={16} />
                <span>Trường Đại học Bạc Liêu – Khoa Kỹ thuật & Công nghệ</span>
              </Group>
              <Group gap={6} mt={6}>
                <IconPhone size={16} />
                <span>0918 778 144</span>
              </Group>
              <Group gap={6} mt={6}>
                <IconMail size={16} />
                <span>webvitaminthucung@gmail.com</span>
              </Group>
              <Group gap={6} mt={6}>
                <IconWorld size={16} />
                <span>www.vitaminthucung.vn</span>
              </Group>
            </Text>
          </GridCol>

          {/* Cột 4: Kết nối cộng đồng */}
          <GridCol span={{ base: 12, md: 3 }}>
            <Title order={5} mb="sm">
              Kết nối cộng đồng
            </Title>
            <Text c="dimmed" size="sm">
              Theo dõi chúng tôi
            </Text>

            <Group mt="xs">
              <IconBrandInstagram size={22} color="#000" />
              <IconBrandFacebook size={22} color="#000" />
              <IconBrandYoutube size={22} color="#000" />
            </Group>

            <Text c="dimmed" size="sm" mt="sm">
              Lan tỏa yêu thương <br /> Xây dựng cộng đồng hạnh phúc
            </Text>
          </GridCol>
        </Grid>

        {/* Dòng bản quyền */}
        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: "40px",
            paddingTop: "12px",
            textAlign: "center",
          }}
        >
          <Text size="sm" c="dimmed">
            © 2025 Vitamin Thú Cưng | Một dự án trải nghiệm sinh viên Đại Học
            Bạc Liêu <br />
            “Công nghệ vì hạnh phúc của thú cưng và con người”
          </Text>
        </div>
      </Container>
    </footer>
  );
}
