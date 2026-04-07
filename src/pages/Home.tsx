import HeroSection from '../sections/HeroSection';
import RecipeSection from '../sections/RecipeSection';
import FeatureSection from '../sections/FeatureSection';
import StatsSection from '../sections/StatsSection';
import ConstitutionSection from '../sections/ConstitutionSection';
import FoodMedicineSection from '../sections/FoodMedicineSection';
import CTASection from '../sections/CTASection';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Recipe Section */}
      <RecipeSection />
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Constitution Section */}
      <ConstitutionSection />
      
      {/* Food Medicine Section */}
      <FoodMedicineSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
