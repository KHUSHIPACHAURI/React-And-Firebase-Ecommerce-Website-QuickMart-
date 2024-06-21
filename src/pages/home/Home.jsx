import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonials";
import { Loader } from "lucide-react";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />

      <Loader />
    </Layout>
  );
};

export default HomePage;
