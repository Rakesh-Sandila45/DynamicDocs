import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid2,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Footer } from "@/PageComponents/components/Footer";
import Image from "next/image";
import { useCustomRouter } from "@/customHooks/useCustomRouter";
import PublicHeader from "@/PageComponents/components/PublicHeader";

const AboutUs = () => {
  const router = useCustomRouter();
  return (
    <Box sx={{ bgcolor: "#00004f17" }}>
      <Box sx={{ pt: { xs: 8, sm: 10 }, mb: 5, px: 5 }}>
        {/* Mission Section */}
        <PublicHeader />
        <Box mb={5}>
          <Grid2 container spacing={3} alignItems="center">
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 2, sm: 1 } }}>
              <Typography variant="body1" color="textSecondary">
                Our mission is to simplify document creation through automation
                and customization. By allowing users to integrate dynamic data
                into their templates, we aim to eliminate manual errors, reduce
                repetitive tasks, and empower users to focus on what truly
                matters—growing their business.
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 2 } }}>
              <Image
                src="/ourMission.jpg"
                alt="Our Journey"
                height={500}
                width={500}
                style={{ width: "100%", borderRadius: "8px", height: "auto" }}
              />
            </Grid2>
          </Grid2>
        </Box>

        {/* Journey Section */}
        <Box mb={5}>
          <Grid2 container spacing={3} alignItems="center">
            <Grid2 size={{ xs: 12 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Journey
              </Typography>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Image
                src="/ourJourney.jpg"
                alt="Our Journey"
                height={500}
                width={500}
                style={{ width: "100%", borderRadius: "8px", height: "auto" }}
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Typography variant="body1" color="textSecondary">
                The idea for Dynamodocs came from a simple observation: many
                businesses and professionals waste hours creating documents that
                follow the same format but require slight customizations.
                Recognizing this inefficiency, we built a platform that
                automates this process, empowering users to create professional
                PDFs in seconds.
              </Typography>
            </Grid2>
          </Grid2>
        </Box>

        {/* What We Offer Section */}
        <Box mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What We Offer
          </Typography>
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Dynamic Document Creation
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Users can provide their own templates, and we enable those
                    templates to accept dynamic inputs for creating customized
                    PDFs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    User-Friendly Access
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Our platform allows users to log in with just a mobile
                    number. Templates are tied to their accounts for quick
                    access and reuse.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Professional-Grade Features
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Add logos, images, and signatures to enhance the quality of
                    your documents and download PDFs instantly.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* Testimonials Section */}
        <Box mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Testimonials
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "Dynamodocs has completely changed the way I manage HR
                    documents. What used to take hours is now done in minutes!"
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    — Priya Sharma, HR Manager
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body1" gutterBottom>
                    "As a freelancer, I often need to send contracts to clients.
                    Dynamodocs has made the process seamless and professional."
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    — Rohan Verma, Freelancer
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" mt={5}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ready to simplify your document workflow?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => router.push("/loginPage")}
          >
            Join US Now
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;
