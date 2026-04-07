import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import ObesityDefinition from './pages/ObesityDefinition';
import TcmObesity from './pages/TcmObesity';
import DietaryPrinciples from './pages/DietaryPrinciples';
import ConstitutionDetail from './pages/ConstitutionDetail';
import FoodMedicineDetail from './pages/FoodMedicineDetail';
import BmiCalculator from './pages/BmiCalculator';
import CalorieQuery from './pages/CalorieQuery';
import ExerciseGuide from './pages/ExerciseGuide';
import GuideIntro from './pages/GuideIntro';
import Disclaimer from './pages/Disclaimer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:regionId" element={<RecipeDetail />} />
        <Route path="/obesity-definition" element={<ObesityDefinition />} />
        <Route path="/tcm-obesity" element={<TcmObesity />} />
        <Route path="/dietary-principles" element={<DietaryPrinciples />} />
        <Route path="/constitution" element={<ConstitutionDetail />} />
        <Route path="/food-medicine" element={<FoodMedicineDetail />} />
        <Route path="/bmi-calculator" element={<BmiCalculator />} />
        <Route path="/calories" element={<CalorieQuery />} />
        <Route path="/exercise" element={<ExerciseGuide />} />
        <Route path="/guide-intro" element={<GuideIntro />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;
