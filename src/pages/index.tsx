import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid2,
  Container,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  CardHeader,
  Icon,
  IconButton,
} from "@mui/material";
import { Footer } from "@/PageComponents/components/Footer";
import Image from "next/image";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import { amber, deepPurple, teal } from "@mui/material/colors";
import DownloadIcon from "@mui/icons-material/Download";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LoginIcon from "@mui/icons-material/Login";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  CheckCircleOutline,
  FileCopy,
  Settings,
  Download,
} from "@mui/icons-material";
import PublicHeader from "@/PageComponents/components/PublicHeader";

const HomePage: React.FC = () => {
  const router = useCustomRouter();

  return (
    <Box>
      <PublicHeader />
      <Box
        sx={{
          backgroundColor: "#fff",
          py: 8,
          textAlign: "center",
          mt: 7,
          background: 'url("/time.jpg")',
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Effortlessly Generate Dynamic PDFs with Your Templates!
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }} gutterBottom>
            Turn repetitive tasks into seamless workflows. Perfect for HRs,
            managers, and professionals needing customizable document solutions.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/loginPage")}
              sx={{ mr: 2, fontSize: { xs: "13px", sm: "18px" } }}
            >
              Get Started
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/aboutUsPage")}
              sx={{ fontSize: { xs: "13px", sm: "18px" } }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#ffffff", px: 5 }}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            How It Works
          </Typography>
          <Grid2 container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: "Provide Your Templates",
                description: "Share your existing document templates with us.",
                icon: <FileCopy />,
                color: deepPurple[500],
              },
              {
                title: "Customize",
                description:
                  "Let us make them dynamic by adding fields to input variable data.",
                icon: <Settings />,
                color: teal[500],
              },
              {
                title: "Log In & Generate PDFs",
                description:
                  "After logging in, fill in the required data, and download your dynamic PDFs instantly.",
                icon: <Download />,
                color: amber[500],
              },
            ].map((step, index) => (
              <Grid2 size={{ xs: 12, sm: 4 }} key={index}>
                <Card
                  elevation={5}
                  sx={{
                    height: "100%",
                    backgroundColor: step.color,
                    color: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Icon
                      sx={{
                        fontSize: 50,
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      {step.icon}
                    </Icon>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography variant="body2">{step.description}</Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#f9f9f9", px: 5 }}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{
              color: "#333",
              textTransform: "uppercase",
              letterSpacing: 1.2,
            }}
          >
            Features
          </Typography>
          <Grid2 container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: "Customizable PDFs",
                desc: "Tailor-made templates to meet your requirements.",
                icon: <BorderColorIcon />,
                color: deepPurple[500],
              },
              {
                title: "Simple Login",
                desc: "Log in using your mobile number. No hassle.",
                icon: <LoginIcon />,
                color: teal[500],
              },
              {
                title: "Dynamic Data Integration",
                desc: "Add names, dates, logos, or other details effortlessly.",
                icon: <ListAltIcon />,
                color: amber[500],
              },
              {
                title: "All Document Types",
                desc: "Supports offer letters, termination letters, contracts, and more.",
                icon: <PictureAsPdfIcon />,
                color: deepPurple[300],
              },
              {
                title: "Download Instantly",
                desc: "Get your PDFs as soon as you submit the form.",
                icon: <DownloadIcon />,
                color: teal[300],
              },
              {
                title: "Image & Signature Support",
                desc: "Include logos and signatures seamlessly.",
                icon: <InsertPhotoIcon />,
                color: amber[300],
              },
            ].map((feature, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  elevation={5}
                  sx={{
                    height: "100%",
                    backgroundColor: feature.color,
                    color: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <IconButton
                      sx={{
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      {feature.icon}
                    </IconButton>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2">{feature.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            What Our Users Say
          </Typography>
          <Grid2 container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                name: "John Doe",
                role: "HR Manager",
                company: "XYZ Corp",
                text: "DynamicDocs has saved us hours every week by automating the process of generating offer letters and other documents. A game-changer for our HR department!",
              },
              {
                name: "Jane Smith",
                role: "Operations Head",
                company: "ABC Ltd.",
                text: "As a manager, I no longer have to manually create PDFs for each employee. The customization and dynamic templates make it super easy!",
              },
              {
                name: "Michael Johnson",
                role: "CEO",
                company: "Tech Innovators",
                text: "The ease of use and customization options in DynamicDocs are phenomenal. It streamlined our document processes and saved us tons of time.",
              },
            ].map((testimonial, index) => (
              <Grid2
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
                key={index}
              >
                <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {testimonial.name.charAt(0)}
                      </Avatar>
                    }
                    title={testimonial.name}
                    subheader={`${testimonial.role} at ${testimonial.company}`}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {'"'}
                      {testimonial.text}
                      {'"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>

      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid2 container>
            <Grid2
              size={{ xs: 12, sm: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {" "}
              <Image
                src="/faq.jpg"
                alt="FAQ'S"
                height={500}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <List sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
                {[
                  {
                    question: "What kind of documents can I create?",
                    answer:
                      "You can create any kind of documents, including offer letters, termination letters, and contracts.",
                  },
                  {
                    question: "How do I get started?",
                    answer:
                      "Simply sign up with your mobile number, and we'll help you upload your templates and create dynamic PDFs.",
                  },
                  {
                    question: "Can I include images and signatures?",
                    answer:
                      "Yes, our system supports adding images, logos, and signatures.",
                  },
                ].map((faq, index) => (
                  <ListItem key={index} sx={{ mb: 2 }}>
                    <ListItemText
                      primary={faq.question}
                      secondary={faq.answer}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid2>
          </Grid2>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
